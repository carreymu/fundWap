from wap import events
from wap.data_source import exec_base
from wap.events.news_info_event.config import config as sys_info_config
# information from joined DB
events_config = dict(
  system_info=sys_info_config,
  # system_info={
  #   "name": "datasource system information",
  #   "author": "root",
  #   "event_default": {},
  #   "sql_info": {
  #     "engine_name": "db_fund_wap_mysql",
  #     "sql": {
  #       "mysql": "select title, content from system_info where category={category}",
  #       "sqlite3": "",
  #       "mssql": ""
  #     }
  #   },
  #   "dependence": exec_base.DBInfo,
  # },
    # sys_info1=sys_info_config,
)
