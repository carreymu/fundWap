from wap.data_source import exec_base
from wap.data_source.sub_config import (
    system_info,
    system_info_category,
    news_category,
    news_info,
    targets,
    fund_template,
    fund_templates,
    fund_info,
    fund_category,
    fund_manager,
    fund_managers,
    fund_worth_history
)
# only original information from DB
data_source_config = dict(
    system_info=system_info.config,
    system_info_category=system_info_category.config,
    news_category=news_category.config,
    news_info=news_info.config,
    targets=targets.config,
    fund_template=fund_template.config,
    fund_templates=fund_templates.config,
    fund_info=fund_info.config,
    fund_category=fund_category.config,
    fund_manager=fund_manager.config,
    fund_managers=fund_managers.config,
    fund_worth_history=fund_worth_history.config,
)
