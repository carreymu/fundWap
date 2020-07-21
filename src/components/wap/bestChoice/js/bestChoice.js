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
          "event_names": ["fund_plan_by_fpc_id"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.fund_plan_by_fpc_id!=undefined && r.fund_plan_by_fpc_id.length > 0){
            this.choiceList=r.fund_plan_by_fpc_id
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      fundTest(){
        this.showMsg=true
      },
      fundMemo(){
        this.showMsg=true
      },
      fundInvest(){
        this.showMsg=true
      },
    },
    components: {
      Tab,TabItem,XImg,XButton,Flexbox, FlexboxItem,Toast
    }
  }
