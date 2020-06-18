from . import events

config = dict(
    user_invest_account_joined_by_uid={
      "name": "show user bank info",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"user_invest_account_by_uid": "uid", "targets_by_tids": "",
                             "user_invest_account_details_by_ids": ""}],
      "dependence": events.UserInvestAccountJoined,
    },
)
