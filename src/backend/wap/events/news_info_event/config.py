from . import events

config = dict(
    news_info_top_100={
      "name": "datasource system information",
      "author": "root",
      "event_default": [],
      "dependence_source": ["news_info_topx_by_ncid", "news_category"],
      "dependence": events.NewsInfoTop100,
    },
)
