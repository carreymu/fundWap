import logging
from datetime import datetime
from sanic.exceptions import SanicException
from json import dumps as json_dumps
from wap.settings import ENV_TEXT
from typing import Any
from copy import copy

class GeneralException(SanicException):
    level = logging.ERROR
    _status_code = 500
    def __init__(self, error_message):
        super().__init__(message=error_message, status_code=self._status_code)

class VariableException(GeneralException):
    def __init__(self, user_info: dict, var_info: dict, reason: str, level=logging.ERROR):
        self.level = level
        now = datetime.now().isoformat(sep=" ", timespec="seconds")

        user_input = copy(user_info)
        user_input["listingtime"] = user_input["listingtime"].isoformat(sep=" ", timespec="seconds")
        user_input["appid"] = "11050001"
        user_input["variables"] = [var_info["var_name"]]
        user_input = json_dumps(user_input)

        error_message = f"""
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    时间[{now}]
    [{ENV_TEXT}]环境报错:
    字段名: [{var_info["var_name"]}]
    字段描述: [{var_info["name"]}]
    作者: [{var_info["author"]}]
    复现入参(非真实): {user_input}
    错误信息: \n{reason[:10000]}
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        """
        super().__init__(error_message=error_message)

class VariableTypeError(GeneralException):
    def __init__(self, expect_type: type, result: Any):
        error_message = f"""
    - 字段类型错误:
    - 字段值: [{result}]
    - 当前类型: [{type(result)}]
    - 预期类型: [{expect_type}]
        """
        super().__init__(error_message=error_message)

class DBExecuteError(GeneralException):
    level = logging.WARNING

    def __init__(self, key, db_info, sql, reason=None):
        error_message = f"""
    - 数据库请求错误:
    - 数据库名: [{key}]
    - 数据库负责人: [{db_info["owner"]}]
    - 数据库描述: [{db_info["description"]}]
    - 数据库类型: [{db_info["db_type"]}]
    - 数据库库名: [{db_info.get("db")}]
    - 数据库IP端口: [{db_info["host"]}:{db_info["port"]}]
    - SQL: {sql}
    - 错误信息: \n{reason}
    """
        super().__init__(error_message=error_message)


class InterfaceKeyNotExist(GeneralException):
    def __init__(self, key: str):
        super().__init__(error_message=f"接口Key *{key}* 配置不存在")


class DBKeyNotExist(GeneralException):
    def __init__(self, key: str):
        super().__init__(error_message=f"DBKey *{key}* 配置不存在")


class DBTypeNotSupport(GeneralException):
    def __init__(self, db_type: str):
        super().__init__(error_message=f"DB Type *{db_type}* 不支持")


class RedisKeyNotExist(GeneralException):
    def __init__(self, key: str):
        super().__init__(error_message=f"Redis Key *{key}* 配置不存在")


class InterfaceRequestError(GeneralException):
    level = logging.WARNING

    def __init__(
        self,
        key: str,
        itf_info: dict,
        url: str,
        method: str,
        status: int = None,
        params: dict = None,
        data: Any = None,
        json: dict = None,
        headers: dict = None,
        reason: str = None,
    ):
        error_message = f"""
    - 接口请求错误:
    - 接口名: [{key}]
    - 接口负责人: [{itf_info["owner"]}]
    - 接口描述: [{itf_info["description"]}]
    - 接口url: [{url}]
    - http状态码: {status}
    - 请求method: {method}
    - 请求headers: {headers}
    - 请求params: {params}
    - 请求body: {data or json_dumps(json)}
    - 错误信息: \n{reason}
        """
        super().__init__(error_message=error_message)


class DBExecuteError(GeneralException):
    level = logging.WARNING

    def __init__(self, key, db_info, sql, reason=None):
        error_message = f"""
    - 数据库请求错误:
    - 数据库名: [{key}]
    - 数据库负责人: [{db_info["owner"]}]
    - 数据库描述: [{db_info["description"]}]
    - 数据库类型: [{db_info["db_type"]}]
    - 数据库库名: [{db_info.get("db")}]
    - 数据库IP端口: [{db_info["host"]}:{db_info["port"]}]
    - SQL: {sql}
    - 错误信息: \n{reason}
    """
        super().__init__(error_message=error_message)


class RedisExcuteError(GeneralException):
    level = logging.WARNING

    def __init__(self, redis_info, func, args, kw, reason=None):
        error_message = f"""
        - Redis请求错误:
        - Redis名: [{redis_info["key"]}]
        - Redis负责人: [{redis_info["owner"]}]
        - Redis描述: [{redis_info["description"]}]
        - 调用方法: [client.{func}]
        - 方法入参: [{args}]
        - 方法入参: [{kw}]
        - 错误信息: \n{reason}
        """

        super().__init__(error_message=error_message)
