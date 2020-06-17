import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable, numberComma} from 'vux'
export default {
  mounted() {
    this.myTargets();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
      myInfo:{},
      // showMsg:false,
    //   redemption: '有9笔赎回记录即将到帐,最早预计05-07到帐',
    }
  },
  methods:{
    // tradeHis(){
    //   this.showMsg=true;
    // },
    myTargets(){
      let dt = {
        "req": {"uid":1},
        "event_names": ["user_invest_account_by_uid","user_detail_by_uid"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.user_invest_account_by_uid!=undefined && r.user_invest_account_by_uid.length>0){
          let lst = r.user_invest_account_by_uid
          this.myInfo=lst[0]
          let init_amt = eval(lst.map(x=>x.init_amt).join("+"))
          let day_profit = eval(lst.map(x=>x.daily_profit).join("+"))
          let hold_profit = eval(lst.map(x=>x.hold_profit).join("+"))
          this.myInfo["all_amt"] = (init_amt+day_profit).toFixed(2)
          this.myInfo["all_profit"] = (hold_profit+day_profit).toFixed(2)
          this.myInfo["day_profit"] = day_profit.toFixed(2)
          for(var x of lst){
            x.inserttime = this.$utdate.dateFmt(x.inserttime,"MM月dd日")
            x.hold_profit_ratio = (x.hold_profit_ratio*100).toFixed(2)
            x.daily_profit_ratio = (x.daily_profit_ratio*100).toFixed(2)
          }
          //target
          this.myTarget = lst.filter(x=>x.type=="tid")
          this.myChoice = lst.filter(x=>x.type=="fpl_id" && x.is_sched==0)
          this.myDrumstick = lst.filter(x=>x.type=="fpl_id")
        }

        if(r.user_detail_by_uid!=undefined && r.user_detail_by_uid.length>0){
          this.myInfo["reg_days"] =this.$utdate.getDaysLong(r.user_detail_by_uid,(new Date()).getTime())
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