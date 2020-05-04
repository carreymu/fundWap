import {Flexbox, FlexboxItem,Spinner,dateFormat } from 'vux'
export default {
    mounted() {
        this.loadLatestNews()     
        this.$store.commit('UPDATE_PAGE_TITLE', '[大目标]投资面对面') 
    },
    data(){      
        return {
            newsList:[],
        }
    },
    methods:{
        loadLatestNews(){
            let dt = {
                "req": {"topx":20,"nc_id":1},
                "event_names": ["news_info_topx_by_ncid"]
              }
              this.$api.fetchPost('/sanic-api', dt).then(r=>{
                if(r.news_info_topx_by_ncid.length > 0){
                  let news_list = r.news_info_topx_by_ncid
                  for(var i = 0 ;i<news_list.length; i++){
                    news_list[i].inserttime = dateFormat(news_list[i].inserttime,"MM-DD HH:mm:ss")
                    this.newsList.push(news_list[i])
                  }
                }
                // console.log(this.news2List)
                // console.log(this.top3FundList)
              }).catch(err=>{
                console.log(err)
              })
        }
    },
    components: {
        Flexbox, 
        FlexboxItem,
        Spinner
    }
}