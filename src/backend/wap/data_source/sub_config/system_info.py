from . import _exec_base

config = dict(
    system_info={
        "name": "datasource system information",
        "author": "root",
        "event_name": "system_info",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "columns": ["title", "content"],
            "sql": {
                "mysql": "select title, content from system_info where category={category}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": _exec_base.DBInfo,
    },
)
