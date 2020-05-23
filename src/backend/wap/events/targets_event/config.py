from . import events

config = dict(
    targets_agg_list={
      "name": "aggregate targets and show its list",
      "author": "root",
      "event_default": [],
      "dependence_source": ["targets_list_by_status"],
      "dependence": events.TargetsAggList,
    },
)
