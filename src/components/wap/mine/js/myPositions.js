import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable} from 'vux'
export default {
  mounted() {
    this.myPositions();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
      // showMsg:false,
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
          this.myInfo=r.user_invest_account_by_uid[0]
          let init_amt = eval(r.user_invest_account_by_uid.map(x=>x.init_amt).join("+"))
          let day_profit = eval(r.user_invest_account_by_uid.map(x=>x.daily_profit).join("+"))
          let hold_profit = eval(r.user_invest_account_by_uid.map(x=>x.hold_profit).join("+"))
          this.myInfo["hold_profit"] = hold_profit.toFixed(2)
          this.myInfo["init_amt"]= (init_amt + hold_profit).toFixed(2)
          this.myInfo["daily_profit"]=day_profit.toFixed(2)
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