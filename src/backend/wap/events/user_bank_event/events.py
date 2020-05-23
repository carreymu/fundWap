from typing import Any

from wap.base import DataSource
from wap.data_source import exec_base


class UserbankWapper(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source
        if result:
            result = [x for x in result["user_bank_by_uid"] if x['is_default'] == 1]
            if result:
                # import pdb;pdb.set_trace()
                banks = await exec_base.exec_sql_key(event_names='bank_by_bid', **{'bid': result[0]['bid']})
                branchs = await exec_base.exec_sql_key(event_names='branch_bank_by_bbid', **{'bbid': result[0]['bbid']})
                if banks:
                    bank_name = [x['name'] for x in banks][0]
                if branchs:
                    policy = [x['policy'] for x in branchs][0]
                card_tail = result[0]['card_number'][-4:]
                return [{"bank_name": bank_name, "policy": policy, "card_tail": card_tail}]
        return self.event_default


