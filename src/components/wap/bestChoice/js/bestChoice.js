import { Tab, TabItem,XImg,XButton,Flexbox, FlexboxItem,Toast} from 'vux';

  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '优选基金')
      this.loadFunds();
    },
    data(){
      let self=this;
      let data={
        fundList:[],
        choiceList:[],
        fundCategoryList:[],
        showMsg:false,
       }
      return data
    },
    methods:{
      loadFunds(){
        // this.loadfundCategory();
        this.loadChoices();
        // this.choiceList.array.forEach(e => {
        //   let flt = this.fundCategoryList.filter(x=>x.caid==e.caid && x.status==1);
        //   if(flt.length>0){
        //     e['catetoryName']=flt[0].catetoryName
        //     this.fundList.push(e);
        //   }
        // });
      },
      loadChoices(){
        let self=this;
        this.baseAjax({
          url:'../../../static/basicData/bestChoice.json',
          showLoading:true,
          success:function(data){
            console.log(data)
            self.fundList=data.returnObject;
            // console.log(typeof(self.fundList.keys))
            // if(self.fundList.list){
            //   self.fundList.array.forEach(e => {
            //     console.log("sdfsfsdf")
            //   });
            // }
          }
        })
      },
      loadfundCategory(){
        let self=this;
        this.baseAjax({
          url:'../../../static/basicData/fundCategory.json',
          showLoading:true,
          success:function(data){
            console.log(data)
            self.fundCategoryList=data.returnObject;
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
