import {Spinner,Flexbox,FlexboxItem,XButton,AlertModule} from 'vux'
export default{
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '优选-单页详情');
        this.loadDetail();	      
    },
    data(){
        return {
            cid:0,
            mainData:{}
        }
    },
    methods:{
        loadDetail(){
            this.cid=this.$route.params.cid;
            if(this.cid == undefined){
                AlertModule.show({
                    title: '亲~~',
                    content: '请勿瞎搞.',
                    onHide () {
                        window.location.replace(document.referrer)
                    }
                })
            }
            let dt = {
                "req": {"fpl_id":this.cid},
                "event_names": ["fund_plan_by_fplid"]
            }
            this.$api.fetchPost('/sanic-api', dt).then(r=>{
                if(r.fund_plan_by_fplid.length > 0){
                    this.mainData = r.fund_plan_by_fplid[0]
                }
                // console.log(this.mainData)
            }).catch(err=>{
                console.log(err)
            })
        }	
    },

    components:{Spinner,Flexbox,FlexboxItem,XButton,AlertModule}
}