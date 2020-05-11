from . import events

config = dict(
    fund_templates_short_list={
      "name": "target templates",
      "author": "root",
      "event_default": {},
      "dependence_source": [{"fund_templates": "fid", "fund_info_short": ""}],
      "dependence": events.FundTemplates,
    },
)
