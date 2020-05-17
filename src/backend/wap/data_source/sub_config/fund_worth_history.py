from wap.data_source import exec_base

config = dict(
    fund_worth_history_by_fid={
        "name": "fund worth history",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fid,worth,daily_change,inserttime from fund_worth_history where fid={fid} "
                         " order by inserttime desc limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
