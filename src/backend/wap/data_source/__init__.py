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
    fund_worth_history,
    fund_worth_history_stage,
    bank,
    user_bank,
    branch_bank,
    user_card,
    fund_plan,
    fund_plan_category,
    fund_customized_category,
    # fund_plan_details1,
    user_news_info,
    user_detail,
    user_invest_account,
    user_invest_account_detail,
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
    fund_worth_history_stage=fund_worth_history_stage.config,
    bank=bank.config,
    user_bank=user_bank.config,
    branch_bank=branch_bank.config,
    user_card=user_card.config,
    fund_plan=fund_plan.config,
    fund_plan_category=fund_plan_category.config,
    fund_customized_category=fund_customized_category.config,
    # fund_plan_details=fund_plan_details1.config,
    user_news_info=user_news_info.config,
    user_detail=user_detail.config,
    user_invest_account=user_invest_account.config,
    user_invest_account_detail=user_invest_account_detail.config,
)
