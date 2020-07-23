from . import events

config = dict(
    fund_plan_by_fpc_id={
      "name": "fund plan list",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"fund_plan_category": "fpc_id", "fund_plan_by_fpcids": ""}],
      "dependence": events.FundPlanCats,
    },
    fund_plan_list={
      "name": "fund plan list",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"fund_plan_by_fplid": "fpl_id", "fund_plan_details": "",
                             "fund_customized_category": "", "fund_info_short": ""}],
      "dependence": events.FundPlans,
    },

)
