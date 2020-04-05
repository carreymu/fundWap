from . import events

config = dict(
    system_info={
        "name": "datasource system information",
        "event_name": "system information",
        "author": "root",
        "exception": "",
        "event_default": {},
        "dependence": events.NewsInfoTopN,
    },
)
