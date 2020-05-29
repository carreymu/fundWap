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

        freqVal: [],
        freqList: [],
        list3: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'USA',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        }, {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        }],
        value4: [],
      }
    },
    methods:{
      initDateList () {
        let parents = {'每周':'1','每两周':'2','每月':'3'}
        let rang1={'周一':'1','周二':'2','周三':'3','周四':'4','周五':'5'}
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
              this.freqList.push({name: i+'日',value: i,parent: parents[key]})
            }
          }
        }
        console.log(this.freqList)
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