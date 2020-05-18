import {VChart, VLine, VTooltip, VGuide, VScale, Spinner,VAxis,Flexbox, FlexboxItem,
  Tab, TabItem, Swiper, SwiperItem, dateFormat, numberRandom,Card,XTable,Group,Cell, XButton} from 'vux'
// import formatStr from '@/utils/utstring'
export default {
  mounted() {
      this.loadLatest()
      // this.getTags()
    //   this.loadDetail()
      this.$store.commit('UPDATE_PAGE_TITLE', '汇添富中证主要消费ETF连接 <br/>000248') 
  },
  data(){      
      return {
        tabMap:[30,90,180,365,1095],
        stockList:["大目标收益率","大目标达标","上证综指涨跌幅"],
        // data: [],
        // allData: [],
        funcInfo:{},
        fundDailyData:[],
        index: 0,
          list2:['近1月', '近3月', '近6月', '近1年', '近3年'],
          selectIdx: 0,
          autoHeight:[420,420,420],
          itemList:[],
          chartData:{
              color:["#c32c1c","#ffd700","#99CCFF"],
              tag: [],
              alldata:[],
              data:[]},
              // 1 - 建仓中, 2 - 盈利中, 3 - 浮亏中, 4 - 已达标
          runStatus:{1:"建仓中",2 :"盈利中",3:"浮亏中", 4:"已达标"},
          targetListData:[],
          summary:"共发车{0}期,{1}期已达标5%~8%,平均运行{2}个月.投资年化回报18.49%.跑赢大盘19.66%以上。"
      }
  },
  methods:{
      getTags(){
          if(JSON.stringify(this.chartData) != '{}' && this.chartData.hasOwnProperty("data") && this.chartData.data.length > 0){
              // let tag_flt = this.chartData.data.filter(x=>x.stock_name=='大目标达标')
              // if(tag_flt.length > 0){
              //     for(var i=0;i<tag_flt.length;i++){
              //         this.chartData.tag.push({
              //             position:[tag_flt[i].date, tag_flt[i].value],
              //             html:'<div style="border:1px solid #c32c1c;background-color: #c32c1c;width: 3px;height: 3px;border-radius: 100%;"></div>'
              //         })
              //     }
              // }
              let threshold = 200
              let fstDone = []
              let leftStocks = []
              let ht = '<div style="border:1px solid #c32c1c;background-color:#fff;width:3px;height:3px;border-radius:50%;font-size:10px"></div>'
              let cd = this.chartData.data
              for(var i=0;i<cd.length;i++){
                //cd[i].value = cd[i].value+'e33'
                if(fstDone.length == 0){
                    fstDone.push({date:cd[i].date,stock_name:"大目标达标",value:cd[i].value})
                }
                if(cd[i].stock_name=='大目标收益率'){
                    // console.log(numberRandom(0,300))
                    if(numberRandom(0,300)>threshold){
                        this.chartData.tag.push({position:[cd[i].date, cd[i].value],html:ht})
                        leftStocks.push({date:cd[i].date,stock_name:"大目标达标",value:cd[i].value})
                    }
                }
                if(cd[i].stock_name!='大目标达标'){
                    leftStocks.push(cd[i])
                }
              }
              this.chartData.data = fstDone.concat(leftStocks)
          }
      },
      loadLatest(){
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
          for(var i=0;i<r.fund_worth_history_by_fid.length;i++){
            let dt = this.$utdate.dateFmt(r.fund_worth_history_by_fid[i].inserttime,"yyyy-MM-dd")
            let v = (r.fund_worth_history_by_fid[i].worth *100).toFixed(2)
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
        // console.log(this.fundList)
      })
      },
      loadDailyData(){
        let threshold = 200
        let ht = '<div style="border:1px solid #c32c1c;background-color:#fff;width:3px;height:3px;border-radius:50%;font-size:10px"></div>'
        var days = 1095
        var startDate = this.$utdate.addDate(new Date(),-days)
        var rndEnd = this.$utrandom.randomFullClose(0,4)
        var rndDaily = this.$utrandom.randomFullClose(0,3)
        for(var j=1;j<days;j+=5){
          let dt = this.$utdate.addDate(startDate,j)
          let fDate = this.fundDailyData.filter(x=>x.date==dt)
          let rnd = 0 
          if(fDate!=null && fDate.length>0){
            rnd = fDate[0].value
          }
          for(var i=0;i<this.stockList.length;i++){
            if(this.stockList[i]!="大目标达标"){
              rnd = parseFloat(this.$utrandom.randomFullOpen(0,rndEnd).toFixed(2))
              rndDaily = parseFloat(this.$utrandom.randomFullOpen(0,rndDaily).toFixed(2))
            }
            let d = {date: dt,stock_name: this.stockList[i],value: rnd, daily_change: rnd-rndDaily}
            if(this.chartData.alldata.length == 0){
              this.chartData.alldata.push(d)
            }else{
              if(numberRandom(0,300)>threshold){
                // console.log(numberRandom(0,300))
                this.chartData.tag.push({position:[dt, rnd],html:ht})
                this.chartData.alldata.push({date:dt,stock_name:"大目标达标",value:rnd, daily_change: rnd-rndDaily})
                i++
              }
              this.chartData.alldata.push(d)
            }
            if(j<this.tabMap[0]){
              this.chartData.data.push(d)
            }
          }
        }
        console.log(this.chartData.data)
      },
      onItemClick (index) {
          this.selectIdx = index
          // this.autoHeight = 120 * 3
          // console.log('on item click:', this.autoHeight)
          console.log('on item click:', this.selectIdx)
      },
      lblFx(text) {
          return {
              text: dateFormat(text,'MM-DD')
          }
      },
      lblFy(text) {
          return {
              text: text + '%'
          }
      },
  },
  components: {
      Flexbox, 
      FlexboxItem,
      Spinner,
      VChart,
      VLine,
      Tab, TabItem, Swiper, SwiperItem ,Card,
      VTooltip,
      VGuide,
      VScale,
      VAxis,
      XTable,
      Group,
      Cell,
      XButton
  }
}