import { Tabbar, TabbarItem ,XHeader,XButton,Flexbox, FlexboxItem, Group, Badge, Cell, Actionsheet } from 'vux'
export default {
  mounted() {
    this.menuLists();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
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
      let self=this;
      this.baseAjax({
        url:'../../../static/basicData/mineMenu.json',
        showLoading:true,
        success:function(data){
            self.menuList=data.returnObject
        }
      })

      let dt = {
        "req": {"uid":1,"sid":13},
        "event_names": ["system_info_by_id"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.system_info_by_id!=undefined && r.system_info_by_id.length>0){
          this.menuList=r.system_info_by_id
          // console.log(exps)
        }
        console.log(this.menuList)
      })
    },
    console (msg) {
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