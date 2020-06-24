import { Tabbar, TabbarItem ,XHeader,XButton,Flexbox, FlexboxItem, Group, dateFormat, DatetimeRange,PopupPicker } from 'vux'
export default {
  mounted() {
    this.initDateList();
    this.loadLatestNews();
    // this.top3Fund();  
    this.$store.commit('UPDATE_PAGE_TITLE', '鸡腿计划') 
  },
  data(){
    return {
      newsList:[],
      showPopupPicker:false,
      value: [],
      dateRange:[],
      sysFlag:{drumstick:7,drumstickInfo:8},
      drumstickList:[],
      drumstickInfo:{},
      drumstickInfoSub:{},
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
    loadLatestNews(){
      let dt = {
        "req": {"scids":"7,8","topx":2,"nc_id":2},
        "event_names": ["system_info","news_info_topx_by_ncid"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.news_info_topx_by_ncid.length > 0){
          let news_list = r.news_info_topx_by_ncid
          for(var i = 0 ;i<news_list.length; i++){
            news_list[i].inserttime = dateFormat(news_list[i].inserttime,"MM-DD HH:mm:ss")
            this.newsList.push(news_list[i])
          }
        }
        if(r.system_info.length > 0){
          this.drumstickList = r.system_info.filter(x=>x.scid==this.sysFlag.drumstick && x.status == 1)
          let sy = r.system_info.filter(x=>x.scid==this.sysFlag.drumstickInfo)
          if(sy.length > 0){
            this.drumstickInfo = sy[0]
            let sbt =eval("(" + this.drumstickInfo.subtitle + ")")
            this.drumstickInfoSub = sbt
          }
        }
        // console.log(this.news2List)
      }).catch(err=>{
        console.log(err)
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