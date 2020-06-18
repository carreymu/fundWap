from typing import Any

from wap.base import DataSource
from wap.data_source import exec_base


class UserInvestAccountJoined(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source
        if result:

            return {}
        return self.event_default
