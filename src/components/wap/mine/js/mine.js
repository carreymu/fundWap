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