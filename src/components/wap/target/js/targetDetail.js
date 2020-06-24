import {Flexbox, FlexboxItem, AlertModule, dateFormat,Spinner} from 'vux'
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
            let id=this.$route.params.targetId;
            if(id == undefined){
                AlertModule.show({
                    title: '亲~~',
                    content: '请勿瞎搞.',
                    onHide () {
                        window.location.replace(document.referrer)
                    }
                })
            }
            let dt = {
                "req": {"nid":id},
                "event_names": ["news_info_by_nid"]
            }
            this.$api.fetchPost('/sanic-api', dt).then(r=>{
                if(r.news_info_by_nid.length > 0){
                    this.mainData = r.news_info_by_nid[0]
                    this.mainData.inserttime = dateFormat(this.mainData.inserttime,'MM-DD HH:mm:ss')
                }else{
                    AlertModule.show({
                        title: '不好意思~~',
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
        Flexbox, FlexboxItem,AlertModule,Spinner
    }
}