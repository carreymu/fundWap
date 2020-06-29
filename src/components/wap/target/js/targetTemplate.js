import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable} from 'vux'
export default {
  mounted() {
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财')
    this.myTartemp()
  },
  data(){
    return {
      // showMsg:false,
      fundtemp:{},
      target:{},
      fund_lst:[]
    }
  },
  methods:{
    // tradeHis(){
    //   this.showMsg=true;
    // },
    myTartemp(){
      let iv_id = this.$route.query.vi_id || 1;
      let dt = {
        "req": {"tid":iv_id,"uid":1,"type":"tid","iv_id":iv_id},
        "event_names": ["user_invest_account_funds"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_invest_account_funds != undefined){
              res = r.user_invest_account_funds
              this.fundtemp = res.fundtemp
              this.target = res.target
              this.fund_lst = res.fund_lst
          }
        // if(r.targets_by_tid!=undefined && r.targets_by_tid.length>0){
        //   this.fundtemp = r.targets_by_tid[0]
        //   this.fundtemp['target_ratio'] = (this.fundtemp['target_ratio']*100).toFixed(2)
        //   this.fundtemp['run_days'] = this.$utdate.getDaysLong(new Date().getTime(),this.fundtemp['apply_endtime'])
        //   this.fundtemp["apply_endtime"] = this.$utdate.dateFmt(this.fundtemp['apply_endtime'],"yyyy年MM月")
        // }
        // if(r.user_invest_account_by_type_id!=undefined){
        //   this.target = r.user_invest_account_by_type_id[0]
        //   this.target['hold_amt'] = this.target['hold_profit'] + this.target['init_amt']
        //   console.log(this.target['hold_amt'])
        //   console.log(this.target['hold_profit']/this.target['hold_amt'])
        //   this.target['hold_profit_ratio'] = ((this.target['hold_profit']/this.target['hold_amt'])*100).toFixed(2)
          
        //   this.target["now"] = this.$utdate.dateFmt(new Date(),"MM月dd日")
        //   this.target['hold_profit'] = this.target['hold_profit'].toFixed(2)
        //   console.log(this.target)
        // }
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