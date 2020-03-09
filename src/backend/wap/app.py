from sanic import response
from wap.settings import DEBUG

@app.get("/ha")
async def heart_ack(request):
    """
    heart ack
    """
    return response.text("OK")


@app.listener("before_server_start")
async def init_server(app, loop):
    """
    Server开始前后init操作
    1. wap依赖初始化
    2. 数据源依赖初始化
    """
    logging.info("wap init~~~~~~~~~~~~~")
    logging.info("wap dependences start~~~~~~~~~~~~~")


@app.listener("after_server_stop")
async def clean_up(app, loop):
    """
    Server停止后cleanup操作
    """
    logging.info("wap stop~~~~~~~~~~~~~")
    logging.info("wap dependences stop~~~~~~~~~~~~~")


@app.exception(GeneralException)
async def wap_error_handler(request, exception):
    """
    GeneralException
    Wap自定义异常
    400: 入参校验失败, 不用告警
    500: Warning级: 依赖异常
    500: Error级: 代码错误, 需要对应开发及时处理
    """
    result = {"status_code": exception.status_code, "error_message": repr(exception)}
    return response.json(result, status=exception.status_code)

