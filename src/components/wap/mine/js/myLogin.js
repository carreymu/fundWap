import { Tabbar, TabbarItem ,XHeader,XButton,Group,Divider,XInput,AlertModule,Toast} from 'vux'
  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '登录中心')
      this.loading()
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
      loading(){
        if(this.$utcookie.getCookie("token")!=undefined && this.$utcookie.getCookie("token")!=''){
          window.location = "#/fundWap/mine"
        }
      },
      login(){
        let dt = {
          "req": {"uname":this.uname,"upwd":this.upwd},
          "event_names": ["user_detail_checkres"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_detail_checkres!=undefined && r.user_detail_checkres.length>0){
            // MUST: set cookie and check cookie from backend,
            // operat cookie with js is A DEMO!!!
            this.userDetailRes=r.user_detail_checkres[0]
            //cache token
            this.$utcookie.setCookie("token", this.userDetailRes.token, 30);
            this.$utcookie.setCookie("uid", this.userDetailRes.uid, 30);
            console.log(this.$utcookie.getCookie("token"))
            console.log(this.$utcookie.getCookie("uid"))
            // this.$store.commit("TOKEN",this.userDetailRes.token);
            // console.log(this.$store.getters.token)
            window.location = "#/fundWap/mine"
          } else {
            AlertModule.show({
              title: '亲~~',
              content: '用户名或密码错误,请重试.',
              onHide () {
                  //window.location.replace(document.referrer)
                  this.uname = this.upwd = ''
                  this.$router.push({path:'/'})
                  // window.location = "#/fundWap/mylogin"
              }
            })
          }
        })
      },
      onEnter(val){
        // console.log('click enter!', val)
        login()
      },
      doShowToast(txt) {
        this.showMsg=true
        this.dialogContent = txt
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      Group,
      Divider,
      XInput,
      XButton,
      AlertModule,
      Toast
    }
  }