import { Tabbar, TabbarItem ,XHeader,XButton,Flexbox, FlexboxItem, Group, Badge, Cell, XTable,Grid, GridItem } from 'vux'
export default {
  mounted() {
    this.menuLists();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
      showMsg:false,
      menuList:[],
      redemption: '有9笔赎回记录即将到帐,最早预计05-07到帐',
      menus1: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      },
    }
  },
  methods:{
    tradeHis(){
        this.showMsg=true;
    },
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
    XTable,
    Grid, GridItem
  }
}