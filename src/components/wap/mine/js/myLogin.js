import { Tabbar, TabbarItem ,XHeader,XButton,Group,Divider,XInput,Flexbox, FlexboxItem,Toast} from 'vux'
  export default {
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '登录中心') 
    //   this.menuLists();
    },
    data(){
      return {
        dialogContent: '',
        userDetailRes: {},
        uname:'',
        upwd: '',
        showMsg:false,
      }
    },
    methods:{
      login(){
        console.log(this.uname)
        console.log(this.upwd)
        let dt = {
          "req": {"uname":this.uname,"upwd":this.upwd},
          "event_names": ["user_detail_checkres"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_detail_checkres!=undefined && r.user_detail_checkres.length>0){
            this.userDetailRes=r.user_detail_checkres
          } else {
            //username or pws error

          }
        })
      },
      onEnter(val){
        console.log('click enter!', val)
      },
      doShowToast(txt) {
        this.showMsg=true
        this.dialogContent = txt
        // let flt = this.newsList.filter(x=>x.id==id)
        // if(flt.length>0){          
        //   this.dialogContent = flt[0].content
        // } else{
        //   this.dialogContent = '暂无信息'
        //   console.log('alter....')
        // }
        // this.showDialogStyle=true
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