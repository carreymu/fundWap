from wap.settings import db_config, ext_config
from wap.utils.db_manager import DatabaseManager
from wap.utils.redis_manager import RedisManager


async def dependence_init(app, loop):
  # db 连接池
  app.db = await DatabaseManager(db_config).init()
  # redis 连接池
  app.redis = await RedisManager(ext_config["redis_cluster"]).init()


async def dependence_cleanup(app):
  await app.db.cleanup()
