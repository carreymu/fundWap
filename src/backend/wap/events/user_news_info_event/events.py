from typing import Any
from wap.utils.sql_handler import sql_in
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
                nids = sql_in(nid_lst)
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


class UserNewsInfoRead(DataSource):
    event_default: Any
    dependence_source: dict

    async def compute(self):
        result = self.dependence_source["user_news_info_not_read_by_unid"]
        if result:
            uni_id = result[0]['uni_id']
            uid = result[0]['uid']
            eff_rec = await exec_base.exec_sql_op(event_names='update_user_news_info_read',
                                                  **{'uid': uid, 'uni_id': uni_id})
            print(eff_rec)
            return result
        return self.event_default
