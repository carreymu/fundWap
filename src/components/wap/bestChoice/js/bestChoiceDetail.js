
import { Tab,TabItem,XButton,Swiper,SwiperItem,Flexbox,FlexboxItem,XDialog,Group,Cell,VChart, VLine, VAxis, 
	VTooltip,VArea,VLegend, VBar, VPie, VGuide, VScale} from 'vux';
const map = {}
export default {
	mounted(){
		this.loadDetail()
		this.$store.commit('UPDATE_PAGE_TITLE', '数据传输中');
	},
	computed:{
		/*init vchart data*/
	},
	data(){		
		return {
			cid:0,
			map,
			mainData:{},
			dtmap:{1:1,3:3,6:6,12:12,36:36},//month:dot step
			chartData:[],
			index: 0,
			month: 1,
			htmlOptions: {
				position: [ '50%', '45%' ],
				html: `<div style="width: 250px;height: 40px;text-align: center;">
				  <div style="font-size: 16px">投资组合</div>
				  </div>`
			},
			legendOptions: {
				position: 'right',
				itemFormatter (val) {
				  return val + '  ' + map[val]
				}
			},
			yOptions: {formatter (val) {return val * 100 + '%'}},
			data:[{ name: "量化派", percent: 56.59 },
				{ name: "成长型", percent: 20.17},
				{ name: "价值型", percent: 23.24}
			],
			circleColors:[]
		};
	},
	methods:{
		lblFy(text) {return {text: text + '%'}},
		fltIdx(idx,month){
			this.index=idx
			this.month=month
			console.log('month:'+month)
			console.log('tab:'+this.index)
			this.loadChartData(month)
		},
		loadDetail(){
			if(this.$utcookie.getCookie("uid")==undefined){
				window.location = "#/fundWap/mylogin"
				return
			}
			//init map
			this.data.map(obj => {this.map[obj.name] = obj.percent + '%'})			
			/*
				1.fund_plan_by_fplid.fplid->fund_plan_by_fplid.fpl_id
				2.fund_plan_by_fplid.fpl_id->fund_plan_details.fpl_id->fund_plan_details.fid
				3.fund_plan_details.fid->fund_info.fid->fund_info.fcc_id
				4.fund_info.fcc_id->fund_customized_category.fcc_id
			*/
			this.cid=this.$route.params.cid
			let uid = parseInt(this.$utcookie.getCookie("uid"))
			let dt = {
				"req": {"uid":uid,"fpl_id":this.cid,"sid":19},
				"event_names": ["fund_plan_list","system_info_by_id"]
			}
			this.$api.fetchPost('/sanic-api', dt).then(r=>{
			if(r.fund_plan_list!=undefined && r.fund_plan_list.length > 0){
				this.mainData=r.fund_plan_list[0]
				this.data=this.mainData.holds
				this.data.map(obj => {this.map[obj.name] = obj.percent + '%'})
				this.$store.commit('UPDATE_PAGE_TITLE', this.mainData.name);
				this.loadChartData(1);
			}
			if(r.system_info_by_id!=undefined&&r.system_info_by_id.length>0){
				this.mainData['notice']=r.system_info_by_id[0].content
			  }
			// console.log(JSON.stringify(this.choiceList))
			}).catch(err=>{
				console.log(err)
			})
		},
		loadChartData(month){
			this.chartData = []
			var dots = 30
			var step = this.dtmap[month||1]
			var startDate = this.$utdate.addDate(new Date(),-(dots*step))
			var prifit =[]
			var loss = []
			var avg_p1=0
			var avg_p2=0
			var avg_l1=0
			var avg_l2=0
			for(var j=0;j<=dots;j++){
				let dt = this.$utdate.addDate(startDate,j*step)
				var day = new Date(dt).getDay()
				if(day==0 || day==6) {
					continue
				}
				//good
				var gd1 = parseFloat(this.$utrandom.randomFullOpen(-10,40).toFixed(2))
				avg_p1 += gd1
				prifit.push({"date":dt,"type":"沪深300","value": gd1})
				var gd2 = parseFloat(this.$utrandom.randomFullOpen(-10,50).toFixed(2))
				avg_p2 += gd2
				prifit.push({"date":dt,"type":this.mainData.name,"value":gd2})
				//bad
				var bd1 = parseFloat(this.$utrandom.randomFullOpen(-40,10).toFixed(2))
				avg_l1+=bd1
				loss.push({"date":dt,"type":"沪深300","value":bd1})
				var bd2=parseFloat(this.$utrandom.randomFullOpen(-40,-10).toFixed(2))
				avg_l2+=bd2
				loss.push({"date":dt,"type":this.mainData.name ,"value":bd2})
			}
			prifit.filter(x=>x["type"]=="沪深300").map(x=>x["type"]="沪深300: "+ (avg_p1/dots).toFixed(2) + "%")
			prifit.filter(x=>x["type"]==this.mainData.name).map(x=>x["type"]=this.mainData.name + ": "+ (avg_p2/dots).toFixed(2))
			loss.filter(x=>x["type"]=="沪深300").map(x=>x["type"]="沪深300: "+ (avg_l1/dots).toFixed(2) + "%")
			loss.filter(x=>x["type"]==this.mainData.name).map(x=>x["type"]=this.mainData.name + ": "+ (avg_l2/dots).toFixed(2))
			this.chartData.push({"chid": 1, "name": "组合收益走势","data": prifit})
			this.chartData.push({"chid": 2, "name": "最大亏损走势","data": loss})
			// console.log(JSON.stringify(this.chartData))
		},
	},
	components:{
		Tab, TabItem,XButton,Swiper, SwiperItem,Flexbox, FlexboxItem,XDialog,Group,Cell,
		VChart, VLine, VAxis, VTooltip,VArea,VLegend, VBar, VPie, VGuide, VScale
	}
}