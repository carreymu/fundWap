from wap.data_source import exec_base

config = dict(
    fund_category={
        "name": "fund category",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fc_id,name,risk_level,status,show_order from fund_category",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
