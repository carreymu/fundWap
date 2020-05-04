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
      let days = this.$utdate.getDays(curDay,lastDay)
      let arr0 = []
      for(var j=1;j<days;j++){
        arr0.push(this.$utdate.addDate(myDate,j))
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