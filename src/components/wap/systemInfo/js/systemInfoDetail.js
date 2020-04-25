// import {Flexbox, FlexboxItem,XImg} from 'vux'
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
            // let self=this;
            let id=this.$route.params.sysId;
            if(id == undefined){
                //alter and back to pre page
            }
            let dt = {
                "req": {"sid":id},
                "event_names": ["system_info_by_id"]
            }
            this.$api.fetchPost('/sanic-api', dt).then(r=>{
                if(r.system_info_by_id.length > 0){
                    this.mainData = r.system_info_by_id[0]
                }
                // console.log(this.mainData)
            }).catch(err=>{
                console.log(err)
            })
        }	
    },

    components:{
        // Flexbox, FlexboxItem,XImg
    }
}