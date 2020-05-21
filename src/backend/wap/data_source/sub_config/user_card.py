from wap.data_source import exec_base

config = dict(
    user_card_by_uid={
        "name": "user card",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select uid,name,source,status,exp_date_start,exp_date_end from user_card where uid={uid} "
                         " order by inserttime desc limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    user_card_cnt_uid={
      "name": "user card",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select count(1) cnt from user_card where uid={uid} and exp_date_start<now() and now()<exp_date_end",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
)
