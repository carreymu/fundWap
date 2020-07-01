import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable, numberComma} from 'vux'
export default {
  mounted() {
    this.myTargets();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
      myInfo:{},
    }
  },
  methods:{
    myTargets(){
      let type = this.$route.query.vi_id || 1;
      let dt = {
        "req": {"uid":1,"type":type},
        "event_names": ["user_invest_account_targets"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.user_invest_account_targets!=undefined){
          this.myInfo = r.user_invest_account_targets
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