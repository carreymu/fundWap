import { Tabbar, TabbarItem ,XHeader,XButton, Flexbox, FlexboxItem, Spinner,Cell, Group } from 'vux'
export default {
  mounted() {
    this.countTime()
    this.loadFundDetail()
    this.$store.commit('UPDATE_PAGE_TITLE', '大目标2006') 
  },
  data(){
    return {
      serviceInfo:"- 操作与费率说明<br/>- 大目标服务费说明<br/>- 大目标是什么<br/>- 常见问题<br/>",
      sysInfo:{url:'systemInfoDetail',sid:7},
      fundList:[],
      curStartTime: '2020-07-31 08:00:00',
      day: '0',
      hour: '00',
      min: '00',
      second: '00',
    }
  },
  methods:{
    loadFundDetail(){
      let self = this
      self.fundList=[{id: 1001, fundName: "景顺长城沪深100增强基金", fundCode: "000311", percent: "申购基金"},
      {id: 1001, fundName: "景顺长城沪深100增强", fundCode: "000311", percent: "36.09"},
      {id: 1002, fundName: "景顺长城沪深200增强", fundCode: "000312", percent: "20.5"},
      {id: 1003, fundName: "富国动力A", fundCode: "001508", percent: "10"},
      {id: 1004, fundName: "富国动力B", fundCode: "001509", percent: "10.17"},
      {id: 1005, fundName: "前海开源价值成长A", fundCode: "006216", percent: "23.24"},
      {id: 1006, fundName: "富国动力A", fundCode: "001508", percent: "10"},
      {id: 1007, fundName: "富国动力B", fundCode: "001509", percent: "10.17"},
      {id: 1008, fundName: "前海开源价值成长A", fundCode: "006216", percent: "23.24"}]
      // let cid=this.$route.params.cid;
      // this.baseAjax({
      //   url:'../../../static/basicData/choiceDetail.json',
      //   showLoading:true,
      //   // params:{cid:cid},
      //   success:function(data){
      //     // var myDate = new Date();
      //     // let mytime=myDate.toLocaleTimeString();
      //     // console.log(mytime)
      //     let arr=[]
      //     let ro = data.returnObject[0].funds
      //     for(var i=0;i<ro.length;i++){
      //       arr=arr.concat(ro[i].fundsList)
      //     }
      //     this.fundList=arr
      //     console.log(this.fundList.length)
      //     console.log(this.fundList)
      //   }
      // })
    },
    // loadLatest(){
    //   this.baseAjax({
    //     url:'../../../static/basicData/latestNews.json',
    //     showLoading:true,
    //     success:function(data){              
    //         this.itemList=data.returnObject
    //         // console.log(this.itemList)
    //     }
    //   })
    // }
    countTime() {  
        //获取当前时间  
        var date = new Date();  
        var now = date.getTime();  
        //设置截止时间  
        let endDate = new Date(this.curStartTime) // this.curStartTime需要倒计时的日期
        var end = endDate.getTime();  
        
        //时间差  
        var leftTime = end-now; 
        //定义变量 d,h,m,s保存倒计时的时间  
        if (leftTime >= 0) {
          // 天
          this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
          // 时
          let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
          this.hour = h < 10 ? '0' + h : h
          // 分
          let m = Math.floor(leftTime / 1000 / 60 % 60)
          this.min = m < 10 ? '0' + m : m
          // 秒
          let s = Math.floor(leftTime / 1000 % 60)
          this.second = s < 10 ? '0' + s : s
        } else {
          this.day = 0
          this.hour = '00'
          this.min = '00'
          this.second = '00'
        }
        // 等于0的时候不调用
        if (Number(this.hour) === 0 && Number(this.day) === 0 && Number(this.min) === 0 && Number(this.second) === 0) {
          return
        } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
          setTimeout(this.countTime, 1000)
        }
    } 
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    XButton,
    Flexbox, 
    FlexboxItem,
    Spinner,
    Group,
    Cell
  }
}