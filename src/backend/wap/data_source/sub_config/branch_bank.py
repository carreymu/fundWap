from wap.data_source import exec_base

config = dict(
    branch_bank_by_bbid={
        "name": "branch bank",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select pid,cid,bid,name,status,policy,remark from branch_bank where bbid={bbid}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
