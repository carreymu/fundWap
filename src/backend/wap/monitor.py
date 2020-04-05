import time
from functools import wraps
from wap import wap_app as app
from wap.settings import DEBUG


def dependence_statsd(key_word):
    def decorator(f):
        @wraps(f)
        async def decorated_function(self, *args, **kwargs):
            if DEBUG:
                return await f(self, *args, **kwargs)
            dt = time.time()
            status = "success"
            try:
                result = await f(self, *args, **kwargs)
                return result
            except Exception:
                status = "fail"
                raise
            finally:
                dt = int((time.time() - dt) * 1000)
                app.statsd.timing(f"{key_word}.time,{key_word}_key={self.key},status={status}", dt, rate=0.1)
        return decorated_function
    return decorator


def event_statsd(event_info, total_time, cpu_time):
  pass


def event_value_monitor(req, event_info, var_result, downgrade):
  pass


def _monitor(self):
  """
  用时监控, 值监控
  """
  pass


class TimeCounter:
  # cpu 耗时计算
  _cpu_time = 0

  def __init__(self):
    self._init_time = time.perf_counter()  # time.process_time()

  def add(self, time):
    self._cpu_time += time

  @property
  def total_ms(self):
    return int((time.perf_counter() - self._init_time) * 1000)

  @property
  def cpu_ms(self):
    return int(self._cpu_time * 1000)
