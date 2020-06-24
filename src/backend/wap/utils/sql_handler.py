

def sql_in(lst: list):
    fmt = "%s" if isinstance(lst[0], int) else "'%s'"
    return ",".join(fmt % str(x) for x in lst)
