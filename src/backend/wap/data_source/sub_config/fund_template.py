from wap.data_source import exec_base

config = dict(
    fund_template={
        "name": "fund template",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select ft_id,tmp_name,type,status,version,remark from fund_template where ft_id={ft_id} "
                         "and status=1",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
)
