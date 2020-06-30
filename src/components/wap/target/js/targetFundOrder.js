import { Tabbar, TabbarItem ,XHeader,XButton, VAxis, Spinner, dateFormat, Tab, TabItem,Swiper,SwiperItem,VChart, VTooltip, VLine, VScale} from 'vux'
export default {
  mounted() {
    this.$store.commit('UPDATE_PAGE_TITLE', '基金档案') 
    this.loadFundOrderData()
  },
  data(){
    return {
      tabMap:[30,90,180,365],
      dataList:['最近一月', '最近三月', '最近半年', '最近一年'],
      index: 0,
      lineColor:[
        [0, '#FE6384'],
        [1, '#db5361']
      ],
      data: [],
      allData: [],
      funcInfo:{},
      fundDailyData:[],
    }
  },
  methods:{
    lblFx(text) {return {text: dateFormat(text,'MM-DD')}},
    lblFy(text) {return {text: text + '%'}},
    loadFundOrderData(){
      let fid=this.$route.params.fid;
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
        "req": {"fids":fid,"fid":fid},
        "event_names": ["fund_info_short","fund_category","fund_manangers_list","fund_worth_history_by_fid"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        let fc_id = 0
        if(r.fund_info_short!=undefined && r.fund_info_short.length > 0){
          let flt = r.fund_info_short.filter(x=>x.status==1)
          if(flt.length > 0){
            this.funcInfo = flt[0]
            this.funcInfo['purchase_rate_new'] = (this.funcInfo['purchase_rate_new'] *100).toFixed(2)
            fc_id = this.funcInfo.fc_id
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
          this.funcInfo['worth']= (r.fund_worth_history_by_fid[0].worth *100).toFixed(2)
          this.funcInfo['daily_ratio']= r.fund_worth_history_by_fid[0].daily_ratio
          for(var i=0;i<r.fund_worth_history_by_fid.length;i++){
            this.fundDailyData.push({
              date:this.$utdate.dateFmt(r.fund_worth_history_by_fid[i].inserttime,"yyyy-MM-dd"), 
              value: (r.fund_worth_history_by_fid[i].worth *100).toFixed(2)
            })
          }
          // console.log(this.fundDailyData)
          this.loadDataOneYear()
        }
        // console.log(this.fundList)
      })
    },
    loadDataOneYear(){
      var days = 365
      var startDate = this.$utdate.addDate(new Date(),-days)
      var rndEnd = this.$utrandom.randomFullClose(0,4)
      for(var j=1;j<days;j++){
        let dt = this.$utdate.addDate(startDate,j)
        
        let fDate = this.fundDailyData.filter(x=>x.date==dt)
        let rnd = fDate!=null&& fDate.length>0?fDate[0].value:parseFloat(this.$utrandom.randomFullOpen(0,rndEnd).toFixed(2))
        let d = {date:dt, value: rnd}
        // console.log(d)
        this.allData.push(d)
        if(days-j<this.tabMap[0]){
          this.data.push(d)
        }
      }
      // console.log(this.data)
    },
    onItemClick (index) {
      let sDate = this.$utdate.addDate(new Date(),-this.tabMap[index])
      this.data = this.allData.filter(x=>x.date > sDate)
      // console.log(this.data)
    },
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    XButton,
    Spinner,
    Tab,
    TabItem,
    Swiper, 
    SwiperItem,
    VChart, 
    VTooltip, 
    VLine,
    VScale,
    VAxis
  }
}