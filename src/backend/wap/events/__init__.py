from wap import events
from wap.events.news_info_event.config import config as news_info_config
from wap.events.targets_event.config import config as targets_event
# information from joined DB
events_config = dict(
    news_info_top_100=news_info_config,
    targets_event=targets_event
)
