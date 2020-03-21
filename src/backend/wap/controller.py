import asyncio
import logging
import traceback

from wap import wap_app as app
from wap.exceptions import GeneralException, VariableException, VariableTypeError
from wap.settings import DEBUG


class Variable:
    """
    单个变量主流程
    # DEBUG模式下只进行正常计算
    1. 变量计算get_result
    2. 检查result类型check_result
    3. 如有异常触发降级检测
    4. 用时监控打点var_statsd, 值监控var_value_monitor
    """

    downgrade = 0

    def __init__(self, ctx, var_name):
        self.var_name = var_name
        self.ctx = ctx
        self.var_info = app.var[self.var_name]

    def _check_result(self):
        """
        类型检查, 不检查 default 是 None
        并强制使用 config 配置的 type 转化 result
        """
        if self.var_info["default"] is None and self.result is None:
            return

        expect_type = self.var_info["type"]
        # 判断result是不是nan
        if self.result == self.result:
            # result类型检测, result为int, 而config为float也是兼容的
            if isinstance(self.result, expect_type) or (expect_type is float and isinstance(self.result, int)):
                return

        ex = VariableTypeError(expect_type=expect_type, result=self.result)
        try:
            # 如果result是nan则给默认值
            if self.result == self.result:
                self.result = expect_type(self.result)
            else:
                self.result = self.var_info["default"]
        finally:
            raise ex

    async def _get_result(self):
        """
        变量计算, 降级
        """
        try:
            # 从配置中获取变量计算入口data_source
            var_name = self.var_name
            dependence = self.var_info["dependence"]

            # 是否依赖已存在字段
            if isinstance(dependence, str):
                var_name = dependence
                dependence = app.var[dependence]["dependence"]
            try:
                self.result = await dependence(
                    user_info=self.ctx["user_info"], var_name=var_name, var_default=self.var_info["default"]
                )
                # 结果类型检查
                self._check_result()

            except asyncio.CancelledError:
                raise
            # 依赖数据源报错
            except GeneralException as ex:
                raise VariableException(
                    user_info=self.ctx["user_info"], var_info=self.var_info, reason=str(ex), level=ex.level
                )
            # 代码报错或其他意外情况
            except Exception:
                error = traceback.format_exc()
                raise VariableException(user_info=self.ctx["user_info"], var_info=self.var_info, reason=error)

        except asyncio.CancelledError:
            raise
        except Exception as ex:
            # 字段错误原因记录
            logging.log(ex.level, ex)
            raise
