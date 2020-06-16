import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable} from 'vux'
export default {
  mounted() {
    this.myPositions();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
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
          this.myInfo=lst[0]
          let init_amt = eval(lst.map(x=>x.init_amt).join("+"))
          //let day_profit = eval(lst.map(x=>x.daily_profit).join("+"))
          let hold_profit = eval(lst.map(x=>x.hold_profit).join("+"))
          this.myInfo["all_amt"] = (init_amt+hold_profit).toFixed(2)
          this.myInfo["all_profit"] = hold_profit.toFixed(2)//??????????????
          this.myInfo["now"] = this.$utdate.dateFmt(new Date(),"MM月dd日") 
          this.myInfo["hold_profit"] = hold_profit.toFixed(2)

          //hold_profit = hold_profit_yesterday+daily_profit
          this.myTargets = lst.filter(x=>x.type=="tid")
          hold_profit = eval(this.myTargets.map(x=>x.hold_profit).join("+"))
          let day_profit = eval(this.myTargets.map(x=>x.daily_profit).join("+"))
          init_amt = eval(this.myTargets.map(x=>x.init_amt).join("+"))
          let t_amt = init_amt+hold_profit
          let td_ratio = (day_profit/t_amt).toFixed(2)
          let t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
          this.myInvest.push({"name":"大目标","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
          "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":this.myTargets.length})

          this.myChoice = lst.filter(x=>x.type=="fpl_id") //&& x.is_sched==0
          hold_profit = eval(this.myChoice.map(x=>x.hold_profit).join("+"))
          day_profit = eval(this.myChoice.map(x=>x.daily_profit).join("+"))
          init_amt = eval(this.myChoice.map(x=>x.init_amt).join("+"))
          t_amt = init_amt+hold_profit
          td_ratio = (day_profit/t_amt).toFixed(2)
          t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
          this.myInvest.push({"name":"优选","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
          "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":0})

          this.myDrumstick = lst.filter(x=>x.type=="did")
          hold_profit = eval(this.myDrumstick.map(x=>x.hold_profit).join("+"))
          day_profit = eval(this.myDrumstick.map(x=>x.daily_profit).join("+"))
          init_amt = eval(this.myDrumstick.map(x=>x.init_amt).join("+"))
          t_amt = init_amt+hold_profit
          td_ratio = (day_profit/t_amt).toFixed(2)
          t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
          this.myInvest.push({"name":"鸡腿计划","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
          "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":0})

          this.myfunds = lst.filter(x=>x.type=="fid")
          hold_profit = eval(this.myfunds.map(x=>x.hold_profit).join("+"))
          day_profit = eval(this.myfunds.map(x=>x.daily_profit).join("+"))
          init_amt = eval(this.myfunds.map(x=>x.init_amt).join("+"))
          t_amt = init_amt+hold_profit
          td_ratio = (day_profit/t_amt).toFixed(2)
          t_ratio = ((hold_profit+day_profit)/t_amt).toFixed(2)
          this.myInvest.push({"name":"基金","dt": this.myInfo["now"], "daily_ratio":td_ratio,"daily_profit":day_profit.toFixed(2),
          "hold_ratio":t_ratio,"hold_profit":hold_profit.toFixed(2),"hold_cnt":0})
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