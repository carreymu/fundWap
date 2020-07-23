from typing import Any
from wap.base import DataSource, exec_sql, exec_sql_key, exec_sql_op


class DBInfo(DataSource):
    req: dict
    sql_info: dict
    event_default: Any

    async def compute(self):
        res = await exec_sql(self.sql_info, **self.req)
        return res if res else self.event_default


# class DBInfoKey(DataSource):
#     req: dict
#     event_name: str
#     event_default: Any
#
#     async def compute(self):
#         res = await exec_sql_key(self.event_name, **self.req)
#         return res if res else self.event_default
