from wap import events
from wap.events.news_info_event.config import config as news_info_config
from wap.events.targets_event.config import config as targets_event
from wap.events.fund_templates_event.config import config as fund_templates_event
from wap.events.fund_manangers_event.config import config as fund_manangers_event
from wap.events.user_bank_event.config import config as user_bank_event
from wap.events.fund_plan_event.config import config as fund_plan_event
from wap.events.user_news_info_event.config import config as user_news_info_event

# information from joined DB
events_config = dict(
    news_info_top_100=news_info_config,
    targets_event=targets_event,
    fund_templates_event=fund_templates_event,
    fund_manangers_event=fund_manangers_event,
    user_bank_event=user_bank_event,
    fund_plan_event=fund_plan_event,
    user_news_info_event=user_news_info_event,
)
