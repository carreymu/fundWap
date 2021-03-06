from typing import Any
from wap.base import DataSource
from wap.data_source import exec_base
from wap.utils.sql_handler import sql_in


class FundPlans(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source
        # 1.fund_plan_by_fplid.fplid->fund_plan_by_fplid.fpl_id
        # 2.fund_plan_by_fplid.fpl_id->user_invest_account.iv_id&&user_invest_account.type=1->user_invest_account.uia_id
        # 3.user_invest_account.uia_id->user_invest_account_detail.fid->fund_info.fid->fund_info.fcc_id
        # 4.fund_info.fcc_id->fund_customized_category.fcc_id
        if result:
            fp_list = result["fund_plan_by_fplid"]
            uid = result['req']['uid']
            if fp_list:
                result = [x for x in fp_list if x['status'] == 1]
                ivst_acc = await exec_base.exec_sql_key(event_names='user_invest_account_by_type_id',
                                                        **{'iv_id': result[0]['fpl_id'], "type": 1, 'uid': uid})
                if ivst_acc:
                    uia_ids = [x['uia_id'] for x in ivst_acc]
                    if uia_ids:
                        ivst_acc_dtl = await exec_base.exec_sql_key(event_names='user_invest_account_details_in_uiaids',
                                                                    **{'uia_ids': sql_in(uia_ids), 'uid': uid})
                        # print('===='+str(ivst_acc_dtl))
                        if ivst_acc_dtl:
                            fids = [x['fid'] for x in ivst_acc_dtl]
                            if len(fids) == 0:
                                return result
                            funds = await exec_base.exec_sql_key(event_names='fund_info_short', **{'fids': sql_in(fids)})
                            if funds:
                                fccids = [x['fcc_id'] for x in funds]
                                cats = await exec_base.exec_sql_key(event_names='fund_customized_category', **{})
                                if len(fccids) == 0 or len(cats) == 0:
                                    return result
                                # fund_templates.hold_percentage
                                fdts = await exec_base.exec_sql_key(event_names='fund_templates_by_ftid',
                                                                    **{'ft_id': result[0]['ft_id']})
                                if len(fdts) == 0:
                                    return result
                                matched_cat = [x for x in cats if x['fcc_id'] in fccids]
                                dict_percent = dict((x['fid'], x['hold_percentage']) for x in fdts)
                                holds, colors = [], []
                                for r in matched_cat:
                                    fnd_list = [x for x in funds if x['fcc_id'] == r['fcc_id']]
                                    if fnd_list:
                                        cat_hold_num = 0
                                        for x in fnd_list:
                                            x['hold_percentage'] = 0
                                            if x['fid'] in dict_percent.keys():
                                                x['hold_percentage'] = round(dict_percent[x['fid']]*100, 2)
                                            cat_hold_num += x['hold_percentage']
                                        holds.append({"name": r['name'], "percent": cat_hold_num})
                                        colors.append(r['ico_color'])
                                        r['fundsList'] = fnd_list
                                result[0]['funds'] = matched_cat
                                result[0]['holds'] = holds
                                result[0]['circleColors'] = colors
                        # print(result)
                        return result
        return self.event_default


class FundPlanCats(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source['fund_plan_category']
        if result:
            fpc_ids = sql_in([x['fpc_id'] for x in result])
            fund_plans = await exec_base.exec_sql_key(event_names='fund_plan_by_fpcids', **{'fpc_ids': fpc_ids})
            for x in result:
                x['fund_plans'] = [y for y in fund_plans if x['fpc_id'] == y['fpc_id']]
            return result
        return self.event_default
