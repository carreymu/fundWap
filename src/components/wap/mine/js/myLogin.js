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
        console.log(this.$store.getters)
        this.$store.commit("TOKEN",this.userDetailRes.username);
        console.log(this.$store.getters)

        let dt = {
          "req": {"uname":this.uname,"upwd":this.upwd},
          "event_names": ["user_detail_checkres"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_detail_checkres!=undefined && r.user_detail_checkres.length>0){
            this.userDetailRes=r.user_detail_checkres[0]
            this.$store.commit("Token",this.userDetailRes.username);
            // Cookies.set('Token', this.userDetailRes.token) //登录成功后将token存储在cookie之中
            // commit('SET_TOKEN', data.token)
          } else {
            //username or pwd error
            
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