

def sql_in(lst: list):
    if isinstance(lst[0], int):
        return f"{lst[0]}" if len(lst) == 1 else ",".join("%s" % str(x) for x in lst)
    else:
        return f"'{lst[0]}'" if len(lst) == 1 else ",".join("'%s'" % str(x) for x in lst)
    # fmt = "%s" if isinstance(lst[0], int) else "'%s'"
    # return ",".join(fmt % str(x) for x in lst)
