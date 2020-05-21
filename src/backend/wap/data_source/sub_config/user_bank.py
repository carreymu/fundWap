from wap.data_source import exec_base

config = dict(
    user_bank_by_uid={
        "name": "user bank",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select uid,card_number,bid,bbid,pid,cid,leave_phonenumber from user_bank where uid=#{uid} "
                         " order by inserttime desc limit {topx}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
