from . import events

config = dict(
    fund_templates_short_list={
      "name": "target templates",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"fund_templates_by_ftid": "fid", "fund_info_short": "", "fund_category": ""}],
      "dependence": events.FundTemplates,
    },
)
