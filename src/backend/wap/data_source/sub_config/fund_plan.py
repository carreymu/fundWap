from wap.data_source import exec_base

config = dict(
    fund_plan_by_fpcid={
        "name": "fund plan",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fpl_id,fpc_id,name,profit,loss,profit_type,threshold,sched_threshold,img_url,"
                         "page_type,details,short_intro,remark from fund_plan where fpc_id={fpc_id}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
