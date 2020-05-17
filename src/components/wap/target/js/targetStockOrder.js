import {VChart, VLine, VTooltip, VGuide, VScale, Spinner,VAxis,Flexbox, FlexboxItem,
  Tab, TabItem, Swiper, SwiperItem, dateFormat, numberRandom,Card,XTable,Group,Cell, XButton} from 'vux'
// import formatStr from '@/utils/utstring'
export default {
  mounted() {
      this.loadLatest()
      this.getTags()
    //   this.loadDetail()
      this.$store.commit('UPDATE_PAGE_TITLE', '汇添富中证主要消费ETF连接 <br/>000248') 
  },
  data(){      
      return {
        tabMap:[30,90,180,365,1095],
        stockList:["大目标达标","大目标收益率","上证综指涨跌幅"],
        data: [],
        allData: [],
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
              data:[
                  {"date":"2010-01-10","stock_name":"大目标达标","value":96.6},
                  {"date":"2010-01-10","stock_name":"大目标收益率","value":96.6},
                  {"date":"2010-01-10","stock_name":"上证综指涨跌幅","value":97.2},
                  // {"date":"2010-02-10","stock_name":"大目标达标","value":96.7},
                  {"date":"2010-02-10","stock_name":"大目标收益率","value":91.1},
                  {"date":"2010-02-10","stock_name":"上证综指涨跌幅","value":93.4},
                  // {"date":"2010-03-10","stock_name":"大目标达标","value":100.2},
                  {"date":"2010-03-10","stock_name":"大目标收益率","value":99.4},
                  {"date":"2010-03-10","stock_name":"上证综指涨跌幅","value":91.7},
                  // {"date":"2010-04-10","stock_name":"大目标达标","value":104.7},
                  {"date":"2010-04-10","stock_name":"大目标收益率","value":108.1},
                  {"date":"2010-04-10","stock_name":"上证综指涨跌幅","value":93.1},
                  // {"date":"2010-05-10","stock_name":"大目标达标","value":95.6},
                  {"date":"2010-05-10","stock_name":"大目标收益率","value":96},
                  {"date":"2010-05-10","stock_name":"上证综指涨跌幅","value":92.3},
                  // {"date":"2010-06-10","stock_name":"大目标达标","value":95.6},
                  {"date":"2010-06-10","stock_name":"大目标收益率","value":89.1},
                  {"date":"2010-06-10","stock_name":"上证综指涨跌幅","value":92.5},
                  // {"date":"2010-07-10","stock_name":"大目标达标","value":95.3},
                  {"date":"2010-07-10","stock_name":"大目标收益率","value":89.2},
                  {"date":"2010-07-10","stock_name":"上证综指涨跌幅","value":95.7},
                  {"date":"2010-08-10","stock_name":"大目标达标","value":96.1},
                  {"date":"2010-08-10","stock_name":"大目标收益率","value":97.6},
                  {"date":"2010-08-10","stock_name":"上证综指涨跌幅","value":99.9},
                  {"date":"2010-09-10","stock_name":"大目标达标","value":96.1},
                  {"date":"2010-09-10","stock_name":"大目标收益率","value":100.6},
                  {"date":"2010-09-10","stock_name":"上证综指涨跌幅","value":103.8},
                  {"date":"2010-10-10","stock_name":"大目标达标","value":101.6},
                  {"date":"2010-10-10","stock_name":"大目标收益率","value":108.3},
                  {"date":"2010-10-10","stock_name":"上证综指涨跌幅","value":108.9},
                  {"date":"2010-11-10","stock_name":"大目标达标","value":105.6},
                  {"date":"2010-11-10","stock_name":"大目标收益率","value":109.4},
                  {"date":"2010-11-10","stock_name":"上证综指涨跌幅","value":113.7},
                  {"date":"2010-12-10","stock_name":"大目标达标","value":112.7},
                  {"date":"2010-12-10","stock_name":"大目标收益率","value":114.5},
                  {"date":"2010-12-10","stock_name":"上证综指涨跌幅","value":118.8},
                  {"date":"2011-01-11","stock_name":"大目标达标","value":117},
                  {"date":"2011-01-11","stock_name":"大目标收益率","value":120.8},
                  {"date":"2011-01-11","stock_name":"上证综指涨跌幅","value":124.3},
                  {"date":"2011-02-11","stock_name":"大目标达标","value":121.8},
                  {"date":"2011-02-11","stock_name":"大目标收益率","value":125.8},
                  {"date":"2011-02-11","stock_name":"上证综指涨跌幅","value":130.1},
                  {"date":"2011-03-11","stock_name":"大目标达标","value":133.1},
                  {"date":"2011-03-11","stock_name":"大目标收益率","value":121.4},
                  {"date":"2011-03-11","stock_name":"上证综指涨跌幅","value":125.8},
                  {"date":"2011-04-11","stock_name":"大目标达标","value":141.9},
                  {"date":"2011-04-11","stock_name":"大目标收益率","value":124.3},
                  {"date":"2011-04-11","stock_name":"上证综指涨跌幅","value":127.4},
                  // {"date":"2011-05-11","stock_name":"大目标达标","value":133.1},
                  {"date":"2011-05-11","stock_name":"大目标收益率","value":118.5},
                  {"date":"2011-05-11","stock_name":"上证综指涨跌幅","value":123.9},
                  // {"date":"2011-06-11","stock_name":"大目标达标","value":131.2},
                  {"date":"2011-06-11","stock_name":"大目标收益率","value":117},
                  {"date":"2011-06-11","stock_name":"上证综指涨跌幅","value":123.2},
                  // {"date":"2011-07-11","stock_name":"大目标达标","value":133.7},
                  {"date":"2011-07-11","stock_name":"大目标收益率","value":121},
                  {"date":"2011-07-11","stock_name":"上证综指涨跌幅","value":122.6},
                  // {"date":"2011-08-11","stock_name":"大目标达标","value":125.2},
                  {"date":"2011-08-11","stock_name":"大目标收益率","value":114.8},
                  {"date":"2011-08-11","stock_name":"上证综指涨跌幅","value":123.2},
                  // {"date":"2011-09-11","stock_name":"大目标达标","value":125.5},
                  {"date":"2011-09-11","stock_name":"大目标收益率","value":109.1},
                  {"date":"2011-09-11","stock_name":"上证综指涨跌幅","value":121.6},
                  // {"date":"2011-10-11","stock_name":"大目标达标","value":124.2},
                  {"date":"2011-10-11","stock_name":"大目标收益率","value":98.4},
                  {"date":"2011-10-11","stock_name":"上证综指涨跌幅","value":115.6},
                  // {"date":"2011-11-11","stock_name":"大目标达标","value":129.4},
                  {"date":"2011-11-11","stock_name":"大目标收益率","value":95.8},
                  {"date":"2011-11-11","stock_name":"上证综指涨跌幅","value":112.2},
                  // {"date":"2011-12-11","stock_name":"大目标达标","value":128},
                  {"date":"2011-12-11","stock_name":"大目标收益率","value":95.1},
                  {"date":"2011-12-11","stock_name":"上证综指涨跌幅","value":109.1},
                  {"date":"2012-01-12","stock_name":"大目标达标","value":130.6},
                  {"date":"2012-01-12","stock_name":"大目标收益率","value":100.5},
                  {"date":"2012-01-12","stock_name":"上证综指涨跌幅","value":111},
                  // {"date":"2012-02-12","stock_name":"大目标达标","value":136.2},
                  {"date":"2012-02-12","stock_name":"大目标收益率","value":104},
                  {"date":"2012-02-12","stock_name":"上证综指涨跌幅","value":113.4},
                  {"date":"2012-03-12","stock_name":"大目标达标","value":141.2},
                  {"date":"2012-03-12","stock_name":"大目标收益率","value":103.5},
                  {"date":"2012-03-12","stock_name":"上证综指涨跌幅","value":114.6},
                  {"date":"2012-04-12","stock_name":"大目标达标","value":136.1},
                  {"date":"2012-04-12","stock_name":"大目标收益率","value":101},
                  {"date":"2012-04-12","stock_name":"上证综指涨跌幅","value":114.8},
                  {"date":"2012-05-12","stock_name":"大目标达标","value":126.3},
                  {"date":"2012-05-12","stock_name":"大目标收益率","value":96.6},
                  {"date":"2012-05-12","stock_name":"上证综指涨跌幅","value":113.1},
                  {"date":"2012-06-12","stock_name":"大目标达标","value":111.5},
                  {"date":"2012-06-12","stock_name":"大目标收益率","value":91.6},
                  {"date":"2012-06-12","stock_name":"上证综指涨跌幅","value":110.7},
                  {"date":"2012-07-12","stock_name":"大目标达标","value":118.6},
                  {"date":"2012-07-12","stock_name":"大目标收益率","value":91.2},
                  {"date":"2012-07-12","stock_name":"上证综指涨跌幅","value":118.7},
                  {"date":"2012-08-12","stock_name":"大目标达标","value":127.7},
                  {"date":"2012-08-12","stock_name":"大目标收益率","value":87.7},
                  {"date":"2012-08-12","stock_name":"上证综指涨跌幅","value":118.6},
                  {"date":"2012-09-12","stock_name":"大目标达标","value":128.5},
                  {"date":"2012-09-12","stock_name":"大目标收益率","value":93.6},
                  {"date":"2012-09-12","stock_name":"上证综指涨跌幅","value":118.5},
                  {"date":"2012-10-12","stock_name":"大目标达标","value":125.9},
                  {"date":"2012-10-12","stock_name":"大目标收益率","value":94},
                  {"date":"2012-10-12","stock_name":"上证综指涨跌幅","value":115.2},
                  {"date":"2012-11-12","stock_name":"大目标达标","value":124.1},
                  {"date":"2012-11-12","stock_name":"大目标收益率","value":92.4},
                  {"date":"2012-11-12","stock_name":"上证综指涨跌幅","value":113},
                  {"date":"2012-12-12","stock_name":"大目标达标","value":124.2},
                  {"date":"2012-12-12","stock_name":"大目标收益率","value":97.4},
                  {"date":"2012-12-12","stock_name":"上证综指涨跌幅","value":112.4},
                  {"date":"2013-01-13","stock_name":"大目标达标","value":128.4},
                  {"date":"2013-01-13","stock_name":"大目标收益率","value":100.3},
                  {"date":"2013-01-13","stock_name":"上证综指涨跌幅","value":111.5},
                  {"date":"2013-02-13","stock_name":"大目标达标","value":131.2},
                  {"date":"2013-02-13","stock_name":"大目标收益率","value":101.3},
                  {"date":"2013-02-13","stock_name":"上证综指涨跌幅","value":110.4},
                  {"date":"2013-03-13","stock_name":"大目标达标","value":126.2},
                  {"date":"2013-03-13","stock_name":"大目标收益率","value":94.5},
                  {"date":"2013-03-13","stock_name":"上证综指涨跌幅","value":108.4},
                  {"date":"2013-04-13","stock_name":"大目标达标","value":123.1},
                  {"date":"2013-04-13","stock_name":"大目标收益率","value":90.7},
                  {"date":"2013-04-13","stock_name":"上证综指涨跌幅","value":106},
                  {"date":"2013-05-13","stock_name":"大目标达标","value":123.2},
                  {"date":"2013-05-13","stock_name":"大目标收益率","value":88.3},
                  {"date":"2013-05-13","stock_name":"上证综指涨跌幅","value":108.1},
                  {"date":"2013-06-13","stock_name":"大目标达标","value":122.9},
                  {"date":"2013-06-13","stock_name":"大目标收益率","value":85.4},
                  {"date":"2013-06-13","stock_name":"上证综指涨跌幅","value":10}
              ]},
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
          this.funcInfo['worth']= (r.fund_worth_history_by_fid[0].worth *100).toFixed(2)
          this.funcInfo['daily_change']= r.fund_worth_history_by_fid[0].daily_change
          for(var i=0;i<r.fund_worth_history_by_fid.length;i++){
            this.fundDailyData.push({
              date:this.$utdate.dateFmt(r.fund_worth_history_by_fid[i].inserttime,"yyyy-MM-dd"), 
              value: (r.fund_worth_history_by_fid[i].worth *100).toFixed(2)
            })
          }
          this.loadDailyData()
        }
        // console.log(this.fundList)
      })
      },
      loadDailyData(){
        let threshold = 200
        let fstDone = []
        let leftStocks = []
        let ht = '<div style="border:1px solid #c32c1c;background-color:#fff;width:3px;height:3px;border-radius:50%;font-size:10px"></div>'

        var days = 365
        var startDate = this.$utdate.addDate(new Date(),-days)
        var rndEnd = this.$utrandom.randomFullClose(0,4)
        for(var j=1;j<days;j++){
          let dt = this.$utdate.addDate(startDate,j)
          let fDate = this.fundDailyData.filter(x=>x.date==dt)
          let rnd = fDate!=null && fDate.length>0?fDate[0].value:parseFloat(this.$utrandom.randomFullOpen(0,rndEnd).toFixed(2))
          for(var i=0;i<stockList.length;i++){
            let d = {"date": dt,"stock_name": stockList[i],"value": rnd}

            if(stockList[i].stock_name=='大目标收益率'){
                // console.log(numberRandom(0,300))
                if(numberRandom(0,300)>threshold){
                    this.chartData.tag.push({position:[dt, rnd],html:ht})
                    leftStocks.push({date:dt,stock_name:"大目标达标",value:rnd})
                }
            }
            if(stockList[i].stock_name!='大目标达标'){
                leftStocks.push(d)
            }

            this.allData.push(d)

            if(days-j<this.tabMap[0]){
              this.data.push(d)
            }
          }
        }
        console.log(this.allData)
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
              text: text / 100 + '%'
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