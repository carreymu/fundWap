from wap.data_source import exec_base

config = dict(
    fund_worth_history_stage_by_fid={
        "name": "stage fund worth history",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fid,stage,worth,topn,his_tot from fund_worth_history_stage where fid={fid} "
                         " order by stage ",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
