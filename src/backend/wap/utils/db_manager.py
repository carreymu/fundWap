import asyncio

import aiomysql
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL


class Pool:
    """
    创建数据库连接池
    """

    type_to_driver = {"mysql": "mysql+pymysql", "mssql": "mssql+pymssql"}

    def __init__(self, config):
        self.db_type = config["db_type"]
        self.user = config["user"]
        self.passwd = config["passwd"]
        self.host = config["host"]
        self.port = config.get("port")
        self.db = config.get("db")

    def _get_url(self):
        driver = self.type_to_driver[self.db_type]
        return URL(drivername=driver, username=self.user, password=self.passwd, host=self.host, port=self.port)

    async def get_engine(self):
        if self.db_type == "mysql":
            kwargs = {"user": self.user, "password": self.passwd, "db": self.db, "host": self.host, "port": self.port}
            # 默认 minsize=1 如果mysql连不上则会报错
            engine = await aiomysql.create_pool(minsize=0, pool_recycle=60, **kwargs)
        else:
            url = self._get_url()
            engine = create_engine(url, pool_size=2)

        return engine


class DatabaseManager:
    def __init__(self, db_config):
        self.db_config = db_config

    async def init(self):
        for key, config in self.db_config.items():
            config["key"] = key
            config["engine"] = await Pool(config).get_engine()

        return self

    def get_info(self, key):
        return self.db_config.get(key)

    async def cleanup(self):
        async_cleanup_jobs = []
        for config in self.db_config.values():
            if config["db_type"] == "mysql":
                config["engine"].close()
                async_cleanup_jobs.append(config["engine"].wait_closed())

        await asyncio.gather(*async_cleanup_jobs)
