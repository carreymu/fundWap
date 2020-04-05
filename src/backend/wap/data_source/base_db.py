from wap.base import DataSource, exec_sql
from wap.data_source import datasource_config


class DBInfo(DataSource):
    category: int
    event_name: str

    async def compute(self):
        conf = datasource_config[self.event_name]
        res = await exec_sql(conf['sql_info'], category=self.category)
        return res
