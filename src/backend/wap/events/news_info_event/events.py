from typing import Any
from wap.base import DataSource
from wap.data_source.exec_base import DBInfo


class NewsInfoTopN(DataSource):
    req: dict
    event_names: str
    event_default: Any

    async def compute(self):
        result = await DBInfo(req=self.req, event_name=self.event_names)
        return result if result else self.event_default
