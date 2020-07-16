from . import events

config = dict(
    user_detail_checkres={
      "name": "show user detail info",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"user_detail_by_name": "uname"}],
      "dependence": events.UserLoginCheck,
    },
)
