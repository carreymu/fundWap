import logging
from wap.settings import db_config, ext_config
from wap.utils.db_manager import DatabaseManager
from wap.utils.redis_manager import RedisManager
from wap.events import events_config
from wap.exceptions import VariableInitError


async def dependence_init(app, loop):
    # events 初始化
    # import pdb;pdb.set_trace()
    # app.var = init_evnets({**events_config, **data_source_config})
    # db 连接池
    app.var = init_events(events_config)
    app.db = await DatabaseManager(db_config).init()
    # redis 连接池
    #  app.redis = await RedisManager(ext_config["redis_cluster"]).init()


async def dependence_cleanup(app):
    await app.db.cleanup()


def init_events(event_config):
    var = {}
    duplicate_vars = []
    for klass, configs in event_config.items():
        # import pdb;pdb.set_trace()
        for event_name, config in configs.items():
            config["event_name"] = event_name
            config["event_class"] = klass
            # 查重
            if event_name in var:
                duplicate_vars.append(event_name)
                var1 = var[event_name]
                var2 = config
                logging.error(
                    f"""\n
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    [{event_name}] already exists:
                    Event:
                    Desc: \t{var1["name"]} \t{var2["name"]}
                    Author: \t{var1["author"]} \t{var2["author"]}
                    Dependence: \t{var1["dependence"]} \t{var2["dependence"]}
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                """)
                continue
            var[event_name] = config

    if duplicate_vars:
        raise VariableInitError(duplicate_vars)

    return var
