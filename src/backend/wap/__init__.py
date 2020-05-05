from contextvars import ContextVar
from sanic import Sanic
from wap.settings import SANIC_LOGGING_CONFIG

wap_app = Sanic("wap", log_config=SANIC_LOGGING_CONFIG)

ctx_event = ContextVar("ctx")
ctx_event_time = ContextVar("ctx_event_time")
