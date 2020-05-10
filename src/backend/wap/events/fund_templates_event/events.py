from typing import Any
from wap.base import DataSource


class FundTemplates(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        # return result if result else self.event_default
        # tid-> fids-> fund_info
        result = self.dependence_source
        print(result)
        print(result['filter'][0]['fund_templates'])
        if result:
            key = result['filter'][0]['fund_templates']
            fids = [x[key] for x in result["fund_templates"]]
            if len(fids) > 0:
              fs ={'fids': ','.join(fids)}
            # if len(fids) > 0:

            # return result
        return self.event_default
