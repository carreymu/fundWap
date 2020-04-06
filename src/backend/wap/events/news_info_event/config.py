from . import events

config = dict(
    # system_info={
    #     "name": "datasource system information",
    #     "event_name": "system information",
    #     "author": "root",
    #     "event_default": {},
    #     "dependence": events.NewsInfoTopN,
    # },
    system_info1={
      "name": "datasource system information",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select title, content from system_info where category={category}",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": events.NewsInfoTopN,
    },
)
