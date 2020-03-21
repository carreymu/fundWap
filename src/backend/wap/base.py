import traceback
import asyncio
import pandas as pd
from wap import wap_app as app
from wap.exceptions import (
    DBExecuteError,
    DBKeyNotExist,
    InterfaceKeyNotExist,
    InterfaceRequestError,
    RedisExcuteError,
    RedisKeyNotExist,
    DBTypeNotSupport
)
from wap.settings import DEPENDENCE_TIMEOUT, executor

class Database:
    def __init__(self, key: str):
        self.key = key
        self.db_info = self._get_info()
        self.db_type = self.db_info["db_type"]
        self.engine = self.db_info["engine"]

    def _get_info(self):
        db_info = app.db.get_info(self.key)
        if db_info is None:
            raise DBKeyNotExist(key=self.key)
        return db_info

    @dependence_statsd("db")
    async def read_sql(self, sql: str, columns: list = None):
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
                    redis_info=self.redis_info, func=name, args=args, kw=kwargs, reason="[wap]Redis超时!!!"
                )
            except Exception:
                error = traceback.format_exc()
                raise RedisExcuteError(redis_info=self.redis_info, func=name, args=args, kw=kwargs, reason=error)

        return catch_redis_exception
