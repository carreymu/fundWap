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
            result = result["fund_plan_category"]
            fp_list = result["fund_plans"]
            import pdb;pdb.set_trace()
            if result and fp_list:
                for r in result:
                    r['fund_plans']=[x for x in fp_list if x['fpc_id']==r['fpc_id']]
                # [c['fund_plans'].append(p for p in fp_list if p['fpc_id'] == c['fpc_id']) for c in result]
                print(result)
                return result
        return self.event_default
