import asyncio
import logging
import json
from sanic import response
# from datetime import datetime
# from wap.settings import DEBUG
from wap import ctx_event
from wap.controller import Variable
from wap import wap_app as app
from wap.exceptions import GeneralException
from wap.dependence import dependence_cleanup, dependence_init

@app.get("/ha")
async def heart_ack(request):
    """
    heart ack
    """
    return response.text("OK")


@app.post("/")
async def main(request):
    """
    Wap主流程 不做入参校验
    请求体
    {
        "req": {  // opt
            "id": 1,
            "top": 10,
            "ord": null, // 0-asc,1-desc
            "pid": 1,  // parent id
            "createtime": "2020-01-02 10:04:01",
            "category":1,
        },
        "event_names": [
            "event_example1", //event handler
            "event_example2"
        ],
        "wap_info": {
            "hashid": "hashkey", // ELK ID
            "appid": "10050001", // call right
        }
    }
    """
    req = request.json
    events = set(req["event_names"])
    # print(req)

    # 存放data_source计算缓存
    ctx = {"data_source": {}}

    # 将 req 塞入 ctx 以便各个地方使用
    ctx["req"] = req["req"]
    ctx["wap_info"] = req["wap_info"]
    ctx_event.set(ctx)

    # 初始化返回结果
    result = {"status_code": 200}

    # data 计算主模块
    data = {}  # {"id": req["req"]["id"]}
    # 这里就已经在并行计算了
    variables = [Variable(ctx, event_names).start() for event_names in events]

    try:
        # 将计算完的结果提取
        for future in asyncio.as_completed(variables):
            # CancelledError 不会触发异常
            var = await future
            # import pdb;pdb.set_trace()
            data[var.event_names] = var.result
    except Exception:
        raise

    # data 拼入 result
    result["data"] = data
    return response.json(result, dumps=json.dumps, allow_nan=False)


@app.listener("before_server_start")
async def init_server(app, loop):
    """
    Server开始前后init操作
    1. wap依赖初始化
    2. 数据源依赖初始化
    """
    logging.info("wap init~~~~~~~~~~~~~")
    await dependence_init(app, loop)
    logging.info("wap dependences start~~~~~~~~~~~~~")


@app.listener("after_server_stop")
async def clean_up(app, loop):
    """
    Server停止后cleanup操作
    """
    logging.info("wap stop~~~~~~~~~~~~~")
    await dependence_cleanup(app)
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
