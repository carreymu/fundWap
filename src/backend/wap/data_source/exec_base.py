from typing import Any
from wap.base import DataSource, exec_sql


class DBInfo(DataSource):
    req: dict
    sql_info: dict
    event_names: str
    event_default: Any

    async def compute(self):
        res = await exec_sql(self.sql_info, **self.req)
        return res if res else self.event_default

