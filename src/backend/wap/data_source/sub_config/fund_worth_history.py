from wap.data_source import exec_base

config = dict(
    fund_worth_history_by_fid={
        "name": "fund worth history",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fid,worth,daily_ratio,inserttime from fund_worth_history where fid={fid} "
                         " order by inserttime desc limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    fund_worth_history_by_fids={
      "name": "fund worth history",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select fid,worth,daily_ratio,inserttime from fund_worth_history where fid in ({fids}) "
                   " and str_to_date(inserttime, '%Y-%m-%d')= '{inserttime}' order by inserttime desc",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
)
