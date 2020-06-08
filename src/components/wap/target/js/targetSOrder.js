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

        freqVal: [],
        freqList: [],
      }
    },
    methods:{
      initDateList () {
        let parents = {'每周':'m1','每两周':'m2','每月':'m3'}
        let rang1={'周一':'w1','周二':'w2','周三':'w3','周四':'w4','周五':'w5'}
        var msg = ""; 
        for(var key in parents) {
          if(key.indexOf('周')>0){
            this.freqList.push({name: key,value: parents[key],parent: 0})
            for(var k in rang1){
              this.freqList.push({name: k,value: rang1[k],parent: parents[key]})
            }
          }else{
            this.freqList.push({name: key,value: parents[key],parent: 0})
            for(var i=1;i<29;i++){
              this.freqList.push({name: i+'日',value: i+'',parent: parents[key]})
            }
          }
        }
        console.log(JSON.stringify(this.freqList))
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
        //single stock
        let fid=this.$route.query.fid
        //every choice(every fund plan)
        let cid = this.$route.query.cid
        this.sched=this.$route.query.sch || false
        if(fid == undefined && cid == undefined){
          AlertModule.show({
              title: '亲~~',
              content: '请勿瞎搞.',
              onHide () {
                  window.location.replace(document.referrer)
              }
          })
        }
        if(this.sched){
          this.initDateList()
        }
        if(fid!=undefined){
          let dt = {
            "req": {"uid":this.uid,"fid":fid,"sch":this.sched},
            "event_names": ["user_bank_wapper","fund_info"]
          }
          // console.log(dt)
          this.$api.fetchPost('/sanic-api', dt).then(r=>{
            if(r.user_bank_wapper!=undefined && r.user_bank_wapper.length > 0){
              this.orderInfo=r.user_bank_wapper[0]
            }
            if(r.fund_info!=undefined && r.fund_info.length > 0){
              let f = r.fund_info[0]
              this.orderInfo['target_name']=f.fund_name+"("+f.fund_code+")"
              this.orderInfo['init_amt']=this.sched?f.sched_init_amt:f.init_amt
              this.orderInfo['fee_ratio']=f.purchase_rate_new>0?(f.purchase_rate_new*100).toFixed(2):0
              this.$store.commit('UPDATE_PAGE_TITLE', this.orderInfo['target_name'])
            }
            let d=this.$utdate.workdays("MM-dd")
            this.orderInfo['startDate']=d.startDate
            this.orderInfo['endDate']=d.endDate
            this.orderInfo['weekday']=d.weekday
            console.log(this.orderInfo)
          })
        }
        if(cid != undefined){
          let dt = {
            "req":{"uid":this.uid, "fpl_id":cid, "sch":this.sched},
            "event_names":["user_bank_wapper","fund_plan_by_fplid"]
          }
          this.$api.fetchPost('/sanic-api', dt).then(r=>{
            if(r.user_bank_wapper!=undefined && r.user_bank_wapper.length > 0){
              this.orderInfo=r.user_bank_wapper[0]
            }
            if(r.fund_plan_by_fplid!=undefined && r.fund_plan_by_fplid.length > 0){
              let f = r.fund_plan_by_fplid[0]
              this.orderInfo['target_name']=f.name
              this.orderInfo['init_amt']=this.sched?f.sched_init_amt:f.init_amt
              this.orderInfo['fee_ratio']=f.purchase_rate_new>0?(f.purchase_rate_new*100).toFixed(2):0
              this.$store.commit('UPDATE_PAGE_TITLE', f.name)
            }
            let d=this.$utdate.workdays("MM-dd")
            this.orderInfo['startDate']=d.startDate
            this.orderInfo['endDate']=d.endDate
            this.orderInfo['weekday']=d.weekday
            console.log(this.orderInfo)
          })
        }
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