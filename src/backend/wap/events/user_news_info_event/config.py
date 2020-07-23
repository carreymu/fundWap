from . import events

config = dict(
    user_news_info_list={
      "name": "show user bank info",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"user_news_info_by_uid": "uid", "news_info_by_nids": "", "news_category_broadcast": ""}],
      "dependence": events.UserNewsInfoList,
    },
    user_news_info_read={
      "name": "user news",
      "author": "root",
      "event_default": {},
      "dependence_source": [{"user_news_info_not_read_by_unid": "uid", "update_user_news_info_read": ""}],
      "dependence": events.UserNewsInfoRead,
    },
)
