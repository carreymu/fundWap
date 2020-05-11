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
            if len(fids) > 0:
                # {'fids': ",".join(list(map(str, fids)))}
                fund_info = await exec_base.exec_sql_key(event_names='fund_info_short', **{'fids': tuple(fids)})
                per_dict = dict((x['fid'], x['percentage']) for x in result['fund_templates'])
                for x in fund_info:
                    if x['status'] == 1:
                        x['percentage'] = per_dict[x['fid']]
                return fund_info
        return self.event_default
