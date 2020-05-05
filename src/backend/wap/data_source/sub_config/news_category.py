from wap.data_source import exec_base

config = dict(
    news_category={
        "name": "news category",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select nc_id,category_name from news_category where nc_id={nc_id} and status={status}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
