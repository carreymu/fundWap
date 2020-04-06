from wap.data_source import exec_base

config = dict(
    news_info_100_by_ncid={
        "name": "news",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select nid,title,nc_id,img_url, content from news_info where status=1 and "
                         "nc_id={nc_id} order by inserttime desc limit 100",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
