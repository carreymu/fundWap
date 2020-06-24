from wap.data_source import exec_base

config = dict(
    fund_templates={
        "name": "fund templates",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select ft_id,fid,percentage,remark from fund_templates where ft_id={ft_id}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
