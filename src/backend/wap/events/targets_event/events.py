from typing import Any
from wap.base import DataSource
from itertools import groupby
from operator import itemgetter


class TargetsAggList(DataSource):
    # req: dict
    event_default: Any
    dependence_source: dict

    async def compute(self):
        # return result if result else self.event_default
        result = self.dependence_source
        if result:
            result = result["targets_list_by_status"]
            if result:
                # 1 - 建仓中, 2 - 盈利中, 3 - 浮亏中, 4 - 已达标
                gp_cond = {"运行中{cnt}期": [1, 2, 3], "已达标{cnt}期": [4]}
                res = [{"name": "全部{cnt}期 ".format(cnt=len(result)), "cnt": len(result), "items": result}]
                for k, v in gp_cond.items():
                    itm = [x for x in result if x['run_status'] in v]
                    res.append({"name": k.format(cnt=len(itm)), "cnt": len(itm), "items": itm})
                return res
        return self.event_default
