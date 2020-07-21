import { Tabbar, TabbarItem ,XHeader,XButton, Flexbox, FlexboxItem } from 'vux'
  export default {
     /****** to do
     * 1. userid from storage
     *******/
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '大目标服务卡') 
      this.cardLists()
    },
    data(){
      return {
        uid:1,
        cards:[],
        unexps: [],
        sc:{0:"分享积得",1:"购买",2:"赠送",3:"免费领取",4:"友情援助"}
      }
    },
    methods:{
      cardLists(){
        if(this.$utcookie.getCookie("uid")==undefined){
          window.location = "#/fundWap/mylogin"
          return
        }
        let uid = parseInt(this.$utcookie.getCookie("uid"))
        let dt = {
          "req": {"uid":uid},
          "event_names": ["user_card_by_uid"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_card_by_uid!=undefined && r.user_card_by_uid.length>0){
            let exps = []
            r.user_card_by_uid.forEach(x=>{
              let days = this.$utdate.getDaysLong(new Date().getTime(),x['exp_date_end'],false)
              // console.log(days)
              x['sources']=this.sc[x['source']]
              x['exp_date_start']=this.$utdate.dateFmt(x['exp_date_start'],"yy年MM月dd日")
              x['exp_date_end']=this.$utdate.dateFmt(x['exp_date_end'],"yy年MM月dd日")
              x['diff_days']= days
              if(days<0){
                exps.push(x)
              }else{
                this.unexps.push(x)
              }
            })
            // console.log(exps)
            this.cards= this.unexps.concat(exps)
          }
          console.log(this.cards)
        })
      },
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      XButton,
      Flexbox,
      FlexboxItem
    }
  }