import {Tabbar, TabbarItem ,XHeader,XButton,XImg, Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
export default {
    mounted() {
        this.bannerList();
        this.loadLatest();
        this.top3Fund();      
        this.$store.commit('UPDATE_PAGE_TITLE', '大目标') 
    },
    data(){      
        return {
        itemList:'',
        top3FundList:'',
        urlList:[],
        }
    },
    methods:{
        bannerList(){
        let self=this;
        this.baseAjax({
            url:'../../../static/basicData/activityBanner.json',
            showLoading:true,
            success:function(data){
                console.log(data)
                self.urlList=data.returnObject
                // console.log(self.urlList)
            }
        })
        },
        top3Fund(){
        let self=this;
        this.baseAjax({
            url:'../../../static/basicData/top3Fund.json',
            showLoading:true,
            success:function(data){
                console.log(data)
                self.top3FundList=data.returnObject
            }
        })
        },
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
        Swiper,
        SwiperItem,
        Flexbox, 
        FlexboxItem
    }
}