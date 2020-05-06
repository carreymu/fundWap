import {Spinner} from 'vux'
export default{
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '详情');
        this.loadDetail();	      
    },
    data(){
        return {
            singleData:{}
        }
    },
    methods:{
        loadDetail(){
            let id=this.$route.query.sid;
            if(id == undefined){
                AlertModule.show({
                    title: '亲~~',
                    content: '请勿瞎搞.',
                    onHide () {
                        window.location.replace(document.referrer)
                    }
                })
            }
            let dt = {"req": {"sid":id},"event_names": ["system_info_by_id"]}
            this.$api.fetchPost('/sanic-api', dt).then(r=>{
                if(r.system_info_by_id!=undefined && r.system_info_by_id.length > 0){
                    this.singleData = r.system_info_by_id[0]
                }else{
                    AlertModule.show({
                        title: '不好意思',
                        content: '没找到你要的信息.',
                        onHide () {
                          window.history.go(-1)
                        }
                    })
                }
                // console.log(this.mainData)
            }).catch(err=>{
                console.log(err)
            })
        }	
    },

    components:{
        Spinner
    }
}