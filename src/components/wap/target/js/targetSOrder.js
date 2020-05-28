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
        amount:'',
        iconType:'',
        sched:false,
        isChecked: true,
      }
    },
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
        let fid=this.$route.query.fid
        this.sched=this.$route.query.sch || false
        if(fid == undefined){
          AlertModule.show({
              title: '亲~~',
              content: '请勿瞎搞.',
              onHide () {
                  window.location.replace(document.referrer)
              }
          })
        }
        let dt = {
          "req": {"uid":this.uid,"fid":fid,"sch":this.sched},
          "event_names": ["user_bank_wapper","fund_info"]
        }
        console.log(dt)
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          if(r.user_bank_wapper!=undefined && r.user_bank_wapper.length > 0){
            this.orderInfo=r.user_bank_wapper[0]
          }
          if(r.fund_info!=undefined && r.fund_info.length > 0){
            let f = r.fund_info[0]
            this.orderInfo['target_name']=f.fund_name+"("+f.fund_code+")"
            this.orderInfo['initial_amt']=f.initial_amt
            this.orderInfo['fee_ratio']=f.purchase_rate_new>0?(f.purchase_rate_new*100).toFixed(2):0
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