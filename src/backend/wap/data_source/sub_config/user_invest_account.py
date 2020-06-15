from wap.data_source import exec_base

config = dict(
    user_invest_account_by_uid={
        "name": "user invest account",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,is_hold,hold_profit_ratio,"
                         "daily_profit_ratio,inserttime from user_invest_account where uid={uid}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
