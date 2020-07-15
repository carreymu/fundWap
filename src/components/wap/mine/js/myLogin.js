import { Tabbar, TabbarItem ,XHeader,XButton,Group,Divider,XInput,Flexbox, FlexboxItem,Toast} from 'vux'
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
        showMsg:false,
      }
    },
    methods:{
      login(){
        console.log(this.uname)
        console.log(this.upwd)
      },
      onEnter(val){
        console.log('click enter!', val)
      },
      doShowToast () {
        this.showMsg=true
        // let flt = this.newsList.filter(x=>x.id==id)
        // if(flt.length>0){          
        //   this.dialogContent = flt[0].content
        // } else{
        //   this.dialogContent = '暂无信息'
        //   console.log('alter....')
        // }
        this.showDialogStyle=true
      }
    },
    components: {
      Flexbox, FlexboxItem,
      Tabbar,
      TabbarItem,
      XHeader,
      Group,
      Divider,
      XInput,
      XButton,
      Toast
    }
  }