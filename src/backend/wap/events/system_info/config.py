from . import events

config = dict(
    sys_info={
        "name": "system information",
        "author": "root",
        "exception": "",
        "event_default": {},
        "dependence": events.SystemInfo,
    },
)
