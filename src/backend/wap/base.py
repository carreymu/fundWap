import json
import traceback
import asyncio
import pandas as pd
from copy import copy
from hashlib import sha1
from wap import wap_app as app, ctx_event
from dataclasses import dataclass
from functools import _make_key

from wap.monitor import dependence_statsd
from wap.exceptions import (
    DBExecuteError,
    DBKeyNotExist,
    # InterfaceKeyNotExist,
    # InterfaceRequestError,
    RedisExcuteError,
    RedisKeyNotExist
)
from wap.settings import DEPENDENCE_TIMEOUT, executor


class Database:
    """
        "sql_info": {"engine_name": "db_fund_wap_mysql","columns": ["title", "content"],
            "sql": {"mysql": "mysql","sqlite3": "sqlite3","mssql": "mssql"}
        }
    """
    def __init__(self, sql_info: dict):
        self.key = sql_info["engine_name"]
    # def __init__(self, key: dict):
    #     self.key = key
        self.db_info = self._get_info()
        self.db_type = self.db_info["db_type"]
        self.engine = self.db_info["engine"]
        # about sql
        self.sql = sql_info["sql"][self.db_type]

    def _get_info(self):
        db_info = app.db.get_info(self.key)
        if db_info is None:
            raise DBKeyNotExist(key=self.key)
        return db_info

    @dependence_statsd("db")
    async def read_sql(self, sql: str, columns: list = None):   # return Json or DF
        try:
            if self.db_type == "mysql":
                async with self.engine.acquire() as conn:
                    async with conn.cursor() as cursor:
                        await asyncio.wait_for(cursor.execute(sql), DEPENDENCE_TIMEOUT)
                        res = await cursor.fetchall()
                        df_result = pd.DataFrame(res, columns=[item[0] for item in cursor.description])

            elif self.db_type == "mssql":
                loop = asyncio.get_running_loop()
                df_result = await asyncio.wait_for(
                    loop.run_in_executor(executor, pd.read_sql, sql, self.engine), DEPENDENCE_TIMEOUT
                )

            if columns is not None:
                df_result = df_result[columns]

            return df_result

        except asyncio.CancelledError:
            raise
        except asyncio.TimeoutError:
            raise DBExecuteError(key=self.key, db_info=self.db_info, sql=sql, reason="[wap]数据库执行SQL超时!!!")
        except Exception:
            error = traceback.format_exc()
            raise DBExecuteError(key=self.key, db_info=self.db_info, sql=sql, reason=error)


    # exec sql
    async def exec_sql(self, sql: str, fmt: str = "json", **sql_params):
        columns = await self.get_columns(sql)
        # import pdb;pdb.set_trace()
        df = await self.read_sql(sql.format(**sql_params), columns=columns)
        if fmt == "json":
            return json.loads(df.to_json(force_ascii=False))
        elif fmt == "df":
            return df
        elif fmt == "str":
            return df.to_json(force_ascii=False)
        return None

    async def get_columns(self, sql_in):
        sql = sql_in.lower()
        sql_trim = sql[7: sql.find(' from ')].strip()
        # print(sql_trim)
        return [x.strip().split(' ')[-1] for x in sql_trim.split(',') if len(x) > 0 and 'top ' not in x]


# exec sql
async def exec_sql(sql_info: dict, fmt: str = "json", **sql_params):
    db = Database(sql_info)
    columns = await get_columns(db.sql)
    df = await db.read_sql(db.sql.format(**sql_params), columns=columns)
    # import pdb;pdb.set_trace()
    if fmt == "json":
        return json.loads(df.to_json(force_ascii=False))
    elif fmt == "df":
        return df
    elif fmt == "str":
        return df.to_json(force_ascii=False)
    return None


async def get_columns(sql_in):
    sql = sql_in.lower()
    sql_trim = sql[7: sql.find(' from ')].strip()
    # print(sql_trim)
    return [x.strip().split(' ')[-1] for x in sql_trim.split(',') if len(x) > 0 and 'top ' not in x]


class _Meta(type):
    def __init__(cls, name, bases, dic):
        if name != "DataSource":
            dataclass(cls, repr=False, eq=False, frozen=True)
            if not hasattr(cls, "compute"):
                raise NotImplementedError


class DataSource(metaclass=_Meta):
    _cache = None
    _lock = None
    _exception = False

    @staticmethod
    def _make_cache_key(kw):
        """
        cache key 计算 hash 值
        """
        # 这里不会影响最终使用 req
        kw.pop("req", None)
        try:
            # 使用 lru_cache 计算key的方法, 比较快噢～
            key = _make_key(tuple(), kw, typed=False)
            return key
        except Exception:
            # 如果 value 不可 hash, 则选择比较慢的 hash
            key = ""
            if kw:
                for item in sorted(kw.items()):
                    key += str(item)
            return sha1(key.encode("utf-8")).hexdigest()

    def __new__(cls, *args, **kw):
        assert not args, "DataSource only accepts named arguments"
        ctx = ctx_event.get()
        cls_id = id(cls)
        if cls_id not in ctx["data_source"]:
            ctx["data_source"][cls_id] = {}

        cache_key = DataSource._make_cache_key(kw)
        if cache_key in ctx["data_source"][cls_id]:
            return ctx["data_source"][cls_id][cache_key]

        instance = super().__new__(cls)
        ctx["data_source"][cls_id][cache_key] = instance
        return instance

    async def _compute(self):
        # 判断是否已经有DataSource正在计算中
        if self._lock is not None:
            await self._lock.wait()

            if self._exception:
                # 通过 CancelledError 传播 CacheError
                raise asyncio.CancelledError

            res = copy(self._cache)
            return res

        # 加锁, 使其他单例等待这次计算
        object.__setattr__(self, "_lock", asyncio.Event())
        try:
            # 包装成 task, 以便触发 TimedTask 计时
            object.__setattr__(self, "_cache", await asyncio.create_task(self.compute()))
        except Exception:
            # 标记后续使用该DataSource直接cancel
            object.__setattr__(self, "_exception", True)
            raise
        finally:
            # 通知等待的DataSource可以从cache取
            self._lock.set()

        res = copy(self._cache)
        return res

    def __await__(self):
        # 使得可以使用 await AAA() 来替代 await AAA().compute()
        return self._compute().__await__()


class RedisCluster:
    def __init__(self, key: str):
        self.redis_info = self._get_info(key)
        self.client = self.redis_info["client"]

    def _get_info(self, key):
        redis_info = app.redis.get_info(key)
        if redis_info is None:
            raise RedisKeyNotExist(key=key)
        return redis_info

    def __getattr__(self, name: str):
        return self.wrapper(name)

    def wrapper(self, name):
        async def catch_redis_exception(*args, **kwargs):
            try:
                task = asyncio.wait_for(getattr(self.client, name)(*args, **kwargs), DEPENDENCE_TIMEOUT)
                return await task
            except asyncio.CancelledError:
                raise
            except asyncio.TimeoutError:
                raise RedisExcuteError(
                    redis_info=self.redis_info, func=name, args=args, kw=kwargs, reason="[wap]Redis timeout!!!"
                )
            except Exception:
                error = traceback.format_exc()
                raise RedisExcuteError(redis_info=self.redis_info, func=name, args=args, kw=kwargs, reason=error)

        return catch_redis_exception
