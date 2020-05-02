import { Tabbar, TabbarItem ,XHeader,XButton,XImg, Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  mounted() {
    this.loadLatest()
    this.loadFundDetail()
    this.$store.commit('UPDATE_PAGE_TITLE', '大目标11') 
  },
  data(){
    return {
      fTypeList:[],
      itemList:[]
    }
  },
  methods:{
    loadFundDetail(){
			let self=this;
			let cid=this.$route.params.cid;
			this.baseAjax({
				url:'../../../static/basicData/choiceDetail.json',
				showLoading:true,
				params:{cid:cid},
				success:function(data){
					// self.mainData=data.returnObject[0];
					self.fTypeList=self.mainData.funds
				}
			})
		},
    loadLatest(){
      let self=this;
      this.baseAjax({
        url:'../../../static/basicData/latestNews.json',
        showLoading:true,
        success:function(data){
            // console.log(data)
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