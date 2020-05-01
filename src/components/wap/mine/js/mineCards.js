import { Tabbar, TabbarItem ,XHeader,XButton, Flexbox, FlexboxItem } from 'vux'
  export default {
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '大目标服务卡') 
    //   this.menuLists();
    },
    data(){
      return {
        // menuList:[],
      }
    },
    methods:{
    //   menuLists(){
    //     let self=this;
    //     this.baseAjax({
    //       url:'../../../static/basicData/mineMenu.json',
    //       showLoading:true,
    //       success:function(data){
    //           console.log(data)
    //           self.menuList=data.returnObject
    //           // console.log(self.urlList)
    //       }
    //     })
    //   },
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      XButton,
      Flexbox,
      FlexboxItem
    }
  }