from typing import Any

from wap.base import DataSource
from wap.data_source import exec_base


class UserNewsInfoList(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source
        if result:
            nid_lst = [x['nid'] for x in result["user_news_info_by_uid"]]
            if nid_lst:
                # import pdb;pdb.set_trace()
                nids = ','.join('%s' % f for f in nid_lst)
                news_list = await exec_base.exec_sql_key(event_names='news_info_by_nids', **{'nids': nids})
                news_category = await exec_base.exec_sql_key(event_names='news_category_broadcast', **{})
                for x in result["user_news_info_by_uid"]:
                    t_news = [y for y in news_list if x['nid'] == y['nid']]
                    t_cat = [y for y in news_category if x['nc_id'] == x['nc_id']]
                    if t_news:
                        x['inserttime'] = t_news[0]['inserttime']
                        x['title'] = t_news[0]['title']
                        x['content'] = t_news[0]['content']
                    if t_cat:
                        x['category_name'] = f"({t_cat[0]['category_name']})"
                return result["user_news_info_by_uid"]
        return self.event_default
