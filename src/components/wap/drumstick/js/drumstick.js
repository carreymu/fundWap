import { Tabbar, TabbarItem ,XHeader,XButton,Flexbox, FlexboxItem, Group, DatetimeRange,PopupPicker } from 'vux'
export default {
  mounted() {
    this.initDateList();
    this.loadLatest();
    // this.top3Fund();  
    this.$store.commit('UPDATE_PAGE_TITLE', '鸡腿计划') 
  },
  data(){
    return {
      itemList:[],
      showPopupPicker:false,
      value: [],
      dateRange:[],
      format: function (value, name) {return `${value[0]} ${value[0]} ${value[1]}`}
    }
  },
  methods:{
    initDateList () {
      var myDate = new Date()
      let curDay = myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDay()
      let lastDay = myDate.getFullYear()+"-12-31"
      let days = this.getDays(curDay,lastDay)
      let arr0 = []
      for(var j=1;j<days;j++){
        arr0.push(this.addDate(myDate,j))
      }
      // console.log(arr0)
      let hours=[]
      let mints = []
      for(var i=0;i<24;i++){
        hours.push(i)
      }
      for(var i=0;i<60;i++){
        mints.push(i)
      }
      this.dateRange = [arr0,hours,mints]
    },
    loadLatest(){
      let self=this;
      this.baseAjax({
        url:'../../../static/basicData/latestNews.json',
        showLoading:true,
        success:function(data){
            // console.log(data)
            self.itemList=data.returnObject
        }
      })
    },
    addDate(date,days){ 
      var d=new Date(date); 
      d.setDate(d.getDate()+days); 
      var m=d.getMonth()+1; 
      return d.getFullYear()+'-'+m+'-'+d.getDate(); 
    },
    getDays(date1 , date2){
			var date1Str = date1.split("-");//将日期字符串分隔为数组,数组元素分别为年.月.日
			//根据年 . 月 . 日的值创建Date对象
			var date1Obj = new Date(date1Str[0],(date1Str[1]-1),date1Str[2]);
			var date2Str = date2.split("-");
			var date2Obj = new Date(date2Str[0],(date2Str[1]-1),date2Str[2]);
			var t1 = date1Obj.getTime();
			var t2 = date2Obj.getTime();
			var dateTime = 1000*60*60*24; //每一天的毫秒数
			var minusDays = Math.floor(((t2-t1)/dateTime));//计算出两个日期的天数差
			var days = Math.abs(minusDays);//取绝对值
			return days;
		},
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    XButton,
    Flexbox, 
    FlexboxItem,
    Group,
    DatetimeRange,
    PopupPicker
  }
}