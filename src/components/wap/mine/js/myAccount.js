import { Tabbar, TabbarItem ,XHeader, Group, Cell, XSwitch } from 'vux'
export default {
  mounted() {
    // this.menuLists();
    this.$store.commit('UPDATE_PAGE_TITLE', '账户设置') 
  },
  data(){
    return {
      show16:false,
    }
  },
  methods:{
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
    // console (msg) {
    //   console.log(msg)
    // },
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