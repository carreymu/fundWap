from typing import Any
from wap.base import DataSource
from wap.data_source import exec_base


class FundTemplates(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        # return result if result else self.event_default
        result = self.dependence_source
        # print(result["fund_templates"])
        if result:
            key = result['filter'][0]['fund_templates']
            fids = [x[key] for x in result["fund_templates"]]
            # import pdb;pdb.set_trace()
            if len(fids) > 0:
                sql_params = str(fids[0]) if len(fids) == 1 else ",".join(fids)
                fund_info = await exec_base.exec_sql_key(event_names='fund_info_short', **{'fids': sql_params})
                fund_cat = await exec_base.exec_sql_key(event_names='fund_category')
                per_dict = dict((x['fid'], x['percentage']) for x in result['fund_templates'])
                for x in fund_info:
                    if x['status'] == 1:
                        flt_cat = [y for y in fund_cat if y["fc_id"] == x["fc_id"]]
                        x['percentage'] = per_dict[x['fid']] * 100
                        x['show_order'] = flt_cat[0]["show_order"] if len(flt_cat) > 0 else 0
                # currency fund first
                return sorted(fund_info, key=lambda x: x['show_order'])
        return self.event_default
