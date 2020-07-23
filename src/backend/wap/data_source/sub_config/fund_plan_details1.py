from wap.data_source import exec_base

config = dict(
    fund_plan_details={
        "name": "fund plan details",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fpl_id,hold_percentage,fid from fund_plan_details where fpl_id={fpl_id}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
