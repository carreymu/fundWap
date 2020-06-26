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
      target:{}
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
        "event_names": ["targets_by_tid","user_invest_account_by_type_id"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.targets_by_tid!=undefined && r.targets_by_tid.length>0){
          this.fundtemp = r.targets_by_tid[0]
          this.fundtemp['target_ratio'] = (this.fundtemp['target_ratio']*100).toFixe(2)
          this.fundtemp['run_days'] = this.$utdate.getDaysLong(new Date().getTime(),x['apply_endtime'])
          this.fundtemp["apply_endtime"] = this.$utdate.dateFmt(x['apply_endtime'],"YYYY年MM月")
        }
        if(r.user_invest_account_by_type_id!=undefined){
          this.target = r.user_invest_account_by_type_id[0]
          this.target['hold_amt'] = this.target['hold_profit'] + this.target['init_amt']
          this.target["now"] = this.$utdate.dateFmt(new Date(),"MM月dd日")
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