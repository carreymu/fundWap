import { Tab, TabItem,XImg,XButton,Flexbox, FlexboxItem,Toast} from 'vux';

  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '优选基金')
      this.loadFunds();
    },
    data(){
      let self=this;
      let data={
        fundList:'',
        showMsg:false,
       }
      return data
    },
    methods:{
      loadFunds(){
        let self=this;
        this.baseAjax({
          url:'../../../static/basicData/bastChoice.json',
          showLoading:true,
          success:function(data){
            console.log(data)
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
