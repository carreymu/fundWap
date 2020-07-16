from typing import Any
from wap.base import DataSource
import hashlib


class UserLoginCheck(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        res = self.dependence_source
        if res and hashlib.md5(res['req']['upwd']).hexdigest() == res[0]['password']:
            return res
        return self.event_default
