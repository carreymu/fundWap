from wap.data_source import exec_base

config = dict(
    user_detail_by_uid={
        "name": "user detail",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select uid,username,nickname,phonenumber,password,is_fingerprint,is_posture,is_fund_account,"
                         "avastar from user_detail where uid={uid}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
