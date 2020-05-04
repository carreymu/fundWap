import { Tabbar, TabbarItem ,XHeader,XButton, VAxis, Spinner, Tab, TabItem,Swiper,SwiperItem,VChart, VTooltip, VLine, VScale} from 'vux'
export default {
  mounted() {
    this.$store.commit('UPDATE_PAGE_TITLE', '基金档案') 
    this.loadDataOneYear()
    // this.loadFundDetail()
  },
  data(){
    return {
      tabMap:[30,90,180,365],
      list2:['最近一月', '最近三月', '最近半年', '最近一年'],
      index: 0,
      lineColor:[
        [0, '#FE6384'],
        [1, '#db5361']
      ],
      data: [],
      allData: [],
    }
  },
  methods:{
    // loadFundDetail(){
    //   let cid=this.$route.params.cid;
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
    labelFormat(text) {
      return {
        text: text + '%'
      }
    },
    loadDataOneYear(){
      var days = 365
      var startDate = this.$utdate.addDate(new Date(),-days)
      var rndEnd = this.$utrandom.randomFullClose(0,4)
      for(var j=1;j<days;j++){
        let dt = this.$utdate.addDate(startDate,j)
        let rnd = parseFloat(this.$utrandom.randomFullOpen(0,rndEnd).toFixed(2))
        let d = {date:dt, value: rnd}
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