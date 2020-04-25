import { Tabbar, TabbarItem ,XHeader,XButton,XImg, Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  mounted() {
    this.loadLatest();
    this.$store.commit('UPDATE_PAGE_TITLE', '大目标11') 
  },
  data(){
    return {
        itemList:[]
    }
  },
  methods:{
    loadLatest(){
      let self=this;
      this.baseAjax({
        url:'../../../static/basicData/latestNews.json',
        showLoading:true,
        success:function(data){
            console.log(data)
            self.itemList=data.returnObject
        }
      })
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    XButton,
    XImg,
    Flexbox, 
    FlexboxItem,
    Divider
  }
}