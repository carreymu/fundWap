import aiohttp
from aredis import StrictRedisCluster


async def get_redis_cluster_config(url):
    headers = {"Content-type": "application/json;charset=utf-8", "Accept": "application/json"}
    async with aiohttp.ClientSession() as client:
        resp = await client.get(url, headers=headers)
        async with resp:
            status = resp.status
            if status >= 400:
                error = await resp.text()
                raise Exception(error)
            res = await resp.json(content_type=None)

    if res["status"] != 1:
        err_info = "获取redis集群数据报错:\n" "url: {0}\n" "返回结果: {1}"
        err_info = err_info.format(url, res)
        raise Exception(err_info)

    redis_cluster = [i.split(":") for i in res["shardInfo"].split(" ")]
    redis_cluster = [{"host": i[0], "port": int(i[1])} for i in redis_cluster]
    return redis_cluster


class RedisManager:
    def __init__(self, redis_config):
        self.redis_config = redis_config

    async def init(self):
        for key, config in self.redis_config.items():
            config["key"] = key
            cache_nodes = await get_redis_cluster_config(config["url"])
            config["client"] = StrictRedisCluster(
                startup_nodes=cache_nodes,
                max_connections=600,
                max_connections_per_node=True,
                decode_responses=True,
                readonly=True,
            )
        return self

    def get_info(self, key):
        return self.redis_config.get(key)
