import { Tabbar, TabbarItem ,XHeader,XButton,XDialog,Flexbox,FlexboxItem } from 'vux'
  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '消息中心') 
      this.newsLists()
    },
    data(){
      return {
        dialogContent: '',
        showDialogStyle: false,
        newsList:[],
      }
    },
    methods:{
      doShowToast (id) {
        if(this.$utcookie.getCookie("uid")==undefined){
          window.location = "#/fundWap/mylogin"
          return
        }
        let uid = parseInt(this.$utcookie.getCookie("uid"))
        let flt = this.newsList.filter(x=>x.uni_id==id)
        if(flt.length > 0){          
          this.dialogContent = flt[0].content
          let dt = {
            "req": {"uid":uid, "uni_id":id},
            "event_names": ["user_news_info_read"]
          }
          this.$api.fetchPost('/sanic-api', dt).then(r=>{
            if(r.update_user_news_info_read!=undefined && r.update_user_news_info_read.length>0){
              this.newsList=r.update_user_news_info_read
            }
          })
        } else {
          this.dialogContent = '暂无信息'
          console.log('alter....')
        }
        this.showDialogStyle=true
      },
      newsLists(){
        if(this.$utcookie.getCookie("uid")==undefined){
          window.location = "#/fundWap/mylogin"
          return
        }
        let uid = parseInt(this.$utcookie.getCookie("uid"))
        let dt = {
          "req": {"uid":uid},
          "event_names": ["user_news_info_list"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_news_info_list!=undefined && r.user_news_info_list.length>0){
            this.newsList=r.user_news_info_list
            this.newsList.map(x=>x.inserttime=this.$utdate.dateFmt(x.inserttime,"yy/MM/dd"))
          }
        })
      },
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      XButton,
      XDialog,
      Flexbox,
      FlexboxItem
    }
  }