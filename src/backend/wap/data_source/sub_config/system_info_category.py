from wap.data_source import exec_base

config = dict(
    system_info_category={
        "name": "system category information",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select scid,pscid,title,subtitle,url from system_info_category where pscid={pscid} "
                         "and status={status}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
