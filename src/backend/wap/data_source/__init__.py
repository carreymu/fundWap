# todo: inint check,event_name and sql_info,data_source.datasource_config.keys() equeal events.events_config.keys()
# only original information from DB
datasource_config = dict(
    sys_info={
        "name": "datasource system information",
        "event_name": "sys_info",
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "columns": ["title", "content"],
            "sql": {
                "mysql": "select title, content from system_info where category={category}",
                "sqlite3": "sqlite3",
                "mssql": "mssql"
            }
        }
    },
)
