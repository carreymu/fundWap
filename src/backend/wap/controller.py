import asyncio
import logging
import traceback
from wap import wap_app as app
from wap import ctx_event_time
from wap.exceptions import GeneralException, VariableException
from wap.monitor import TimeCounter, event_statsd, event_value_monitor
from wap.settings import DEBUG, DEFAULT_TIMEOUT


class Variable:
    def __init__(self, ctx, event_names):
        # import pdb;pdb.set_trace()
        self.event_names = event_names
        self.ctx = ctx
        # find data_source from config
        self.event_info = app.var[self.event_names]
        # find executor
        self.dependence = self.event_info["dependence"]
        self.default = self.event_info["event_default"]

    async def get_result(self):
        print(f'exec event:{self.event_names}>>>>>>>>>>')
        return await self.dependence(
          req=self.ctx["req"], event_default=self.default, sql_info=self.event_info['sql_info']
          )

    async def get_result_joined(self, dep_resource):
        return await self.dependence(req=self.ctx["req"], event_default=self.default, dependence_source=dep_resource)


class Variables:
    """
    单个变量主流程
    # DEBUG模式下只进行正常计算
    1. 变量计算get_result
    2. 用时监控打点event_statsd, 值监控event_value_monitor
    """

    def __init__(self, ctx, event_names):
        # import pdb;pdb.set_trace()
        self.event_names = event_names
        self.ctx = ctx
        self.event_info = app.var[self.event_names]
        # print(self.event_names)
        # print(app.var)

    async def _get_result(self):
        try:
            var_time = TimeCounter()
            ctx_event_time.set(var_time)

            try:
                # import pdb;pdb.set_trace()
                if 'sql_info' in self.event_info:
                    self.result = await Variable(self.ctx, self.event_names).get_result()
                elif 'dependence_source' in self.event_info:
                    print(f'exec joined event:{self.event_names}>>>>>>>>>>')
                    dep_res = {event_names: await Variable(self.ctx, event_names).get_result() for event_names in
                               self.event_info['dependence_source']}
                    # print(dep_res)
                    self.result = await Variable(self.ctx, self.event_names).get_result_joined(dep_res)
            except asyncio.CancelledError:
                raise
            # 依赖数据源报错
            except GeneralException as ex:
                raise VariableException(req=self.ctx["req"], event_info=self.event_info, reason=str(ex))
            # 代码报错或其他意外情况
            except Exception:
                error = traceback.format_exc()
                raise VariableException(req=self.ctx["req"], event_info=self.event_info, reason=error)
        except asyncio.CancelledError:
            raise
        except Exception as ex:
            # 错误原因记录
            # logging.log(ex.level, ex)
            raise
        finally:
            self.real_time = var_time.total_ms
            self.cpu_time = var_time.cpu_ms

    async def start(self):
        await self._get_result()
        # 监控
        if DEBUG:
            msg = f'req {self.ctx["req"]} event_names {self.event_names}, time span: {self.real_time}, ' \
                  f'cpu time span: {self.cpu_time}'
            if self.cpu_time >= DEFAULT_TIMEOUT:
                msg += "【Request time more than 2s, please optimize.】"
            print(msg)
        else:
            self._monitor()
        return self

    def _monitor(self):
        """
        用时监控, 值监控
        """
        # 向 statsd 记录 variable 计算用时和次数记录
        # event_statsd(event_info=self.event_info, total_time=self.real_time)
        event_statsd(event_info=self.event_info, total_time=self.real_time, cpu_time=self.cpu_time)

        # 值监控
        if self.result is not None:
            event_value_monitor(req=self.ctx["req"],event_info=self.event_info, event_result=self.result)
