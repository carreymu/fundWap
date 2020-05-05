import {Flexbox, FlexboxItem,Spinner,dateFormat,AlertModule } from 'vux'
export default {
    mounted() {
        this.loadLatestNews()
    },
    data(){      
      return {
        newsList:[],
      }
    },
    methods:{
      loadLatestNews(){
        let ncid=this.$route.params.ncid;
        if(ncid == undefined){
          AlertModule.show({
              title: '亲~~',
              content: '请勿瞎搞.',
              onHide () {
                  window.location.replace(document.referrer)
              }
          })
        }
        let dt = {
          "req": {"topx":20,"nc_id":ncid},
          "event_names": ["news_info_topx_by_ncid","news_category"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.news_info_topx_by_ncid.length > 0){
            let news_list = r.news_info_topx_by_ncid
            for(var i = 0 ;i<news_list.length; i++){
              news_list[i].inserttime = dateFormat(news_list[i].inserttime,"MM-DD HH:mm:ss")
              this.newsList.push(news_list[i])
            }
          }else{
            AlertModule.show({
                title: '不好意思~~',
                content: '没找到你要的信息.',
                onHide () {
                  window.history.go(-1)
                }
            })
        }
          // console.log(r.news_category)
          if(r.news_category.length>0){
            this.$store.commit('UPDATE_PAGE_TITLE', r.news_category[0].category_name) 
          }
          // console.log(this.news2List)
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    components: {
        Flexbox, 
        FlexboxItem,
        Spinner,
        AlertModule
    }
}