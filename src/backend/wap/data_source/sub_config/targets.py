from wap.data_source import exec_base

config = dict(
    targets_status_topx={
        "name": "datasource system information",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select tid,name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime from "
                         "targets where run_status={run_status} limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
