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
          let day_profit = eval(lst.map(x=>x.daily_profit).join("+"))
          let hold_profit = eval(lst.map(x=>x.hold_profit).join("+"))
          this.myInfo["all_amt"] = (init_amt+day_profit).toFixed(2)
          this.myInfo["all_profit"] = (hold_profit+day_profit).toFixed(2)
          for(var x of lst){
            x.inserttime = this.$utdate.dateFmt(x.inserttime,"MM月dd日")
            x.hold_profit_ratio = (x.hold_profit_ratio*100).toFixed(2)
            x.daily_profit_ratio = (x.daily_profit_ratio*100).toFixed(2)
          }

          //target
          this.myTargets = lst.filter(x=>x.type=="tid")
          this.myChoice = lst.filter(x=>x.type=="fpl_id" && x.is_sched==0)
          this.myDrumstick = lst.filter(x=>x.type=="fpl_id")
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