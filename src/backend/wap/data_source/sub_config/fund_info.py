from wap.data_source import exec_base

config = dict(
    fund_info={
        "name": "fund info",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,"
                         "custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,sched_invest_remark,"
                         "purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,"
                         "share_bonus_type,remark from fund_info where fid={fid}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    fund_info_short={
      "name": "fund info",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select fid,fc_id,fcc_id,fund_name,fund_code,fund_company from fund_info where fid in {fids}",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
)
