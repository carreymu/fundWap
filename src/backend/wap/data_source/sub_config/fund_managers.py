from wap.data_source import exec_base

config = dict(
    fund_managers_by_fid={
        "name": "fund managers",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select fms_id,fid,fm_id from fund_managers where fid={fid}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
