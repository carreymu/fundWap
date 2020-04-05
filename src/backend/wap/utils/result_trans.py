import json
import pandas as pd


'''
list_axis=0,横轴; list_axis=1,纵轴
'''
def list_to_df(data, columns, list_axis = 1):
    if data is None or len(data) == 0:
        dframe = pd.DataFrame(columns=columns)
    elif isinstance(data, dict):
        dframe = pd.DataFrame([data]).reindex(columns=columns)
    elif isinstance(data, list):
        dframe = pd.DataFrame(data).reindex(columns=columns) if list_axis == 1 else pd.DataFrame(data, columns=columns)
    else:
        dframe = pd.DataFrame(columns=columns)
    return dframe


# def df_to_required(df, fmt: str = "json"):
#     # return {
#     #   "df": df,
#     #   "str": df.to_json(force_ascii=False),
#     #   "json": json.loads(df.to_json(force_ascii=False))
#     # }.get(fmt)
#     if fmt == "json":
#         return json.loads(df.to_json(force_ascii=False))
#     elif fmt == "df":
#         return df
#     elif fmt == "str":
#         return df.to_json(force_ascii=False)
#     return None
