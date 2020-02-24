
import { Tab, TabItem,XImg,XButton, Swiper, SwiperItem,Flexbox, FlexboxItem,XDialog,Group,Cell} from 'vux';
const list = () => ['组合收益走势', '最大亏损走势']
export default {
	mounted(){
		this.loadDetail();
		this.$store.commit('UPDATE_PAGE_TITLE', '全明星计划');
	},
	computed:{
		
	},
	data(){
		let self=this;
		let data={
			mainData:{},
			list2: list(),
			index: 0,
			demo2: '美食',

			fTypeList:[]
		}
		return data;
	},
	methods:{
		loadDetail(){
			let self=this;
			let cid=this.$route.params.cid;
			this.baseAjax({
				url:'../../../static/basicData/choiceDetail.json',
				showLoading:true,
				params:{
					cid:cid,
				},
				success:function(data){
					self.mainData=data.returnObject[0];
					self.fundHandle(self.mainData.funds)
				}
			})
		},
		// list of funds
		fundHandle(list){
			let self=this;
			let len=list.length;
			self.fTypeList = list
			console.log(self.fTypeList)
		},
		/*.........to do .........*/
		next () {
			if (this.index === this.list2.length - 1) {
				this.index = 0
			} else {
				++this.index
			}
			},
		prev () {
			if (this.index === 0) {
				this.index = this.list2.length - 1
			} else {
				--this.index
			}
		},
		/*.........to do .........*/
	},
	components:{
		Tab, TabItem,XImg,XButton,Swiper, SwiperItem,Flexbox, FlexboxItem,XDialog,Group,Cell
	}
}