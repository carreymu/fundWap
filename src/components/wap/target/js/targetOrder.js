import { Group,XHeader,XButton, Flexbox, FlexboxItem, XInput,CheckIcon,XTable,Popover } from 'vux'
  export default {
    /****** to do
     * 1. userid from storage
     * 2. purchase threshold 3000 or 500 or 1000
     * 3. show my cards or not
     * 4. show start dealing date or not
     * 5. different fee ratio
     * 6. purchase threshold input box, float value only
     *  ******/
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '申购基金')
      this.loadOrder()
    },
    data(){
      return {
        uid:1,
        orderInfo:{},
        isChecked: true,
        amount:'',
        iconType:''
      }
    },
    // watch:{
    //     amount(newVal,oldVal){
    //         // console.log(newVal)
    //         // var reg = /^(\d{0,8})(\.(\d{0,2}))?$/g;
    //         // var reg = /^([\+ \-]?(([1-9]\d*)|(0)))([.]\d{0,2})?$/;
    //         var reg = /^(\d+|\d+\.\d{1,2})$/;
    //         console.log(reg.test(newVal))
    //         if(!reg.test(newVal)){
    //             if(newVal == ''){
    //                 this.amount = '';
    //                 return;
    //             }
    //             let val = oldVal;
    //             val = val.replace(/[^\d.]/g, ""); // 清除"数字"和"."以外的字符
    //             val = val.replace(/^\./g, ""); // 验证第一个字符是数字
    //             val = val.replace(/\.{2,}/g, "."); // 只保留第一个, 清除多余的
    //             val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    //             val = val.replace(/^(\d+|\d+\.\d{1,2})$/, '$1$2.$2'); // 只能输入三个小数
    //             this.iconType = 'error'
    //             this.amount = val
    //         }else{
    //             let val = newVal;
    //             val = val.replace(/[^\d.]/g, ""); // 清除"数字"和"."以外的字符
    //             val = val.replace(/^\./g, ""); // 验证第一个字符是数字
    //             val = val.replace(/\.{2,}/g, "."); // 只保留第一个, 清除多余的
    //             val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    //             val = val.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$2'); // 只能输入三个小数
    //             this.amount = val;
    //             this.iconType = ''
    //         }
    //     }
    // },
    methods:{
      change (val) {
        var reg = /^(\d+|\d+\.\d{1,2})$/
        if(reg.test(val)){
          this.amount = val
          this.iconType = ''
        } else{
          this.amount = val.slice(0,val.length-1)
          this.iconType = 'error'
        }
        console.log('on change', this.amount)
      },
      loadOrder(){
        let tid=this.$route.query.tid
        if(tid == undefined){
          AlertModule.show({
              title: '亲~~',
              content: '请勿瞎搞.',
              onHide () {
                  window.location.replace(document.referrer)
              }
          })
        }
        let dt = {
          "req": {"uid":this.uid,"tid":tid},
          "event_names": ["user_bank_wapper","user_card_cnt_uid","targets_by_tid"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_bank_wapper!=undefined && r.user_bank_wapper.length > 0){
            this.orderInfo=r.user_bank_wapper[0]
          }
          if(r.targets_by_tid!=undefined && r.targets_by_tid.length>0){
            // console.log(this.$utdate.dateFmt(r.targets_by_tid[0].apply_endtime,'yyyy-MM-dd'))
            let overdate = this.$utdate.getDaysLong(r.targets_by_tid[0].apply_endtime,(new Date()).getTime(),false)
            console.log(overdate)
            if(overdate>0){
              console.log('过期了要写提示>>>>>>>>>>>>>>>>>>>>')
            }
            this.orderInfo['fee_ratio']=(r.targets_by_tid[0]['fee_ratio']*100).toFixed(2)
            this.orderInfo['target_name']='大目标'+r.targets_by_tid[0]['name']
            this.orderInfo['init_amt']=r.targets_by_tid[0]['init_amt']
          }
          if(r.user_card_cnt_uid!=undefined && r.user_card_cnt_uid.length>0){
            let cnt = r.user_card_cnt_uid[0]['cnt']
            this.orderInfo['card_cnt'] = cnt-1<0?0:cnt-1
          }
          let d=this.$utdate.workdays("MM-dd")
          this.orderInfo['startDate']=d.startDate
          this.orderInfo['endDate']=d.endDate
          this.orderInfo['weekday']=d.weekday
          console.log(this.orderInfo)
        })
      },
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