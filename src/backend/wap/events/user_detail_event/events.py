from typing import Any
from wap.base import DataSource
import hashlib
from uuid import uuid1


class UserLoginCheck(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        res = self.dependence_source
        result = res['user_detail_by_name']
        if result:
            req = res['req']
            hl = hashlib.md5()
            hl.update(req['upwd'].encode(encoding='utf-8'))
            if result[0]['password'] == hl.hexdigest():
                return result
        return self.event_default
