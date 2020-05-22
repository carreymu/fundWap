import { Group,XHeader,XButton, Flexbox, FlexboxItem, XInput,CheckIcon,XTable,Popover } from 'vux'
  export default {
    /****** serid comes from storage ******/
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '申购基金')
      this.loadOrder()
    },
    data(){
      return {
        uid:1,
        orderInfo:{},
        demo2: true,
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
        let tid=this.$route.params.tid;
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
          "req": {"uid":this.uid},
          "event_names": ["user_bank_wapper","user_card_cnt_uid"]
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          let fc_id = 0
          if(r.fund_info_short!=undefined && r.fund_info_short.length > 0){
            let flt = r.fund_info_short.filter(x=>x.status==1)
            if(flt.length > 0){
              this.funcInfo = flt[0]
              this.funcInfo['purchase_rate_new'] = (this.funcInfo['purchase_rate_new'] *100).toFixed(2)
              fc_id = this.funcInfo.fc_id
              this.$store.commit('UPDATE_PAGE_TITLE', this.funcInfo.fund_name+"("+ this.funcInfo.fund_code +")")
            }
          }
          if(r.fund_category!=undefined && r.fund_category.length>0){
            let flt = r.fund_category.filter(x=>x.fc_id ==fc_id)
            if(flt.length>0){
              this.funcInfo['fund_tot'] = flt[0].fund_tot
              this.funcInfo['cat_name'] = flt[0].name
            }
          }
          if(r.fund_manangers_list!=undefined && r.fund_manangers_list.length>0){
            this.funcInfo['managers']=r.fund_manangers_list.map(x=>x.name).join()
          }
          if(r.fund_worth_history_by_fid!=undefined && r.fund_worth_history_by_fid.length>0){
            for(var i=0;i<r.fund_worth_history_by_fid.length;i++){
              let dt = this.$utdate.dateFmt(r.fund_worth_history_by_fid[i].inserttime,"yyyy-MM-dd")
              let v = (r.fund_worth_history_by_fid[i].worth *100).toFixed(4)
              let cg = r.fund_worth_history_by_fid[0].daily_change
              if(i == 0){
                this.funcInfo['date'] = dt
                this.funcInfo['value']= v
                this.funcInfo['daily_change']= cg
              }
              this.fundDailyData.push({date:dt, value: v,daily_change:cg})
            }
            this.loadDailyData()
          }
          if(r.fund_worth_history_stage_by_fid!=undefined && r.fund_worth_history_stage_by_fid.length>0){
            //one week,three months,one year
            this.fundWorthStage = r.fund_worth_history_stage_by_fid.filter(x=>[7,90,365].includes(x.stage))
            for(var i=0;i<this.fundWorthStage.length;i++){
              // console.log(this.fundWorthStage[i])
              this.fundWorthStage[i]['stages']=this.stageMap[this.fundWorthStage[i].stage]
              this.fundWorthStage[i]['worth']=(this.fundWorthStage[i].worth *100).toFixed(2)
            }
            // console.log(this.fundWorthStage)
          }
          if(r.system_info_by_id!=undefined&&r.system_info_by_id.length>0){
            this.funcInfo['notice']=r.system_info_by_id[0].content
          }
          // console.log(this.fundList)
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