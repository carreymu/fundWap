import { Tab, TabItem,XImg,XButton,Flexbox, FlexboxItem,Toast} from 'vux';

  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '优选基金')
      this.loadChoices();
    },
    data(){
      return{
        fundList:[],
        choiceList:[],
        fundCategoryList:[],
        showMsg:false,
       }
    },
    methods:{
      loadChoices(){
        let self=this;
        this.baseAjax({
          url:'../../../static/basicData/bestChoice.json',
          showLoading:true,
          success:function(data){
            self.fundList=data.returnObject;
          }
        })

        let dt = {
          "req": {"scids":"7,8","topx":2,"nc_id":2},
          "event_names": ["fund_plan_category","fund_plan_by_fpcid"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.news_info_topx_by_ncid.length > 0){
            let news_list = r.news_info_topx_by_ncid
            for(var i = 0 ;i<news_list.length; i++){
              news_list[i].inserttime = dateFormat(news_list[i].inserttime,"MM-DD HH:mm:ss")
              this.newsList.push(news_list[i])
            }
          }
          if(r.system_info.length > 0){
            this.drumstickList = r.system_info.filter(x=>x.scid==this.sysFlag.drumstick && x.status == 1)
            let sy = r.system_info.filter(x=>x.scid==this.sysFlag.drumstickInfo)
            if(sy.length > 0){
              this.drumstickInfo = sy[0]
              let sbt =eval("(" + this.drumstickInfo.subtitle + ")")
              this.drumstickInfoSub = sbt
            }
          }
          // console.log(this.news2List)
        }).catch(err=>{
          console.log(err)
        })
      },
      fundTest(){
        this.showMsg=true;
      },
      fundMemo(){
        this.showMsg=true;
      },
      fundInvest(){
        this.showMsg=true;
      },
    },
    components: {
      Tab,TabItem,XImg,XButton,Flexbox, FlexboxItem,Toast
    }
  }
