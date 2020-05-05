from wap.data_source import exec_base

config = dict(
    system_info={
        "name": "system information",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select sid,scid,title,subtitle,content,url,img_url,status from system_info where "
                         "scid in({scids}) and status={status}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    system_info_by_id={
        "name": "get system information by sid",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select sid,title,subtitle,content,url,img_url,inserttime from system_info "
                         "where sid={sid} and status={status}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
