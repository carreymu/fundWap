import { Tabbar, TabbarItem ,XHeader,XButton,XDialog, Group,Divider,XInput} from 'vux'
  export default {
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '登录中心') 
    //   this.menuLists();
    },
    data(){
      return {
        dialogContent: '',
        showDialogStyle: false,
        uname:'',
        upwd: '',
      }
    },
    methods:{
      login(){
        console.log(this.uname)
        console.log(this.upwd)
      },
      doShowToast (id) {
        // let flt = this.newsList.filter(x=>x.id==id)
        // if(flt.length>0){          
        //   this.dialogContent = flt[0].content
        // } else{
        //   this.dialogContent = '暂无信息'
        //   console.log('alter....')
        // }
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
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      Group,
      Divider,
      XInput,
      XButton,
      XDialog
    }
  }