import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable, XButton, AlertModule, Toast} from 'vux'
export default {
  mounted() {
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财')
    this.myTartemp()
  },
  data(){
    return {
      showMsg:false,
      fundtemp:{},
      target:{},
      fund_lst:[]
    }
  },
  methods:{
    redeem(){
      this.showMsg = true;
    },
    myTartemp(){
      if(this.$utcookie.getCookie("uid")==undefined){
				window.location = "#/fundWap/mylogin"
				return
      }
      let uid = parseInt(this.$utcookie.getCookie("uid"))
      let iv_id = this.$route.query.iv_id || 1
      let type = this.$route.query.type || 'tid'
      let dt = {
        "req": {"fpl_id":iv_id,"uid":uid,"type":type,"iv_id":iv_id},
        "event_names": ["fund_plan_by_fplid","user_invest_account_funds"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.fund_plan_by_fplid!=undefined){
            fund_plan = r.fund_plan_by_fplid
        }
        if(r.user_invest_account_funds != undefined){
          let res = r.user_invest_account_funds
          if(res.fund_lst.length==0){
            AlertModule.show({
              title: '亲~~',
              content: '请勿瞎搞.',
              onHide () {
                  window.location.replace(document.referrer)
              }
            })
          } else{
            this.fundtemp = res.fundtemp
            this.target = res.target
            this.fund_lst = res.fund_lst
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
    XButton,
    AlertModule, 
    Toast
  }
}