import time
from datetime import datetime, timedelta, date


def datediff_timestamp(starttime, endtime=None, rnd=True):
    """
    SQL的datediff函数是四舍五入的
    """
    if endtime is None:
        endtime = datetime.now()
    td = endtime - datetime.fromtimestamp(starttime // 1000)
    if rnd:
        result = round(td.days + td.seconds / 86400)
    else:
        result = td.days + td.seconds / 86400
    return result
