import { Tabbar, TabbarItem ,XHeader,Flexbox, FlexboxItem, XTable} from 'vux'
export default {
  mounted() {
    // this.menuLists();
    this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
  },
  data(){
    return {
      // showMsg:false,
    //   redemption: '有9笔赎回记录即将到帐,最早预计05-07到帐',
    }
  },
  methods:{
    // tradeHis(){
    //   this.showMsg=true;
    // },
    // menuLists(){
    //   let self=this;
    //   this.baseAjax({
    //     url:'../../../static/basicData/mineMenu.json',
    //     showLoading:true,
    //     success:function(data){
    //         self.menuList=data.returnObject
    //     }
    //   })
    // },
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