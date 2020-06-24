import {Spinner,AlertModule } from 'vux'
export default{
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', this.$route.query.title);
        this.loadDetail();	      
    },
    data(){
        return {
            arrData:[],
            arrTitle:''
        }
    },
    methods:{
        loadDetail(){
            let id=this.$route.query.scid;
            if(id == undefined){
                AlertModule.show({
                    title: '亲~~',
                    content: '请勿瞎搞.',
                    onHide () {
                        window.location.replace(document.referrer)
                    }
                })
            }
            let dt = {"req": {"scids":id},"event_names": ["system_info"]}
            this.$api.fetchPost('/sanic-api', dt).then(r=>{
                if(r.system_info!=undefined && r.system_info.length > 0){
                    this.arrTitle = this.$route.query.title
                    this.arrData = r.system_info
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
        Spinner,AlertModule 
    }
}