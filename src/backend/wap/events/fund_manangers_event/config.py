from . import events

config = dict(
    fund_manangers_list={
      "name": "manangers list",
      "author": "root",
      "event_default": [],
      "dependence_source": [{"fund_managers_by_fid": "fid", "fund_manager_by_fmids": ""}],
      "dependence": events.FundManagers,
    },
)
