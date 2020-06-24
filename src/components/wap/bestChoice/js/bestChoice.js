import { Tab, TabItem,XImg,XButton,Flexbox, FlexboxItem,Toast} from 'vux';

  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '优选基金')
      this.loadChoices();
    },
    data(){
      return{
        choiceList:[],
        showMsg:false,
       }
    },
    methods:{
      loadChoices(){
        let dt = {
          "req": {},
          "event_names": ["fund_plan_category","fund_plans"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.fund_plan_category!=undefined && r.fund_plan_category.length > 0
            && r.fund_plans!=undefined && r.fund_plans.length>0){
              this.choiceList=r.fund_plan_category
              for(var i=0;i<this.choiceList.length;i++){
                this.choiceList[i]['fund_plans']=r.fund_plans.filter(x=>x['fpc_id']==this.choiceList[i]['fpc_id'])
              }
          }
          // console.log(JSON.stringify(this.choiceList))
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
