from typing import Any

from wap.base import DataSource
from wap.data_source import exec_base


class UserInvestAccountJoined(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        user_iv_acc_list = self.dependence_source
        if user_iv_acc_list:
            my_info = {}
            all_hold_profit = sum([x['hold_profit'] for x in user_iv_acc_list])
            init_amt = sum([x['init_amt'] for x in user_iv_acc_list])
            my_info['all_amt'] = round((all_hold_profit+init_amt), 2)
            my_info['all_profit'] = round(all_hold_profit, 2)
            my_info["hold_profit"] = round(sum([x['hold_profit'] for x in user_iv_acc_list if x['hold_status'] != 0]), 2)
            my_info["daily_profit"] = round(sum([x['daily_profit'] for x in user_iv_acc_list]), 2)

            # tid->ft_id->fid
            tids = ','.join(['%s' % x['iv_id'] for x in user_iv_acc_list if x['type'] == 'tid'])
            tars_list = await exec_base.exec_sql_key(event_names='targets_by_tids', **{'tids': tids})
            fids = [x['ft_id'] for x in tars_list]

            uia_ids = ','.join([x['uia_id'] for x in user_iv_acc_list if x['type'] == 'tid'])
            uid = user_iv_acc_list[0]['uid']
            user_iv_acc_detail_list = await exec_base.exec_sql_key(event_names='user_invest_account_details_by_ids',
                                                                   **{'uid': uid, 'uia_ids': uia_ids})
            


            return {}
        return self.event_default
