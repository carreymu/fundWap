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
      let tid=this.$route.params.tid;
      if(tid == undefined){
        AlertModule.show({
            title: '亲~~',
            content: '请勿瞎搞.',
            onHide () {
                window.location.replace(document.referrer)
            }
        })
      }
      let dt = {
        "req": {"ft_id":tid},
        "event_names": ["fund_templates_short_list"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.fund_templates_short_list!=undefined && r.fund_templates_short_list.length > 0){
          let flt = r.fund_templates_short_list.filter(x=>x.status==1)
          if(flt.length > 0){
            this.fundList = flt
          }
        }
        // console.log(this.fundList)
      })
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
            this.targetRun1.target_ratio=(tar_1.target_ratio*100).toFixed(2)
            this.targetRun1.pre_run=tar_1.pre_run
            this.targetRun1.id=tar_1.tid
            this.targetRun1.money = tar_1.target_ratio*10000
            let fmt = 'yy年MM月dd日'
            this.targetRun1.appStart = this.$utdate.dateFmt(tar_1.apply_starttime,fmt)
            this.targetRun1.appEnd = this.$utdate.dateFmt(tar_1.apply_endtime,fmt)
            this.targetRun1.initial_amt=tar_1.initial_amt
            this.targetRun1.fee_ratio=tar_1.fee_ratio>0?(targetRun1.fee_ratio*100).toFixed(2):0
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