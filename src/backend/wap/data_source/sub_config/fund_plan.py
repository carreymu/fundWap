from wap.data_source import exec_base

config = dict(
    fund_plans={
      "name": "fund plan",
      "author": "root",
      "event_default": {},
      "sql_info": {
        "engine_name": "db_fund_wap_mysql",
        "sql": {
          "mysql": "select fpl_id,ft_id,fpc_id,name,profit_ratio,loss_ratio,profit_type,init_amt,sched_init_amt,"
                   "profit_txt,img_url,page_type,details,short_intro,remark,is_sellout,join_num,status,"
                   "purchase_rate_old,purchase_rate_new,purchase_rate_discount from fund_plan ",
          "sqlite3": "",
          "mssql": ""
        }
      },
      "dependence": exec_base.DBInfo,
    },
    fund_plan_by_fplid={
        "name": "fund plan",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fpl_id,ft_id,fpc_id,name,profit_ratio,loss_ratio,profit_type,init_amt,join_num,status,"
                         "sched_init_amt,profit_txt,img_url,page_type,details,short_intro,remark,is_sellout,"
                         "purchase_rate_old,purchase_rate_new,purchase_rate_discount from fund_plan "
                         "where fpl_id={fpl_id}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
