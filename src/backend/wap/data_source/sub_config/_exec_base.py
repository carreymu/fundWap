from typing import Any
from wap.base import DataSource, exec_sql
from wap.data_source.sub_config import system_info as c


class DBInfo(DataSource):
    req: dict
    event_names: str
    event_default: Any

    async def compute(self):
        # import pdb;pdb.set_trace()
        con = c.config[self.event_names]
        res = await exec_sql(con['sql_info'], **self.req)
        return res if res else self.event_default
