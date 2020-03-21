import logging
import os
import pathlib
import socket
import sys
from concurrent.futures import ThreadPoolExecutor

from wap.utils.read_yaml import yaml_load

# 工作环境
DEBUG = os.environ.get("WAP_DEBUG", "True") == "True"
ENV = os.environ.get("WAP_ENV", "dev")
env_map = {"dev": "测试", "prod": "线上", "pre": "预发布"}
ENV_TEXT = env_map[ENV]
print("环境:", ENV_TEXT)
HOST_IP_NAME = socket.gethostbyname(socket.gethostname())
print("机器IP:", HOST_IP_NAME)

# log configuration
if DEBUG:
    LOG_PATH = pathlib.Path("/tmp/wapkpy/log")
    LOG_PATH.mkdir(parents=True, exist_ok=True)
else:
    LOG_PATH = pathlib.Path("/var/log/wappy/")

# 依赖数据源超时时间
DEPENDENCE_TIMEOUT = 20  # second

# wap配置预读
wap_config = yaml_load(f"config/{ENV}.yaml")

# 数据源配置预读
db_config = yaml_load("wap/config/db.yaml")
for item in db_config.values():
    item.update(item[ENV])
    del item["dev"]
    del item["pre"]
    del item["prod"]

# redis
ext_config = yaml_load("wap/config/ext.yaml")
for item in ext_config["redis_cluster"].values():
    item["url"] = item[ENV]
    del item["dev"]
    del item["pre"]
    del item["prod"]

# 非协程io包在线程池内
executor = ThreadPoolExecutor(max_workers=20)

# sanic log configuration
SANIC_LOGGING_CONFIG = dict(
    version=1,
    disable_existing_loggers=False,
    loggers={
        "sanic.root": {"level": "INFO", "handlers": ["console", "file"], "propagate": False},
        "sanic.error": {
            "level": "WARNING",
            "handlers": ["error_console", "error_file"],
            "propagate": False,
            "qualname": "sanic.error",
        },
        "sanic.access": {
            "level": "INFO",
            "handlers": ["access_console", "access_file"],
            "propagate": False,
            "qualname": "sanic.access",
        },
    },
    handlers={
        "console": {"class": "logging.StreamHandler", "formatter": "generic", "stream": sys.stdout},
        "error_console": {"class": "logging.StreamHandler", "formatter": "generic", "stream": sys.stderr},
        "access_console": {"class": "logging.StreamHandler", "formatter": "access", "stream": sys.stdout},
        "file": {
            "class": "logging.handlers.WatchedFileHandler",
            "formatter": "generic",
            "filename": LOG_PATH / "sanic.log",
            "encoding": "utf-8",
        },
        "access_file": {
            "class": "logging.handlers.WatchedFileHandler",
            "formatter": "access",
            "filename": LOG_PATH / "sanic.log",
            "encoding": "utf-8",
        },
        "error_file": {
            "class": "logging.handlers.WatchedFileHandler",
            "formatter": "generic",
            "filename": LOG_PATH / "sanic.error.log",
            "encoding": "utf-8",
        },
    },
    formatters={
        "generic": {
            "format": "%(asctime)s [%(process)d] [%(levelname)s] %(message)s",
            "datefmt": "[%Y-%m-%d %H:%M:%S]",
            "class": "logging.Formatter",
        },
        "access": {
            "format": "%(asctime)s [%(levelname)s] [%(host)s]: " + "%(request)s %(message)s %(status)d %(byte)d",
            "datefmt": "[%Y-%m-%d %H:%M:%S]",
            "class": "logging.Formatter",
        },
    },
)
