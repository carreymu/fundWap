
export function dateFmt(input_date, fmt){
    let d = new Date()
    if(input_date instanceof Date){
        d = input_date
    } else {
        // timestampe
        let td = new Date(input_date)
        if(td == 'Invalid Date'){
            return input_date
        } else {
            if(td.getFullYear() == 1970){
                return input_date
            } else{
                d = td
            }
        }
    }
    var o = {
        "M+": d.getMonth() + 1,                 //月份 
        "d+": d.getDate(),                    //日 
        "h+": d.getHours(),                   //小时 
        "m+": d.getMinutes(),                 //分 
        "s+": d.getSeconds(),                 //秒 
        "q+": Math.floor((d.getMonth() + 3) / 3), //季度 
        "S": d.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

export function getDays(date1 , date2){
    var date1Str = date1.split("-");//将日期字符串分隔为数组,数组元素分别为年.月.日
    //根据年 . 月 . 日的值创建Date对象
    var date1Obj = new Date(date1Str[0],(date1Str[1]-1),date1Str[2]);
    var date2Str = date2.split("-");
    var date2Obj = new Date(date2Str[0],(date2Str[1]-1),date2Str[2]);
    var t1 = date1Obj.getTime();
    var t2 = date2Obj.getTime();
    return getDaysLong(t1,t2)
}

export function getDaysLong(t1, t2,isAbs=true){
    var dateTime = 1000*60*60*24; //每一天的毫秒数
    var minusDays = Math.floor(((t2-t1)/dateTime));//计算出两个日期的天数差
    var days = isAbs? Math.abs(minusDays) : minusDays;//是否取绝对值
    return days;
}

export function addDate(date,days){ 
    var d=new Date(date);
    d.setDate(d.getDate()+days); 
    var m=d.getMonth()+1;
    m = m.toString().length==1?'0'+m :m.toString()
    var dd = d.getDate()
    dd = dd.toString().length==1?'0'+dd :dd.toString()
    return d.getFullYear()+'-'+m+'-'+dd; 
  }

export function workdays(fmt){
    var startDate = new Date()
    var day = startDate.getDay()
    // 0-周日，6-周六
    let sdate = startDate
    let edate = startDate
    switch(day){
        case 0:
            sdate=addDate(startDate,1)
            edate=addDate(startDate,2)
            break
        case 6:
            sdate=addDate(startDate,2)
            edate=addDate(startDate,3)
            break
        default:
            sdate=startDate
            edate=addDate(startDate,1)
            break
    }
    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    return {'startDate':dateFmt(sdate,fmt), 'endDate':dateFmt(edate,fmt), 'weekday':weekday[(new Date(edate)).getDay()]}
}
export default { dateFmt, getDays, addDate, getDaysLong, workdays}