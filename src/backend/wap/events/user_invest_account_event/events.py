import time
import copy
from typing import Any
from wap.base import DataSource
from wap.data_source import exec_base
from datetime import datetime
from wap.utils.sql_handler import sql_in
from wap.utils.datetime_handler import datediff_timestamp


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
                targets_dict = {"name": '大目标', "dt": dt, "type": 'tid', "url": "myTargets"}
                targets = self.json_convert(user_iv_acc, targets_dict)
                if targets:
                    my_invests.append(targets)
                choices_dict = {"name": '优选', "dt": dt, "type": 'fpl_id', "url": "targetTemplate"}
                best_choices = self.json_convert(user_iv_acc, choices_dict)
                if best_choices:
                    my_invests.append(best_choices)
                drumsticks_dict = {"name": '鸡腿计划', "dt": dt, "type": 'did', "url": "targetTemplate"}
                drumsticks = self.json_convert(user_iv_acc, drumsticks_dict)
                if drumsticks:
                    my_invests.append(drumsticks)
                funds_dict = {"name": '基金', "dt": dt, "type": 'fid', "url": "targetTemplate"}
                funds = self.json_convert(user_iv_acc, funds_dict)
                if funds:
                    my_invests.append(funds)
            user_invest["my_invests"] = my_invests

            # tid->ft_id->fid 有9笔赎回记录即将到帐,最早预计05-07到帐
            tids = sql_in([x['iv_id'] for x in user_iv_acc_list if x['type'] == 'tid'])
            tars_list = await exec_base.exec_sql_key(event_names='targets_by_tids', **{'tids': tids})
            fids = sql_in([x['ft_id'] for x in tars_list])

            uia_ids = sql_in([x['uia_id'] for x in user_iv_acc_list if x['type'] == 'tid'])
            uid = user_iv_acc_list[0]['uid']
            user_iv_acc_detail_list = await exec_base.exec_sql_key(event_names='user_invest_account_details_by_ids',
                                                                   **{'uid': uid, 'uia_ids': uia_ids, 'fids': fids})
            if user_iv_acc_detail_list:
                # hold_status 0-赎回到帐(已清仓),1-持仓,2-赎回中
                hd_user_iv_acc = [x for x in user_iv_acc_detail_list if x['hold_status'] == 2]
                # import pdb;pdb.set_trace()
                if hd_user_iv_acc:
                    ft_hd_user_iv_acc = sorted(hd_user_iv_acc, key=lambda x: x['pay_date'], reverse=False)
                    pay_dt = datetime.utcfromtimestamp(ft_hd_user_iv_acc[0]['pay_date'] / 1e3)
                    my_info['pay_date'] = '{:02d}-{:02d}'.format(pay_dt.month, pay_dt.day)
                    my_info['redeem_cnt'] = len(ft_hd_user_iv_acc)
            user_invest["my_info"] = my_info
            return user_invest
        return self.event_default

    def json_convert(self, hd_user_iv_acc: list, targets_dict: dict):
        lst = [x for x in hd_user_iv_acc if x['type'] == targets_dict['type']]
        if len(lst) == 0:
            return None
        hold_profit = sum([x['hold_profit'] for x in lst])
        day_profit = sum([x['daily_profit'] for x in lst])
        targets_dict['hold_profit'] = round(hold_profit, 2)
        targets_dict['daily_profit'] = round(day_profit, 2)
        init_amt = sum([x['init_amt'] for x in lst])
        t_amt = init_amt + hold_profit
        targets_dict["daily_ratio"] = round((day_profit / t_amt)*100, 2)
        targets_dict["hold_cnt"] = len(lst)
        targets_dict["hold_ratio"] = round((hold_profit + day_profit)*100 / t_amt, 2)
        return targets_dict


