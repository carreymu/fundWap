import {Spinner} from 'vux'
export default{
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '优选-单页详情');
        this.loadDetail();	      
    },
    data(){
        return {
        mainData:{}
        }
    },
    methods:{
        loadDetail(){
            let id=this.$route.params.choiceId;
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
                }
                // console.log(this.mainData)
            }).catch(err=>{
                console.log(err)
            })
        }	
    },

    components:{Spinner}
}