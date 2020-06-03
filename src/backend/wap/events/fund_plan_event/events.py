from typing import Any
from wap.base import DataSource
from wap.data_source import exec_base


class FundPlans(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source
        # 1.fund_plan_by_fplid.fplid->fund_plan_by_fplid.fpl_id
        # 2.fund_plan_by_fplid.fpl_id->fund_plan_details.fpl_id->fund_plan_details.fid
        # 3.fund_plan_details.fid->fund_info.fid->fund_info.fcc_id
        # 4.fund_info.fcc_id->fund_customized_category.fcc_id
        if result:
            fp_list = result["fund_plan_by_fplid"]
            if fp_list:
                result = [x for x in fp_list if x['status'] == 1]
                plan_details_list = await exec_base.exec_sql_key(event_names='fund_plan_details',
                                                                 **{'fpl_id': result[0]['fpl_id']})
                if plan_details_list:
                    fids = [x['fid'] for x in plan_details_list]
                    if len(fids) == 0:
                        return result
                    fids = ','.join('%s' % f for f in fids)
                    funds = await exec_base.exec_sql_key(event_names='fund_info_short', **{'fids': fids})
                    if funds:
                        fccids = [x['fcc_id'] for x in funds]
                        cats = await exec_base.exec_sql_key(event_names='fund_customized_category', **{})
                        if len(fccids) == 0 or len(cats) == 0:
                            return result
                        matched_cat = [x for x in cats if x['fcc_id'] in fccids]
                        holds = []
                        colors = []
                        for r in matched_cat:
                            fnd_list = [x for x in funds if x['fcc_id'] == r['fcc_id']]
                            if fnd_list:
                                cat_hold_num = 0
                                # add hold num
                                for x in fnd_list:
                                    x['hold_num'] = [y for y in plan_details_list if x['fid'] == y['fid']][0]['hold_num']
                                    cat_hold_num += x['hold_num']
                                holds.append({"name": r['name'], "percent": cat_hold_num})
                                colors.append(r['ico_color'])
                                r['fundsList'] = fnd_list
                        result[0]['funds'] = matched_cat
                        result[0]['holds'] = holds
                        result[0]['circleColors'] = colors
                # print(result)
                return result
        return self.event_default
