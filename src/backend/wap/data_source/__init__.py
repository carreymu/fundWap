from wap.data_source import exec_base
from wap.data_source.sub_config import (
    system_info,
    news_category,
    news_info
)
# only original information from DB
data_source_config = dict(
    system_info=system_info.config,
    news_category=news_category.config,
    news_info=news_info.config,
)
