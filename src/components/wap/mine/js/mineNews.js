import { Tabbar, TabbarItem ,XHeader,XButton,XDialog,Flexbox,FlexboxItem,TransferDomDirective as TransferDom } from 'vux'
  export default {
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '消息中心') 
    //   this.menuLists();
    },
    data(){
      return {
        dialogContent: '',
        showDialogStyle: false,

        newsList:[
          {
            id:1,
            title:"免费送您一张服务卡",
            dateTime:'04-30 18:30:01',
            content:'满足周五送卡条件,免费送您一张服务卡,有效期截止:2020-05-11。下周五满足条件将继续送卡,建议您低位跟投,规律跟投。满足周五送卡条件,免费送您一张服务卡,有效期截止:2020-05-11。下周五满足条件将继续送卡,建议您低位跟投,规律跟投。'
          },
          {
            id:2,
            title:"[大目标2018]达标止盈",
            dateTime:'04-29 18:30:01',
            content:'[大目标2018]今日(4月29日)达标止盈,运行46天,收益8.2%。这是上线以来帮大家赚到的第43个大目标。'
          },
        ],
      }
    },
    methods:{
      doShowToast (id) {
        let flt = this.newsList.filter(x=>x.id==id)
        if(flt.length>0){          
          this.dialogContent = flt[0].content
        } else{
          this.dialogContent = '暂无信息'
          console.log('alter....')
        }
        this.showDialogStyle=true
      }
    //   menuLists(){
    //     let self=this;
    //     this.baseAjax({
    //       url:'../../../static/basicData/mineMenu.json',
    //       showLoading:true,
    //       success:function(data){
    //           console.log(data)
    //           self.menuList=data.returnObject
    //           // console.log(self.urlList)
    //       }
    //     })
    //   },
    },
    directives: {
      TransferDom
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