import { Tabbar, TabbarItem ,XHeader,XButton,Group,Divider,XInput,AlertModule,Toast} from 'vux'
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
        let dt = {
          "req": {"uname":this.uname,"upwd":this.upwd},
          "event_names": ["user_detail_checkres"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_detail_checkres!=undefined && r.user_detail_checkres.length>0){
            this.userDetailRes=r.user_detail_checkres[0]
            this.$utcookie.setCookie("token",this.userDetailRes.token);//缓存token
            this.$store.commit("TOKEN",this.userDetailRes.token);
            console.log(this.$store.getters.token)
            window.location = "#/fundWap/mine"
          } else {
            AlertModule.show({
              title: '亲~~',
              content: '用户名或密码错误.',
              onHide () {
                  window.location.replace(document.referrer)
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