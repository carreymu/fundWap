import { Group,XHeader,XButton, Flexbox, FlexboxItem, XInput,CheckIcon,XTable,Popover,PopupPicker } from 'vux'
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
      this.initDateList();
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

        showPopupPicker:true,
        value: [],
        dateRange:[],
        format: function (value, name) {return `${value[0]} ${value[0]} ${value[1]}`}
      }
    },
    methods:{
      initDateList () {
        var myDate = new Date()
        let curDay = myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDay()
        let lastDay = myDate.getFullYear()+"-12-31"
        let days = this.$utdate.getDays(curDay,lastDay)
        let arr0 = []
        for(var j=1;j<days;j++){
          arr0.push(this.$utdate.addDate(myDate,j))
        }
        // console.log(arr0)
        let hours=[]
        let mints = []
        for(var i=0;i<24;i++){
          hours.push(i)
        }
        for(var i=0;i<60;i++){
          mints.push(i)
        }
        this.dateRange = [arr0,hours,mints]
      },
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
      Popover,
      PopupPicker
    }
  }