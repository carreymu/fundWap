from typing import Any
from wap.base import DataSource, Database
# from wap.data_source import data_source_config


class DBInfo(DataSource):
    columns = ["title", "content"]
    sql_format = """select title, content from system_info where category={category}"""
    engine_name = "db_fund_wap_mysql"

    req: dict
    event_name: str

    async def compute(self):
        db = Database(self.engine_name)
        df = await db.exec_sql(self.sql_format, **self.req)
        return df
