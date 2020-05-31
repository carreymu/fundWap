from typing import Any
from wap.base import DataSource
from wap.data_source import exec_base
from wap.utils.sql_handler import sql_in


class FundPlans(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source
        if result:
            fund_plan_cat = result["fund_plan_category"]
            fpcid = [x['fpc_id'] for x in fund_plan_cat]
            # if len(fpcid) > 0:
            #     sql_params = str(fmids[0]) if len(fmids) == 1 else sql_in(fmids)
            #     fund_managers_list = await exec_base.exec_sql_key(event_names='fund_manager_by_fmids',
            #                                                       **{'fm_ids': sql_params})
            #     if fund_managers_list:
            #         fund_man_dict = {x['fm_id']: (x['name'], x['remark']) for x in fund_managers_list
            #                          if x['status'] == 1}
            #     for x in fund_managers:
            #         if x['fm_id'] in fund_man_dict.keys():
            #             (x['name'], x['remark']) = fund_man_dict[x['fm_id']]
            #     return fund_managers
        return self.event_default
