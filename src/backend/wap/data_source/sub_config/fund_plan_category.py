from wap.data_source import exec_base

config = dict(
    fund_plan_category={
        "name": "fund plan category",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fpc_id,name,remark from fund_plan_category",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
