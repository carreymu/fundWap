from typing import Any
from wap.base import DataSource


class NewsInfoTop100(DataSource):
    req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        # return result if result else self.event_default
        result = self.dependence_source
        if result:
            result = [self.get_res(x, result['news_category']) for x in result["news_info_100_by_ncid"]]
            # result['joined_result'] = result
            return result
        return self.event_default

    def get_res(self, r: dict, news_category):
        if news_category is not None and len(news_category) > 0:
            flt = [x['category_name'] for x in news_category if x['nc_id'] == r['nc_id']]
            if len(flt) > 0:
                r['category_name'] = flt[0]
                r.pop('nc_id')
            return r
        return r
