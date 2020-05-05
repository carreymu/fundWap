import {Flexbox, FlexboxItem, XImg, dateFormat,Spinner} from 'vux'
export default{
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '详情');
        this.loadDetail();	      
    },
    data(){
        return {
        mainData:{}
        }
    },
    methods:{
        loadDetail(){
            let id=this.$route.params.tId;
            if(id == undefined){
                //alter and back to pre page
            }
            let dt = {
                "req": {"nid":id},
                "event_names": ["news_info_by_nid"]
            }
            this.$api.fetchPost('/sanic-api', dt).then(r=>{
                if(r.news_info_by_nid.length > 0){
                    this.mainData = r.news_info_by_nid[0]
                    this.mainData.inserttime = dateFormat(this.mainData.inserttime,'MM-DD HH:mm:ss')
                }
                // console.log(this.mainData)
            }).catch(err=>{
                console.log(err)
            })
        }	
    },

    components:{
        Flexbox, FlexboxItem,XImg,Spinner
    }
}