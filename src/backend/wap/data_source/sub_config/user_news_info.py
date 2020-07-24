from wap.data_source import exec_base

config = dict(
    user_news_info_by_uid={
        "name": "user news",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select uni_id,uid,nc_id,nid,is_read from user_news_info where uid={uid} "
                         "order by inserttime desc",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    user_news_info_not_read_by_uid={
        "name": "user news",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select count(*) as cnt from user_news_info where uid={uid} and is_read=0",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    user_news_info_not_read_by_unid={
        "name": "user news",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select uni_id,uid,nc_id,nid,is_read from user_news_info where uid={uid} and uni_id={uni_id} "
                         "and is_read=0",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    update_user_news_info_read={
      "name": "user news",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "update user_news_info set is_read=1 where uni_id={uni_id} and uid={uid} and is_read=0",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
)
