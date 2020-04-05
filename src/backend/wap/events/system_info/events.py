# from typing import Any
# from wap.base import DataSource
# from wap.data_source.base_db import DBInfo
#
#
# class SystemInfo(DataSource):
#     req: dict
#     event_names: str
#     event_default: Any
#
#     async def compute(self):
#         result = await DBInfo(category=self.req["category"], event_name=self.event_names)
#         return result if result else self.event_default
