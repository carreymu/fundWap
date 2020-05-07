from wap.data_source import exec_base

config = dict(
    targets_status_topx={
        "name": "top {x} targets which status is {run_status}",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select tid,name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime from "
                         "targets where run_status in ({run_status}) order by inserttime desc limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    targets_status_topx_by_days={
        "name": "top {x} targets which status is {run_status}",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select tid,name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime from "
                         "targets where run_status in ({run_status}) order by run_days desc limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    targets_status_done={
      "name": "total done targets,3-done,4-clearance",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select count(1) as tot_target from targets where run_status in ({run_status})",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
    targets_list_by_status={
      "name": "targets_list",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select tid,name,target_ratio,run_status,run_days,apply_endtime from targets "
                   "where run_status in ({run_status}) order by inserttime desc",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
    targets_status_agg_by_run_status={
      "name": "aggregate result by run_status",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select run_status,count(1) as tot_target from targets group by run_status",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
)
