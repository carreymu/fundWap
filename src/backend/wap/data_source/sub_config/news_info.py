from wap.data_source import exec_base

config = dict(
    news_info_topx_by_ncid={
        "name": "news",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select nid,title,nc_id,img_url,content,inserttime from news_info where status={status} and "
                         "nc_id={nc_id} order by inserttime desc limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    news_info_by_nid={
        "name": "detail news",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select nid,title,img_url,content,inserttime from news_info where status={status} and "
                         "nid={nid}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