class UserInvestAccountTargets(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        res = self.dependence_source
        if res:
            my_info = {}
            req = res['req']
            user_details = res['user_detail_by_uid']
            user_iv_acc = [x for x in res['user_invest_account_by_uid'] if x['type'] == req['type']]
            if user_iv_acc:
                all_hold_profit = sum([x['hold_profit'] for x in user_iv_acc])
                init_amt = sum([x['init_amt'] for x in user_iv_acc])
                my_info['all_amt'] = format((all_hold_profit + init_amt), '.2f')
                my_info["hold_profit"] = format(sum([x['hold_profit'] for x in user_iv_acc if x['hold_status'] != 0]), '.2f')
                my_info["daily_profit"] = format(sum([x['daily_profit'] for x in user_iv_acc]), '.2f')
                my_info["now"] = time.strftime('%m月%d日', time.localtime(time.time()))
                my_info["joined_days"] = datediff_timestamp(user_details[0]['inserttime'])

                tids = sql_in([x['iv_id'] for x in user_iv_acc])
                tars_list = await exec_base.exec_sql_key(event_names='targets_by_tids', **{'tids': tids})
                tars_ach = [x for x in tars_list if x['run_status'] > 3]
                my_info["target_achivement"] = len(tars_ach)
                fids = sql_in([x['ft_id'] for x in tars_list])
                uia_ids = sql_in([x['uia_id'] for x in user_iv_acc])
                user_iv_acc_detail_list = await exec_base.exec_sql_key(event_names='user_invest_account_details_by_ids',
                                                                       **{'uid': req['uid'], 'uia_ids': uia_ids,
                                                                          'fids': fids})
                my_info["target_profit"] = sum([x['redeem_amt'] for x in user_iv_acc_detail_list if x['hold_status'] == 0])
                # 达标盈利=user_invest_account_detail.hold_status==0
                # hold targets + N笔交易确认中
                targets_dict = dict([(x['tid'], x['name']) for x in tars_list]) #if x['run_status'] in [0, 1, 2, 3]
                for ui in user_iv_acc:
                    trade_cnt = len([x for x in user_iv_acc_detail_list if x['uia_id'] == ui['uia_id']
                                     and x['hold_status'] == 2])
                    ui['daily_profit_str'] = format(ui['daily_profit'], '.2f')
                    ui['hold_profit_str'] = format(ui['hold_profit'], '.2f')
                    ui['hold_profit_ratio'] = format((ui['hold_profit'] / (ui['hold_profit']+ui['init_amt']))*100, '.2f')
                    ui['daily_profit_ratio'] = format((ui['daily_profit'] / (ui['hold_profit'] + ui['init_amt']))*100, '.2f')
                    ui['trade_msg'] = '' if trade_cnt == 0 else f'{trade_cnt}笔交易确认中'
                    ui['name'] = f"大目标{targets_dict[ui['iv_id']]}"
                    ui['inserttime'] = time.strftime('%m月%d日', time.localtime(ui['inserttime']))
                my_info['hold_targets'] = user_iv_acc
            return my_info
        return self.event_default


class UserInvestAccountFunds(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        source = self.dependence_source
        if source:
            targets = source['targets_by_tid']
            user_invest_account = source['user_invest_account_by_type_id']
            target_info = {}
            nw = datetime.now()
            md = datetime.strftime(nw, "%m月%d日")
            if targets and len(targets) > 0:
                fundtemp = targets[0]
                fundtemp['target_ratio'] = f"{format(fundtemp['target_ratio']*100, '.2f')}%"
                fundtemp['run_days'] = datediff_timestamp(fundtemp['apply_endtime'])
                fundtemp["apply_endtime"] = datetime.strftime(fundtemp["apply_endtime"], "%m月%d日")
                target_info['fundtemp'] = fundtemp
            uia_ids = ''
            # import pdb;pdb.set_trace()
            if user_invest_account and len(user_invest_account) > 0:
                target = user_invest_account[0]
                uia_ids = f"'{target['uia_id']}'"
                target['hold_profit_ratio'] = format(((target['hold_profit'] / target['init_amt']) * 100), '.2f')
                target["hold_amt"] = format(target['hold_profit'] + target['init_amt'], '.2f')
                target["now"] = md
                target['hold_profit'] = format(target['hold_profit'], '.2f')
                target['daily_profit'] = format(target['daily_profit'], '.2f')
                target_info["target"] = target
            uid = source['req']['uid']
            user_iv_acc_detail_list = await exec_base.exec_sql_key(event_names='user_invest_account_details_in_uiaids',
                                                                   **{'uid': uid, 'uia_ids': uia_ids})
            if user_iv_acc_detail_list and len(user_iv_acc_detail_list) > 0:
                # 1-持仓,2-赎回中
                user_iv_acc = [x for x in user_iv_acc_detail_list if x['hold_status'] != 0]
                fund_lst = []
                # import pdb;pdb.set_trace()
                if user_iv_acc and len(user_iv_acc) > 0:
                    fds = list(set([x['fid'] for x in user_iv_acc]))
                    fids = sql_in(fds)
                    if fids:
                        fund_worth_his = await exec_base.exec_sql_key(event_names="fund_worth_history_by_fids",
                                                                      **{'fids': fids, 'topx': len(fds)})
                        fund_info_short = await exec_base.exec_sql_key(event_names="fund_info_short", **{'fids': fids})
                        if fund_worth_his and fund_info_short:
                            fund_dict = dict((str(x['fid']), f"{x['fund_name']}({x['fund_code']})") for x in fund_info_short)
                            same_fids = []
                            for x in user_iv_acc:
                                wor = [w for w in fund_worth_his if str(w['fid']) == x['fid']][0]
                                x['fund_name'] = fund_dict[x['fid']]
                                x['now'] = md
                                x['daily_ratio'] = format(wor['daily_ratio']*100, '.2f')
                                x['worth'] = wor['worth']
                                x['hold_amt'] = format(wor['worth'] * x['hold_share'], '.2f')
                                x['daily_profit'] = format(float(x['daily_profit']), '.2f')
                                if x['fid'] not in same_fids:
                                    x['redeem_cnt'] = 1 if x['hold_status'] == 2 else 0
                                    x['hold_cnt'] = 1 if x['hold_status'] == 1 else 0
                                    same_fids.append(x['fid'])
                                    fund_lst.append(x)
                                else:
                                    fund = [y for y in fund_lst if x['fid'] == y['fid']][0]
                                    if x['hold_status'] == 2:
                                        fund['redeem_cnt'] = fund['redeem_cnt'] + 1
                                    if x['hold_status'] == 1:
                                        fund['hold_cnt'] = fund['hold_cnt'] + 1
                                    fund['hold_share'] = fund['hold_share'] + x['hold_share']
                                    fund['daily_profit'] = format(float(fund['daily_profit']) + float(x['daily_profit']), '.2f')
                                    fund['hold_amt'] = format(float(fund['hold_amt']) + float(x['hold_amt']), '.2f')
                target_info["fund_lst"] = fund_lst
            return target_info
        return self.event_default


class UserInvestAccountFundplan(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        source = self.dependence_source
        # import pdb;pdb.set_trace()
        if source:
            target_info = {}
            fund_plan = source['fund_plan_by_fplid']
            user_invest_account = source['user_invest_account_by_type_id']
            nw = datetime.now()
            md = datetime.strftime(nw, "%m月%d日")
            if fund_plan and len(fund_plan) > 0:
                fundtemp = fund_plan[0]
                # fundtemp['run_days'] = datediff_timestamp(fundtemp['apply_endtime'])
                fundtemp["apply_endtime"] = md
                target_info['fundtemp'] = fundtemp


            return target_info
        return self.event_default
