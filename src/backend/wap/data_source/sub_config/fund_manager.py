from wap.data_source import exec_base

config = dict(
    fund_manager_by_fmids={
        "name": "fund manager",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fm_id,name,status,remark from fund_manager where fm_id in ({fm_ids})",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
