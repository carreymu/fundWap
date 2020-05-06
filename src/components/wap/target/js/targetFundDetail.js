import { Tabbar, TabbarItem ,XHeader,XButton, Flexbox, FlexboxItem, Spinner,Cell, Group } from 'vux'
export default {
  mounted() {
    this.countTime()
    this.loadFundDetail()
    this.loadLatest()
    this.$store.commit('UPDATE_PAGE_TITLE', '大目标2006') 
  },
  data(){
    return {
      serviceInfo:"",
      sysInfo:{url:'systemInfoDetail',sid:7},
      fundList:[],
      curStartTime: '2020-07-31 08:00:00',
      day: '0',
      hour: '00',
      min: '00',
      second: '00',
      targetRun1:{id:0,name:'2001',targetRatio:8.00,pre_run:'1-12',money:811,appStart:'20年04月20日',appEnd:'20年04月20日'},
      sysInfos:[]
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
    loadLatest(){
      let scid=10
      let dt = {
        "req": {"scid":scid,"scids":scid,"run_status":0,"topx":1},
        "event_names": ["system_info_category_by_scid","system_info","targets_status_topx"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.system_info_category_by_scid!=undefined && r.system_info_category_by_scid.length > 0){
            let sub = r.system_info_category_by_scid[0].subtitle
            if(sub.length>0){
              this.serviceInfo = r.system_info_category_by_scid[0].subtitle
            }
          }
          if(r.system_info!=undefined && r.system_info.length >0){
            this.sysInfos=r.system_info
          }
          if(r.targets_status_topx!=undefined && r.targets_status_topx.length > 0){
            let tar_1 = r.targets_status_topx[0]
            this.targetRun1.name = tar_1.name
            this.targetRun1.target_ratio=(tar_1.targetRatio*100).toFixed(2)
            this.targetRun1.pre_run=tar_1.pre_run
            this.targetRun1.id=tar_1.tid
            this.targetRun1.money = tar_1.targetRatio*10000
            let fmt = 'yy年MM月dd日'
            this.targetRun1.appStart = this.$utdate.dateFmt(tar_1.apply_starttime,fmt)
            this.targetRun1.appEnd = this.$utdate.dateFmt(tar_1.apply_endtime,fmt)
          }
          // else{
          //     AlertModule.show({
          //         title: '不好意思~~',
          //         content: '没找到你要的信息.',
          //         onHide () {
          //           window.history.go(-1)
          //         }
          //     })
          // }
          // console.log(this.mainData)
      }).catch(err=>{
          console.log(err)
      })
    },
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