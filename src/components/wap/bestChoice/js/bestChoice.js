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
