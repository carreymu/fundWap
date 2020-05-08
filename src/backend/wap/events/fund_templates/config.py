from . import events

config = dict(
    fund_templates={
      "name": "target templates",
      "author": "root",
      "event_default": {},
      "dependence_source": ["fund_templates"],
      "dependence": events.FundTemplates,
    },
)
