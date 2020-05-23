from . import events

config = dict(
    user_bank_wapper={
      "name": "show user bank info",
      "author": "root",
      "event_default": [{"bank_name": '', "policy": '', "card_tail": ''}],
      "dependence_source": [{"user_bank_by_uid": "uid", "branch_bank_by_bbid": "", "bank_by_bid": ""}],
      "dependence": events.UserbankWapper,
    },
)
