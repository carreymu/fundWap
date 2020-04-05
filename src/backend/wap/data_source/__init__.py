from wap.data_source import exec_base
from wap.data_source.sub_config import (
    system_info,
    news_category,
    news_info
)
# only original information from DB
data_source_config = dict(
    system_info={
        "name": "datasource system information",
        "author": "root",
        "event_default": {},
        "sql_info": {
            "engine_name": "db_fund_wap_mysql",
            "sql": {
                "mysql": "select title, content from system_info where category={category}",
                "sqlite3": "",
                "mssql": ""
            }
        },
        "dependence": exec_base.DBInfo,
    },
    # news_category=news_category.config,
    # news_info=news_info.config,
)
