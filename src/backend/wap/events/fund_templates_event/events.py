from typing import Any
from wap.base import DataSource
from wap.data_source import exec_base
from wap.utils.sql_handler import sql_in


class FundTemplates(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source
        if result:
            fund_temp = result['fund_templates_by_ftid']
            key = result['filter'][0]['fund_templates_by_ftid']
            fids = [x[key] for x in fund_temp]
            # import pdb;pdb.set_trace()
            if len(fids) > 0:
                fund_info = await exec_base.exec_sql_key(event_names='fund_info_short', **{'fids': sql_in(fids)})
                fund_cat = await exec_base.exec_sql_key(event_names='fund_category')
                cat_dict = dict((x['fc_id'], x) for x in fund_cat)
                per_dict = dict((x['fid'], x['hold_percentage']) for x in fund_temp)
                for x in fund_info:
                    if x['status'] == 1:
                        flt_cat = cat_dict[x["fc_id"]]
                        if flt_cat:
                            x['hold_percentage'] = format(per_dict[x['fid']] * 100, '.2f')
                            x['cat_name'] = flt_cat['name']
                            x['fund_tot'] = flt_cat['fund_tot']
                            x['show_order'] = flt_cat["show_order"] if len(flt_cat) > 0 else 0
                # currency fund first
                return sorted(fund_info, key=lambda x: x['show_order'])
        return self.event_default
