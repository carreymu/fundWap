import logging
from datetime import datetime
from sanic.exceptions import SanicException
from json import dumps as json_dumps
from wap.settings import ENV_TEXT
from copy import copy


class GeneralException(SanicException):
    level = logging.ERROR
    _status_code = 500

    def __init__(self, error_message):
        super().__init__(message=error_message, status_code=self._status_code)


class VariableException(GeneralException):
    def __init__(self, req: dict, event_info: dict, reason: str, level=logging.ERROR):
        self.level = level
        now = datetime.now().isoformat(sep=" ", timespec="seconds")
        req_input = copy(req)
        req_input["event_name"] = [event_info["event_name"]]
        req_input = json_dumps(req_input)

        error_message = f"""
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        Time [{now}] Env:[{ENV_TEXT}] error:
        Event name: [{event_info["event_name"]}]
        Desc: [{event_info["name"]}]
        Author: [{event_info["author"]}]
        Request params: {req_input}
        Error info.: \n{reason[:10000]}
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        """
        super().__init__(error_message=error_message)


class DBExecuteError(GeneralException):
    level = logging.WARNING

    def __init__(self, key, db_info, sql, reason=None):
        error_message = f"""
    - Database execution error:
    - Database key: [{key}]
    - Database owner: [{db_info["owner"]}]
    - Database description: [{db_info["description"]}]
    - Database type: [{db_info["db_type"]}]
    - Database name: [{db_info.get("db")}]
    - Database port: [{db_info["host"]}:{db_info["port"]}]
    - SQL: {sql}
    - Error: \n{reason}
    """
        super().__init__(error_message=error_message)


# class InterfaceKeyNotExist(GeneralException):
#     def __init__(self, key: str):
#         super().__init__(error_message=f"Interface Key *{key}* does not exists")


class DBKeyNotExist(GeneralException):
    def __init__(self, key: str):
        super().__init__(error_message=f"Database Key *{key}* does not exists")


class RedisKeyNotExist(GeneralException):
    def __init__(self, key: str):
        super().__init__(error_message=f"Redis Key *{key}* does not exists")


# class InterfaceRequestError(GeneralException):
#     level = logging.WARNING
#
#     def __init__(
#         self,
#         key: str,
#         itf_info: dict,
#         url: str,
#         method: str,
#         status: int = None,
#         params: dict = None,
#         data: Any = None,
#         json: dict = None,
#         headers: dict = None,
#         reason: str = None,
#     ):
#         error_message = f"""
#     - Interface error:
#     - Interface key: [{key}]
#     - Interface owner: [{itf_info["owner"]}]
#     - Interface description: [{itf_info["description"]}]
#     - Interface url: [{url}]
#     - Http status: {status}
#     - Call method: {method}
#     - Call headers: {headers}
#     - Call params: {params}
#     - Call body: {data or json_dumps(json)}
#     - Error: \n{reason}
#         """
#         super().__init__(error_message=error_message)


class RedisExcuteError(GeneralException):
    level = logging.WARNING

    def __init__(self, redis_info, func, args, kw, reason=None):
        error_message = f"""
        - Redis execution error:
        - Redis key: [{redis_info["key"]}]
        - Redis owner: [{redis_info["owner"]}]
        - Redis description: [{redis_info["description"]}]
        - Call: [client.{func}]
        - Input args: [{args}]
        - Input args: [{kw}]
        - Error: \n{reason}
        """

        super().__init__(error_message=error_message)


class VariableInitError(GeneralException):
  def __init__(self, duplicate_vars: list):
    error_message = f"""
    ENV:[{ENV_TEXT}] error:
    {duplicate_vars} already exists"""
    super().__init__(error_message=error_message)
