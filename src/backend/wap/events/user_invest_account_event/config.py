from . import events

config = dict(
    user_invest_account_joined_by_uid={
      "name": "show user invest account joined info",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"user_invest_account_by_uid": "uid", "targets_by_tids": "",
                             "user_invest_account_details_by_ids": ""}],
      "dependence": events.UserInvestAccountJoined,
    },
    user_invest_account_targets={
      "name": "show user invest info",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"user_invest_account_by_uid": "uid", "targets_by_tids": "", "user_detail_by_uid": "uid",
                             "user_invest_account_details_by_ids": ""}],
      "dependence": events.UserInvestAccountTargets,
    },
    user_invest_account_funds={
      "name": "show user invest account joined info",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"targets_by_tid": "tid", "user_invest_account_by_type_id": "uid,type,iv_id",
                             "user_invest_account_details_by_ids": "", "fund_worth_history_by_fids": "",
                             "fund_info_short": ""}],
      "dependence": events.UserInvestAccountFunds,
    },
    user_invest_account_fundplan={
      "name": "show user invest account joined info",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"fund_plan_by_fplid": "fpl_id", "user_invest_account_by_type_id": "uid,type,iv_id",
                             "fund_plan_details": "fpl_id", "fund_worth_history_by_fids": "", "fund_info_short": ""}],
      "dependence": events.UserInvestAccountFundplan,
    },
)
