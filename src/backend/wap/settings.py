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
env_map = {"dev": "测试", "prod": "线上", "pre": "预发布", "uat": "UAT"}
ENV_TEXT = env_map[ENV]
print("环境:", ENV_TEXT)
HOST_IP_NAME = socket.gethostbyname(socket.gethostname())
print("机器IP:", HOST_IP_NAME)


# 依赖数据源超时时间
DEPENDENCE_TIMEOUT = 20  # second

# wap配置预读
wap_config = yaml_load(f"config/{ENV}.yaml")

# 数据源配置预读
db_config = yaml_load("wap/config/db.yaml")
for item in db_config.values():
    item.update(item[ENV])
    del item["dev"]
    del item["uat"]
    del item["pre"]
    del item["prod"]

# 非协程io包在线程池内
executor = ThreadPoolExecutor(max_workers=20)
