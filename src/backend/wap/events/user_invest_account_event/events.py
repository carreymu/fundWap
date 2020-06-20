from typing import Any

from wap.base import DataSource
from wap.data_source import exec_base
import time


class UserInvestAccountJoined(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        user_iv_acc_list = self.dependence_source
        if user_iv_acc_list:
            user_invest = {}
            my_info = {}
            dt = time.strftime('%m月%d日', time.localtime(time.time()))
            user_iv_acc_list = user_iv_acc_list['user_invest_account_by_uid']
            all_hold_profit = sum([x['hold_profit'] for x in user_iv_acc_list])
            init_amt = sum([x['init_amt'] for x in user_iv_acc_list])
            my_info['all_amt'] = round((all_hold_profit+init_amt), 2)
            my_info['all_profit'] = round(all_hold_profit, 2)
            my_info["hold_profit"] = round(sum([x['hold_profit'] for x in user_iv_acc_list if x['hold_status'] != 0]), 2)
            my_info["daily_profit"] = round(sum([x['daily_profit'] for x in user_iv_acc_list]), 2)
            my_info["now"] = dt

            my_invests = []
            user_iv_acc = [x for x in user_iv_acc_list if x['hold_status'] != 0]
            if user_iv_acc:
                targets = self.json_convert(user_iv_acc, 'tid', '大目标', dt)
                if targets:
                    my_invests.append(targets)
                best_choices = self.json_convert(user_iv_acc, 'fpl_id', '优选', dt)
                if best_choices:
                    my_invests.append(best_choices)
                drumbs = self.json_convert(user_iv_acc, 'did', '鸡腿计划', dt)
                if drumbs:
                    my_invests.append(drumbs)
                funds = self.json_convert(user_iv_acc, 'fid', '基金', dt)
                if funds:
                    my_invests.append(funds)
            user_invest["my_invests"] = my_invests

            # tid->ft_id->fid 有9笔赎回记录即将到帐,最早预计05-07到帐
            tids = ','.join(['%s' % x['iv_id'] for x in user_iv_acc_list if x['type'] == 'tid'])
            tars_list = await exec_base.exec_sql_key(event_names='targets_by_tids', **{'tids': tids})
            fids = ','.join(['%s' % x['ft_id'] for x in tars_list])

            uia_ids = '\',\''.join(['%s' % x['uia_id'] for x in user_iv_acc_list if x['type'] == 'tid'])
            uid = user_iv_acc_list[0]['uid']
            # import pdb;pdb.set_trace()
            # user_iv_acc_detail_list = await exec_base.exec_sql_key(event_names='user_invest_account_details_by_ids',
            #                                                        **{'uid': uid, 'uia_ids': uia_ids, 'fids': fids})
            # if user_iv_acc_detail_list:
            #     # hold_status 0-赎回到帐(已清仓),1-持仓,2-赎回中
            #     hd_user_iv_acc = [x for x in user_iv_acc_detail_list if x['hold_status'] == 2]
            #     if hd_user_iv_acc:
            #         ft_hd_user_iv_acc = sorted(hd_user_iv_acc, key=lambda x: x['pay_date'], reverse=False)
            #         my_info['pay_date'] = ft_hd_user_iv_acc[0]['pay_date']
            #         my_info['redeem_cnt'] = len(ft_hd_user_iv_acc)
            user_invest["my_info"] = my_info
            return user_invest
        return self.event_default

    def json_convert(self, hd_user_iv_acc: list, types: str, name: str, date: str):
        lst = [x for x in hd_user_iv_acc if x['type'] == types]
        if lst:
            hold_profit = sum([x['hold_profit'] for x in lst])
            day_profit = sum([x['daily_profit'] for x in lst])
            init_amt = sum([x['init_amt'] for x in lst])
            t_amt = init_amt + hold_profit
            td_ratio = round(day_profit / t_amt, 2)
            t_ratio = round((hold_profit + day_profit) / t_amt, 2)
            return {"name": name, "dt": date, "daily_ratio": td_ratio, "daily_profit": round(day_profit, 2),
                    "hold_ratio": t_ratio, "hold_profit": round(hold_profit, 2), "hold_cnt": len(lst)}
