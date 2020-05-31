from . import events

config = dict(
    fund_plan_list={
      "name": "fund plan list",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"fund_plan_category": "", "fund_plan_by_fpcid": ""}],
      "dependence": events.FundPlans,
    },
)
