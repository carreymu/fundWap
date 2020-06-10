import { Tabbar, TabbarItem ,XHeader,XButton,Flexbox, FlexboxItem, Group, Badge, Cell, Actionsheet } from 'vux'
export default {
  mounted() {
    this.menuLists();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
      menus:[],
      menuList:[],
      showContent004: false,
      menus1: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      },
    }
  },
  methods:{
    menuLists(){
      let dt = {
        "req": {"uid":1,"scids":13},
        "event_names": ["system_info","user_news_info_not_read_by_uid","user_card_cnt_uid"]
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
          console.log(this.menus)
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