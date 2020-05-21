from wap.data_source import exec_base

config = dict(
    bank_by_bid={
        "name": "user bank",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select name,status,remarkfrom bank where bid=#{bid}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
