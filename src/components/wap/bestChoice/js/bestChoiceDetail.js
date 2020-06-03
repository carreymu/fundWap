
import { Tab,TabItem,XImg,XButton,Swiper,SwiperItem,Flexbox,FlexboxItem,XDialog,Group,Cell,VChart, VLine, VAxis, 
	VTooltip,VArea,VLegend, VBar, VPie, VGuide, VScale} from 'vux';
const map = {}
export default {
	mounted(){
		this.loadDetail();
		this.getData();
		this.$store.commit('UPDATE_PAGE_TITLE', '全明星计划');
	},
	computed:{
		/*init vchart data*/
	},
	data(){		
		return {
			map,
			mainData:{},
			cusFunds:[],
			fTypeList:[],
			dtmap:{1:1,3:3,6:6,12:12,36:36},//month:step
			/*init vchart first or data???*/
			chartData: [
				{
				"chid": 1,
				"name": "组合收益走势",
				"data":[
					{"date":"2010/01/10","type":"全明星计划: +17.27%","value":69.9},
					{"date":"2010/01/11","type":"全明星计划: +17.27%","value":69.10},
					{"date":"2010/01/12","type":"全明星计划: +17.27%","value":69.11},
					{"date":"2010/01/13","type":"全明星计划: +17.27%","value":69.12},
					{"date":"2010/01/14","type":"全明星计划: +17.27%","value":70.13},
					{"date":"2010/01/15","type":"全明星计划: +17.27%","value":70.14},
					{"date":"2010/01/16","type":"全明星计划: +17.27%","value":70.15},
					{"date":"2010/01/17","type":"全明星计划: +17.27%","value":70.16},
					{"date":"2010/01/18","type":"全明星计划: +17.27%","value":70.17},
					{"date":"2010/01/19","type":"全明星计划: +17.27%","value":71.18},
					{"date":"2010/01/20","type":"全明星计划: +17.27%","value":71.19},
					{"date":"2010/01/21","type":"全明星计划: +17.27%","value":71.20},
					{"date":"2010/01/22","type":"全明星计划: +17.27%","value":72.21},
					{"date":"2010/01/23","type":"全明星计划: +17.27%","value":72.22},
					{"date":"2010/01/24","type":"全明星计划: +17.27%","value":72.23},
					{"date":"2010/01/25","type":"全明星计划: +17.27%","value":72.24},
					{"date":"2010/01/26","type":"全明星计划: +17.27%","value":73.25},
					{"date":"2010/01/27","type":"全明星计划: +17.27%","value":73.26},
					{"date":"2010/01/28","type":"全明星计划: +17.27%","value":73.27},
					{"date":"2010/01/29","type":"全明星计划: +17.27%","value":73.28},
					{"date":"2010/01/30","type":"全明星计划: +17.27%","value":74.29},
					{"date":"2010/01/31","type":"全明星计划: +17.27%","value":74.30},
					{"date":"2010/02/01","type":"全明星计划: +17.27%","value":74.31},
					{"date":"2010/02/02","type":"全明星计划: +17.27%","value":75.32},
					{"date":"2010/02/03","type":"全明星计划: +17.27%","value":75.33},
					{"date":"2010/02/04","type":"全明星计划: +17.27%","value":75.34},
					{"date":"2010/02/05","type":"全明星计划: +17.27%","value":75.35},
					{"date":"2010/02/06","type":"全明星计划: +17.27%","value":76.36},
					{"date":"2010/02/07","type":"全明星计划: +17.27%","value":76.37},
					{"date":"2010/02/08","type":"全明星计划: +17.27%","value":76.38},
					{"date":"2010/02/09","type":"全明星计划: +17.27%","value":77.39},
					{"date":"2010/02/10","type":"全明星计划: +17.27%","value":77.40},
					{"date":"2010/02/11","type":"全明星计划: +17.27%","value":77.41},
					{"date":"2010/02/12","type":"全明星计划: +17.27%","value":77.42},
					{"date":"2010/02/13","type":"全明星计划: +17.27%","value":78.43},
					{"date":"2010/02/14","type":"全明星计划: +17.27%","value":78.44},
					{"date":"2010/02/15","type":"全明星计划: +17.27%","value":79.45},
					{"date":"2010/02/16","type":"全明星计划: +17.27%","value":80.46},
					{"date":"2010/02/17","type":"全明星计划: +17.27%","value":78.44},
					{"date":"2010/02/18","type":"全明星计划: +17.27%","value":79.45},
					{"date":"2010/02/19","type":"全明星计划: +17.27%","value":80.46},
					{"date":"2010/02/20","type":"全明星计划: +17.27%","value":85.45},
					{"date":"2010/02/21","type":"全明星计划: +17.27%","value":99.46},
					{"date":"2010/01/10","type":"沪深300: +8.71%","value":79.9},
					{"date":"2010/01/11","type":"沪深300: +8.71%","value":79.10},
					{"date":"2010/01/12","type":"沪深300: +8.71%","value":79.11},
					{"date":"2010/01/13","type":"沪深300: +8.71%","value":76.12},
					{"date":"2010/01/14","type":"沪深300: +8.71%","value":76.13},
					{"date":"2010/01/15","type":"沪深300: +8.71%","value":76.14},
					{"date":"2010/01/16","type":"沪深300: +8.71%","value":76.15},
					{"date":"2010/01/17","type":"沪深300: +8.71%","value":76.16},
					{"date":"2010/01/18","type":"沪深300: +8.71%","value":77.17},
					{"date":"2010/01/19","type":"沪深300: +8.71%","value":77.18},
					{"date":"2010/01/20","type":"沪深300: +8.71%","value":77.19},
					{"date":"2010/01/21","type":"沪深300: +8.71%","value":77.20},
					{"date":"2010/01/22","type":"沪深300: +8.71%","value":77.21},
					{"date":"2010/01/23","type":"沪深300: +8.71%","value":79.22},
					{"date":"2010/01/24","type":"沪深300: +8.71%","value":78.23},
					{"date":"2010/01/25","type":"沪深300: +8.71%","value":78.24},
					{"date":"2010/01/26","type":"沪深300: +8.71%","value":78.25},
					{"date":"2010/01/27","type":"沪深300: +8.71%","value":78.26},
					{"date":"2010/01/28","type":"沪深300: +8.71%","value":79.27},
					{"date":"2010/01/29","type":"沪深300: +8.71%","value":80.28},
					{"date":"2010/01/30","type":"沪深300: +8.71%","value":80.29},
					{"date":"2010/01/31","type":"沪深300: +8.71%","value":80.30},
					{"date":"2010/02/01","type":"沪深300: +8.71%","value":80.31},
					{"date":"2010/02/02","type":"沪深300: +8.71%","value":81.32},
					{"date":"2010/02/03","type":"沪深300: +8.71%","value":81.33},
					{"date":"2010/02/04","type":"沪深300: +8.71%","value":81.34},
					{"date":"2010/02/05","type":"沪深300: +8.71%","value":81.35},
					{"date":"2010/02/06","type":"沪深300: +8.71%","value":82.36},
					{"date":"2010/02/07","type":"沪深300: +8.71%","value":82.37},
					{"date":"2010/02/08","type":"沪深300: +8.71%","value":82.38},
					{"date":"2010/02/09","type":"沪深300: +8.71%","value":82.39},
					{"date":"2010/02/10","type":"沪深300: +8.71%","value":86.40},
					{"date":"2010/02/11","type":"沪深300: +8.71%","value":86.41},
					{"date":"2010/02/12","type":"沪深300: +8.71%","value":88.42},
					{"date":"2010/02/13","type":"沪深300: +8.71%","value":88.43},
					{"date":"2010/02/14","type":"沪深300: +8.71%","value":88.44},
					{"date":"2010/02/15","type":"沪深300: +8.71%","value":89.45},
					{"date":"2010/02/16","type":"沪深300: +8.71%","value":89.46}
				]},
				{
					"chid": 2,
					"name": "最大亏损走势",
					"data":[
						{"date":"2010/01/10","type":"全明星计划: +17.27%","value":-69.9},
						{"date":"2010/01/11","type":"全明星计划: +17.27%","value":-69.10},
						{"date":"2010/01/12","type":"全明星计划: +17.27%","value":-69.11},
						{"date":"2010/01/13","type":"全明星计划: +17.27%","value":-69.12},
						{"date":"2010/01/14","type":"全明星计划: +17.27%","value":-70.13},
						{"date":"2010/01/15","type":"全明星计划: +17.27%","value":-70.14},
						{"date":"2010/01/16","type":"全明星计划: +17.27%","value":-70.15},
						{"date":"2010/01/17","type":"全明星计划: +17.27%","value":-70.16},
						{"date":"2010/01/18","type":"全明星计划: +17.27%","value":-70.17},
						{"date":"2010/01/19","type":"全明星计划: +17.27%","value":-71.18},
						{"date":"2010/01/20","type":"全明星计划: +17.27%","value":-71.19},
						{"date":"2010/01/21","type":"全明星计划: +17.27%","value":-71.20},
						{"date":"2010/01/22","type":"全明星计划: +17.27%","value":-72.21},
						{"date":"2010/01/23","type":"全明星计划: +17.27%","value":-72.22},
						{"date":"2010/01/24","type":"全明星计划: +17.27%","value":-72.23},
						{"date":"2010/01/25","type":"全明星计划: +17.27%","value":-72.24},
						{"date":"2010/01/26","type":"全明星计划: +17.27%","value":-73.25},
						{"date":"2010/01/27","type":"全明星计划: +17.27%","value":-73.26},
						{"date":"2010/01/28","type":"全明星计划: +17.27%","value":-73.27},
						{"date":"2010/01/29","type":"全明星计划: +17.27%","value":-73.28},
						{"date":"2010/01/30","type":"全明星计划: +17.27%","value":-74.29},
						{"date":"2010/01/31","type":"全明星计划: +17.27%","value":-74.30},
						{"date":"2010/02/01","type":"全明星计划: +17.27%","value":-74.31},
						{"date":"2010/02/02","type":"全明星计划: +17.27%","value":-75.32},
						{"date":"2010/02/03","type":"全明星计划: +17.27%","value":-75.33},
						{"date":"2010/02/04","type":"全明星计划: +17.27%","value":-75.34},
						{"date":"2010/02/05","type":"全明星计划: +17.27%","value":-75.35},
						{"date":"2010/02/06","type":"全明星计划: +17.27%","value":-76.36},
						{"date":"2010/02/07","type":"全明星计划: +17.27%","value":-76.37},
						{"date":"2010/02/08","type":"全明星计划: +17.27%","value":-76.38},
						{"date":"2010/02/09","type":"全明星计划: +17.27%","value":-77.39},
						{"date":"2010/02/10","type":"全明星计划: +17.27%","value":-77.40},
						{"date":"2010/02/11","type":"全明星计划: +17.27%","value":-77.41},
						{"date":"2010/02/12","type":"全明星计划: +17.27%","value":-77.42},
						{"date":"2010/02/13","type":"全明星计划: +17.27%","value":-78.43},
						{"date":"2010/02/14","type":"全明星计划: +17.27%","value":-78.44},
						{"date":"2010/02/15","type":"全明星计划: +17.27%","value":-79.45},
						{"date":"2010/02/16","type":"全明星计划: +17.27%","value":-80.46},
						{"date":"2010/02/17","type":"全明星计划: +17.27%","value":-78.44},
						{"date":"2010/02/18","type":"全明星计划: +17.27%","value":-79.45},
						{"date":"2010/02/19","type":"全明星计划: +17.27%","value":-80.46},
						{"date":"2010/02/20","type":"全明星计划: +17.27%","value":-85.45},
						{"date":"2010/02/21","type":"全明星计划: +17.27%","value":-99.46},
						{"date":"2010/01/10","type":"沪深300: +8.71%","value":-79.9},
						{"date":"2010/01/11","type":"沪深300: +8.71%","value":-79.10},
						{"date":"2010/01/12","type":"沪深300: +8.71%","value":-79.11},
						{"date":"2010/01/13","type":"沪深300: +8.71%","value":-76.12},
						{"date":"2010/01/14","type":"沪深300: +8.71%","value":-76.13},
						{"date":"2010/01/15","type":"沪深300: +8.71%","value":-76.14},
						{"date":"2010/01/16","type":"沪深300: +8.71%","value":-76.15},
						{"date":"2010/01/17","type":"沪深300: +8.71%","value":-76.16},
						{"date":"2010/01/18","type":"沪深300: +8.71%","value":-77.17},
						{"date":"2010/01/19","type":"沪深300: +8.71%","value":-77.18},
						{"date":"2010/01/20","type":"沪深300: +8.71%","value":-77.19},
						{"date":"2010/01/21","type":"沪深300: +8.71%","value":-77.20},
						{"date":"2010/01/22","type":"沪深300: +8.71%","value":-77.21},
						{"date":"2010/01/23","type":"沪深300: +8.71%","value":-79.22},
						{"date":"2010/01/24","type":"沪深300: +8.71%","value":-78.23},
						{"date":"2010/01/25","type":"沪深300: +8.71%","value":-78.24},
						{"date":"2010/01/26","type":"沪深300: +8.71%","value":-78.25},
						{"date":"2010/01/27","type":"沪深300: +8.71%","value":-78.26},
						{"date":"2010/01/28","type":"沪深300: +8.71%","value":-79.27},
						{"date":"2010/01/29","type":"沪深300: +8.71%","value":-80.28},
						{"date":"2010/01/30","type":"沪深300: +8.71%","value":-80.29},
						{"date":"2010/01/31","type":"沪深300: +8.71%","value":-80.30},
						{"date":"2010/02/01","type":"沪深300: +8.71%","value":-80.31},
						{"date":"2010/02/02","type":"沪深300: +8.71%","value":-81.32},
						{"date":"2010/02/03","type":"沪深300: +8.71%","value":-81.33},
						{"date":"2010/02/04","type":"沪深300: +8.71%","value":-81.34},
						{"date":"2010/02/05","type":"沪深300: +8.71%","value":-81.35},
						{"date":"2010/02/06","type":"沪深300: +8.71%","value":-82.36},
						{"date":"2010/02/07","type":"沪深300: +8.71%","value":-82.37},
						{"date":"2010/02/08","type":"沪深300: +8.71%","value":-82.38},
						{"date":"2010/02/09","type":"沪深300: +8.71%","value":-82.39},
						{"date":"2010/02/10","type":"沪深300: +8.71%","value":-86.40},
						{"date":"2010/02/11","type":"沪深300: +8.71%","value":-86.41},
						{"date":"2010/02/12","type":"沪深300: +8.71%","value":-88.42},
						{"date":"2010/02/13","type":"沪深300: +8.71%","value":-88.43},
						{"date":"2010/02/14","type":"沪深300: +8.71%","value":-88.44},
						{"date":"2010/02/15","type":"沪深300: +8.71%","value":-89.45},
						{"date":"2010/02/16","type":"沪深300: +8.71%","value":-89.46}
					]
				}
			],
			index: 0,
			month: 0,
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
			yOptions: {
				formatter (val) {
					return val * 100 + '%'
				}
			},
			
			data:[],
			circleColors:[]
		};
	},
	methods:{
		getData(){
			this.data=[
				{ name: "量化派", percent: 56.59 },
				{ name: "成长型", percent: 20.17},
				{ name: "价值型", percent: 23.24}
			]
			this.data.map(obj => {
				this.map[obj.name] = obj.percent + '%'
			})
		},
		fltIdx(idx,month){
			this.index=idx
			this.month=month
			console.log('month:'+month)
			console.log('tab:'+this.index)
		},
		onItemClick (index) {
			console.log('on item click:', index)
		},
		loadDetail(){
			let cid=this.$route.params.cid;
			/*
			1.fund_plan_by_fplid.fplid->fund_plan_by_fplid.fpl_id
			2.fund_plan_by_fplid.fpl_id->fund_plan_details.fpl_id->fund_plan_details.fid
			3.fund_plan_details.fid->fund_info.fid->fund_info.fcc_id
			4.fund_info.fcc_id->fund_customized_category.fcc_id
			*/
			let dt = {
				"req": {"fpl_id":cid},
				"event_names": ["fund_plan_list"]
			  }
			  this.$api.fetchPost('/sanic-api', dt).then(r=>{
				if(r.fund_plan_list!=undefined && r.fund_plan_list.length > 0){
					this.mainData=r.fund_plan_list[0]
				}
				// console.log(JSON.stringify(this.choiceList))
			  }).catch(err=>{
				console.log(err)
			  })
		},
		// loadChartData(){
		// 	let cid=this.$route.params.choiceId;
		// 	this.baseAjax({
		// 		url:'../../../static/basicData/bestChoiceDetailChart.json',
		// 		showLoading:true,
		// 		params:{
		// 			cid:cid,
		// 		},
		// 		success:function(data){
		// 			// console.log(Array.isArray(data.returnObject))
		// 			// console.log(typeof(this.chartMap))
		// 			this.chartData=data.returnObject;
		// 		}
		// 	})
		// },
	},
	components:{
		Tab, TabItem,XImg,XButton,Swiper, SwiperItem,Flexbox, FlexboxItem,XDialog,Group,Cell,
		VChart, VLine, VAxis, VTooltip,VArea,VLegend, VBar, VPie, VGuide, VScale
	}
}