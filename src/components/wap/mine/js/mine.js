import { Tabbar, TabbarItem ,XHeader,XButton,Flexbox, FlexboxItem, Group, Badge, Cell, Actionsheet } from 'vux'
export default {
  mounted() {
    this.menuLists();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
      menus:[],
      myInfo:{},
      showContent: false,
      menus: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      },
    }
  },
  methods:{
    menuLists(){
      // just demo
      // MUST: call backend API and check
      if(this.$utcookie.getCookie("uid")==undefined){
				window.location = "#/fundWap/mylogin"
				return
      }
      let uid = parseInt(this.$utcookie.getCookie("uid"))
      let dt = {
        "req": {"uid":uid,"scids":13},
        "event_names": ["system_info","user_news_info_not_read_by_uid","user_card_cnt_uid",
        "user_detail_by_uid","user_invest_account_by_uid"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.system_info!=undefined && r.system_info.length>0){
          this.menus=r.system_info
        }
        if(r.user_news_info_not_read_by_uid!=undefined && r.user_news_info_not_read_by_uid.length>0){
          for(var x of this.menus){
            if(x.title.indexOf("消息中心")>0){
              x['cnt']=r.user_news_info_not_read_by_uid[0].cnt
              break;
            }
          }
        }
        if(r.user_card_cnt_uid!=undefined && r.user_card_cnt_uid.length>0){
          let cnt = r.user_card_cnt_uid[0]['cnt']
          if(cnt-1<0) cnt = 0
          for(var x of this.menus){
            if(x.title.indexOf("目标卡")>0){
              // x.title=x.title+'(剩余'+cnt+'次)'
              x['card_cnt']=cnt
              break;
            }
          }
          // console.log(this.menus)
        }
        if(r.user_detail_by_uid!=undefined && r.user_detail_by_uid.length>0){
          this.myInfo=r.user_detail_by_uid[0]
        }
        if(r.user_invest_account_by_uid!=undefined && r.user_invest_account_by_uid.length>0){
          let init_amt = eval(r.user_invest_account_by_uid.map(x=>x.init_amt).join("+"))
          let day_profit = eval(r.user_invest_account_by_uid.map(x=>x.daily_profit).join("+"))
          let hold_profit = eval(r.user_invest_account_by_uid.map(x=>x.hold_profit).join("+"))
          this.myInfo["init_amt"]= (init_amt + hold_profit).toFixed(2)
          this.myInfo["daily_profit"]=day_profit.toFixed(2)
        }
      })
      // console.log(this.menus)
    },
    maskClick (msg) {
      console.log(msg)
    },
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    XButton,
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    Badge,
    Actionsheet
  }
}