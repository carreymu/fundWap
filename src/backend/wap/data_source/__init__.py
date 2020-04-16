from wap.data_source import exec_base
from wap.data_source.sub_config import (
    system_info,
    system_info_category,
    news_category,
    news_info,
    targets
)
# only original information from DB
data_source_config = dict(
    system_info=system_info.config,
    system_info_category=system_info_category.config,
    news_category=news_category.config,
    news_info=news_info.config,
    targets=targets.config

)
