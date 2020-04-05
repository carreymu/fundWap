from . import _exec_base

config = dict(
    news_info={
        "name": "news",
        "author": "root",
        "event_name": "news_info",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "columns": ["nid", "title", "nc_id", "img_url", "content"],
            "sql": {
                "mysql": "select nid,title,nc_id,img_url, content from news_category where status={status} and "
                         "nc_id={nc_id} {limit_top}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": _exec_base.DBInfo,
    },
)
