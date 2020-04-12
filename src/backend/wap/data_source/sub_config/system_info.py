from wap.data_source import exec_base

config = dict(
    system_info={
        "name": "datasource system information",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select id,title, content, url, img_url from system_info where category={category} "
                         "and status={status}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
