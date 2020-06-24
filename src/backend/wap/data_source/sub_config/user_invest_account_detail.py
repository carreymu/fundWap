from wap.data_source import exec_base

config = dict(
    user_invest_account_details_by_ids={
        "name": "user invest account detail",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select uiad_id,uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,"
                         "redeem_amt,redeem_date,pay_date from user_invest_account_detail where uid={uid} and "
                         "fid in ({fids}) and uia_id in ({uia_ids})",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
