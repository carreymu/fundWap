from wap.data_source import exec_base

config = dict(
    fund_customized_category={
        "name": "fund customized category",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fcc_id,name,ico_color from fund_customized_category",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
