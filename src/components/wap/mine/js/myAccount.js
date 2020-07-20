import { Tabbar, TabbarItem ,XHeader, Group, Cell, XSwitch } from 'vux'
export default {
  mounted() {
    this.myAccount();
    this.$store.commit('UPDATE_PAGE_TITLE', '账户设置') 
  },
  data(){
    return {
      myInfo:{},
      showGesture:false,
      showHandpring:true,
    }
  },
  methods:{
    myAccount(){
      let dt = {
        "req": {"uid":1},
        "event_names": ["user_detail_by_uid"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.user_detail_by_uid!=undefined && r.user_detail_by_uid.length>0){
          this.myInfo=r.user_detail_by_uid[0]
          this.myInfo["is_fund_account"]=this.myInfo.is_fund_account==1?"已开通":"未开通"
        }
      })
    },
    loginOut() {
      // MUST: remove cookie from SERVER!!
      // if(this.$utcookie.getCookie("token")!=undefined || this.$utcookie.getCookie("uid")!=undefined){
        this.$utcookie.delCookie("token")
        this.$utcookie.delCookie("uid")
        AlertModule.show({
          title: '恭喜~~',
          content: '成功退出!',
          onHide () {
              window.location = "#/fundWap/targetIndex"
          }
        })
      // }
    },
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    Group,
    Cell,
    XSwitch
  }
}