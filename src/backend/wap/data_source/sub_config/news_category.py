from wap.data_source import exec_base

config = dict(
    news_category={
        "name": "news category",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select nc_id,category_name,is_broadcast from news_category where nc_id={nc_id} ",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    news_category_broadcast={
        "name": "news category",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select nc_id,category_name,is_broadcast from news_category where is_broadcast=1 ",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
