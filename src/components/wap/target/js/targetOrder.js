import { Group,XHeader,XButton, Flexbox, FlexboxItem, XInput,CheckIcon,XTable,Popover } from 'vux'
  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '申购基金') 
    },
    data(){
      return {
        demo2: true,
        amount:'',
        iconType:''
      }
    },

    watch:{
        amount(newVal,oldVal){
            console.log(newVal)
            // var reg = /^(\d{0,8})(\.(\d{0,2}))?$/g;
            var reg = /^([\+ \-]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
            if(!reg.test(newVal)){
                if(newVal == ''){
                    this.amount = '';
                    return;
                }
                let val = oldVal;
                val = val.replace(/[^\d.]/g, ""); // 清除"数字"和"."以外的字符
                val = val.replace(/^\./g, ""); // 验证第一个字符是数字
                val = val.replace(/\.{2,}/g, "."); // 只保留第一个, 清除多余的
                val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                val = val.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3'); // 只能输入三个小数
                this.iconType = 'error'
                this.amount = val
            }else{
                let val = newVal;
                val = val.replace(/[^\d.]/g, ""); // 清除"数字"和"."以外的字符
                val = val.replace(/^\./g, ""); // 验证第一个字符是数字
                val = val.replace(/\.{2,}/g, "."); // 只保留第一个, 清除多余的
                val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                val = val.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3'); // 只能输入三个小数
                this.amount = val;
                this.iconType = ''
            }
        }
    },
    methods:{
      // loadFundDetail(){
      //   // let cid=this.$route.params.cid;
      //   this.baseAjax({
      //     url:'../../../static/basicData/choiceDetail.json',
      //     showLoading:true,
      //     // params:{cid:cid},
      //     success:function(data){
      //       // var myDate = new Date();
      //       // let mytime=myDate.toLocaleTimeString();
      //       // console.log(mytime)
      //       let arr=[]
      //       let ro = data.returnObject[0].funds
      //       for(var i=0;i<ro.length;i++){
      //         arr=arr.concat(ro[i].fundsList)
      //       }
      //       this.fundList=arr
      //       console.log(this.fundList.length)
      //       console.log(this.fundList)
      //     }
      //   })
      // },
      processButton001 () {
        console.log('click me')
      }
    },
    components: {
      Group,
      XHeader,
      XButton,
      Flexbox, 
      FlexboxItem,
      XInput,
      CheckIcon,
      XTable,
      Popover
    }
  }