import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable} from 'vux'
export default {
  mounted() {
    this.myPositions();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的持仓') 
  },
  data(){
    return {
      // showMsg:false,
      myInfo:{},
      myInvest:[],
      myTargets:[],
      myChoice:[],
      myDrumstick:[],
      redemption: '有9笔赎回记录即将到帐,最早预计05-07到帐',
    }
  },
  methods:{
    // tradeHis(){
    //   this.showMsg=true;
    // },
    myPositions(){
      let dt = {
        "req": {"uid":1},
        "event_names": ["user_invest_account_by_uid"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.user_invest_account_by_uid!=undefined && r.user_invest_account_by_uid.length>0){
          let lst = r.user_invest_account_by_uid
          //this.myInfo=lst[0]
          let init_amt = eval(lst.map(x=>x.init_amt).join("+"))
          let all_hold_profit = eval(lst.map(x=>x.hold_profit).join("+"))
          this.myInfo["all_amt"] = (init_amt+all_hold_profit).toFixed(2)
          // 赎回+持有,部分赎回也属赎回
          this.myInfo["all_profit"] = all_hold_profit.toFixed(2)
          this.myInfo["now"] = this.$utdate.dateFmt(new Date(),"MM月dd日")
          // 持有+赎回中
          let hold_profit = eval(lst.filter(x=>x.hold_status!=0).map(x=>x.hold_profit).join("+"))
          this.myInfo["hold_profit"] = hold_profit.toFixed(2)
          this.myInfo["daily_profit"] = eval(lst.map(x=>x.daily_profit).join("+")).toFixed(2)

          // hold_profit = hold_profit_yesterday+daily_profit
          let hold_list = lst.filter(x=>x.hold_status!=0)
          if(hold_list.length==0) return
          
          this.myTargets = hold_list.filter(x=>x.type=="tid")
          if(this.myTargets.length>0){
            hold_profit = eval(this.myTargets.map(x=>x.hold_profit).join("+"))
            let day_profit = eval(this.myTargets.map(x=>x.daily_profit).join("+"))
            init_amt = eval(this.myTargets.map(x=>x.init_amt).join("+"))
            let t_amt = init_amt+hold_profit
            let td_ratio = (day_profit/t_amt).toFixed(2)
            let t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
            this.myInvest.push({"name":"大目标","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
            "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":this.myTargets.length})
          }

          this.myChoice = hold_list.filter(x=>x.type=="fpl_id") //&& x.is_sched==0
          if(this.myChoice.length>0){
            hold_profit = eval(this.myChoice.map(x=>x.hold_profit).join("+"))
            day_profit = eval(this.myChoice.map(x=>x.daily_profit).join("+"))
            init_amt = eval(this.myChoice.map(x=>x.init_amt).join("+"))
            t_amt = init_amt+hold_profit
            td_ratio = (day_profit/t_amt).toFixed(2)
            t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
            this.myInvest.push({"name":"优选","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
            "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":0})
          }

          this.myDrumstick = hold_list.filter(x=>x.type=="did")
          if(this.myDrumstick.length>0){
            hold_profit = eval(this.myDrumstick.map(x=>x.hold_profit).join("+"))
            day_profit = eval(this.myDrumstick.map(x=>x.daily_profit).join("+"))
            init_amt = eval(this.myDrumstick.map(x=>x.init_amt).join("+"))
            t_amt = init_amt+hold_profit
            td_ratio = (day_profit/t_amt).toFixed(2)
            t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
            this.myInvest.push({"name":"鸡腿计划","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
            "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":0})
          }

          this.myfunds = hold_list.filter(x=>x.type=="fid")
          if(this.myfunds.length>0){
            hold_profit = eval(this.myfunds.map(x=>x.hold_profit).join("+"))
            day_profit = eval(this.myfunds.map(x=>x.daily_profit).join("+"))
            init_amt = eval(this.myfunds.map(x=>x.init_amt).join("+"))
            t_amt = init_amt+hold_profit
            td_ratio = (day_profit/t_amt).toFixed(2)
            t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
            this.myInvest.push({"name":"基金","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
            "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":0})
          }
        }
      })
    },
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    Flexbox,
    FlexboxItem,
    XTable,
  }
}