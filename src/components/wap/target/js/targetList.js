import {Flexbox, FlexboxItem, VChart, VLine, VArea, VTooltip, VLegend, VScale, Spinner } from 'vux'
export default {
    mounted() {
        this.loadLatest()     
        this.$store.commit('UPDATE_PAGE_TITLE', '[大目标]往期产品') 
    },
    data(){      
        return {
            itemList:[],
            chartData: [
				{
				"chid": 1,
				"name": "组合收益走势",
				"data":[
					
                    { value: 63.4, stock_name: '大目标达标', date: '2011-10-01' },
                    { value: 62.7, stock_name: '大目标收益率', date: '2011-10-01' },
                    { value: 72.2, stock_name: '上证综指涨跌幅', date: '2011-10-01' },
                    { value: 58, stock_name: '大目标达标', date: '2011-10-02' },
                    { value: 59.9, stock_name: '大目标收益率', date: '2011-10-02' },
                    { value: 67.7, stock_name: '上证综指涨跌幅', date: '2011-10-02' },
                    { value: 53.3, stock_name: '大目标达标', date: '2011-10-03' },
                    { value: 59.1, stock_name: '大目标收益率', date: '2011-10-03' },
                    { value: 69.4, stock_name: '上证综指涨跌幅', date: '2011-10-03' },
                    { value: 55.7, stock_name: '大目标达标', date: '2011-10-04' },
                    { value: 58.8, stock_name: '大目标收益率', date: '2011-10-04' },
                    { value: 68, stock_name: '上证综指涨跌幅', date: '2011-10-04' },
                    { value: 64.2, stock_name: '大目标达标', date: '2011-10-05' },
                    { value: 58.7, stock_name: '大目标收益率', date: '2011-10-05' },
                    { value: 72.4, stock_name: '上证综指涨跌幅', date: '2011-10-05' },
                    { value: 58.8, stock_name: '大目标达标', date: '2011-10-06' },
                    { value: 57, stock_name: '大目标收益率', date: '2011-10-06' },
                    { value: 77, stock_name: '上证综指涨跌幅', date: '2011-10-06' },
                    { value: 57.9, stock_name: '大目标达标', date: '2011-10-07' },
                    { value: 56.7, stock_name: '大目标收益率', date: '2011-10-07' },
                    { value: 82.3, stock_name: '上证综指涨跌幅', date: '2011-10-07' },
                    { value: 61.8, stock_name: '大目标达标', date: '2011-10-08' },
                    { value: 56.8, stock_name: '大目标收益率', date: '2011-10-08' },
                    { value: 78.9, stock_name: '上证综指涨跌幅', date: '2011-10-08' },
                    { value: 69.3, stock_name: '大目标达标', date: '2011-10-09' },
                    { value: 56.7, stock_name: '大目标收益率', date: '2011-10-09' },
                    { value: 68.8, stock_name: '上证综指涨跌幅', date: '2011-10-09' },
                    { value: 71.2, stock_name: '大目标达标', date: '2011-10-10' },
                    { value: 60.1, stock_name: '大目标收益率', date: '2011-10-10' },
                    { value: 68.7, stock_name: '上证综指涨跌幅', date: '2011-10-10' },
                    { value: 68.7, stock_name: '大目标达标', date: '2011-10-11' },
                    { value: 61.1, stock_name: '大目标收益率', date: '2011-10-11' },
                    { value: 70.3, stock_name: '上证综指涨跌幅', date: '2011-10-11' },
                    { value: 61.8, stock_name: '大目标达标', date: '2011-10-12' },
                    { value: 61.5, stock_name: '大目标收益率', date: '2011-10-12' },
                    { value: 75.3, stock_name: '上证综指涨跌幅', date: '2011-10-12' },
                    { value: 63, stock_name: '大目标达标', date: '2011-10-13' },
                    { value: 64.3, stock_name: '大目标收益率', date: '2011-10-13' },
                    { value: 76.6, stock_name: '上证综指涨跌幅', date: '2011-10-13' },
                    { value: 66.9, stock_name: '大目标达标', date: '2011-10-14' },
                    { value: 67.1, stock_name: '大目标收益率', date: '2011-10-14' },
                    { value: 66.6, stock_name: '上证综指涨跌幅', date: '2011-10-14' },
                    { value: 61.7, stock_name: '大目标达标', date: '2011-10-15' },
                    { value: 64.6, stock_name: '大目标收益率', date: '2011-10-15' },
                    { value: 68, stock_name: '上证综指涨跌幅', date: '2011-10-15' },
                    { value: 61.8, stock_name: '大目标达标', date: '2011-10-16' },
                    { value: 61.6, stock_name: '大目标收益率', date: '2011-10-16' },
                    { value: 70.6, stock_name: '上证综指涨跌幅', date: '2011-10-16' },
                    { value: 62.8, stock_name: '大目标达标', date: '2011-10-17' },
                    { value: 61.1, stock_name: '大目标收益率', date: '2011-10-17' },
                    { value: 71.1, stock_name: '上证综指涨跌幅', date: '2011-10-17' },
                    { value: 60.8, stock_name: '大目标达标', date: '2011-10-18' },
                    { value: 59.2, stock_name: '大目标收益率', date: '2011-10-18' },
                    { value: 70, stock_name: '上证综指涨跌幅', date: '2011-10-18' },
                    { value: 62.1, stock_name: '大目标达标', date: '2011-10-19' },
                    { value: 58.9, stock_name: '大目标收益率', date: '2011-10-19' },
                    { value: 61.6, stock_name: '上证综指涨跌幅', date: '2011-10-19' },
                    { value: 65.1, stock_name: '大目标达标', date: '2011-10-20' },
                    { value: 57.2, stock_name: '大目标收益率', date: '2011-10-20' },
                    { value: 57.4, stock_name: '上证综指涨跌幅', date: '2011-10-20' },
                    { value: 55.6, stock_name: '大目标达标', date: '2011-10-21' },
                    { value: 56.4, stock_name: '大目标收益率', date: '2011-10-21' },
                    { value: 64.3, stock_name: '上证综指涨跌幅', date: '2011-10-21' },
                    { value: 54.4, stock_name: '大目标达标', date: '2011-10-22' },
                    { value: 60.7, stock_name: '大目标收益率', date: '2011-10-22' },
                    { value: 72.4, stock_name: '上证综指涨跌幅', date: '2011-10-22' },
                    { value: 54.4, stock_name: '大目标达标', date: '2011-10-23' },
                    { value: 65.1, stock_name: '大目标收益率', date: '2011-10-23' },
                    { value: 72.4, stock_name: '上证综指涨跌幅', date: '2011-10-23' },
                    { value: 54.8, stock_name: '大目标达标', date: '2011-10-24' },
                    { value: 60.9, stock_name: '大目标收益率', date: '2011-10-24' },
                    { value: 72.5, stock_name: '上证综指涨跌幅', date: '2011-10-24' },
                    { value: 57.9, stock_name: '大目标达标', date: '2011-10-25' },
                    { value: 56.1, stock_name: '大目标收益率', date: '2011-10-25' },
                    { value: 72.7, stock_name: '上证综指涨跌幅', date: '2011-10-25' },
                    { value: 54.6, stock_name: '大目标达标', date: '2011-10-26' },
                    { value: 54.6, stock_name: '大目标收益率', date: '2011-10-26' },
                    { value: 73.4, stock_name: '上证综指涨跌幅', date: '2011-10-26' },
                    { value: 54.4, stock_name: '大目标达标', date: '2011-10-27' },
                    { value: 56.1, stock_name: '大目标收益率', date: '2011-10-27' },
                    { value: 70.7, stock_name: '上证综指涨跌幅', date: '2011-10-27' },
                    { value: 42.5, stock_name: '大目标达标', date: '2011-10-28' },
                    { value: 58.1, stock_name: '大目标收益率', date: '2011-10-28' },
                    { value: 56.8, stock_name: '上证综指涨跌幅', date: '2011-10-28' },
                    { value: 40.9, stock_name: '大目标达标', date: '2011-10-29' },
                    { value: 57.5, stock_name: '大目标收益率', date: '2011-10-29' },
                    { value: 51, stock_name: '上证综指涨跌幅', date: '2011-10-29' },
                    { value: 38.6, stock_name: '大目标达标', date: '2011-10-30' },
                    { value: 57.7, stock_name: '大目标收益率', date: '2011-10-30' },
                    { value: 54.9, stock_name: '上证综指涨跌幅', date: '2011-10-30' },
                    { value: 44.2, stock_name: '大目标达标', date: '2011-10-31' },
                    { value: 55.1, stock_name: '大目标收益率', date: '2011-10-31' },
                    { value: 58.8, stock_name: '上证综指涨跌幅', date: '2011-10-31' },
                    { value: 49.6, stock_name: '大目标达标', date: '2011-11-01' },
                    { value: 57.9, stock_name: '大目标收益率', date: '2011-11-01' },
                    { value: 62.6, stock_name: '上证综指涨跌幅', date: '2011-11-01' },
                    { value: 47.2, stock_name: '大目标达标', date: '2011-11-02' },
                    { value: 64.6, stock_name: '大目标收益率', date: '2011-11-02' },
                    { value: 71, stock_name: '上证综指涨跌幅', date: '2011-11-02' }
				]}
			],
        }
    },
    methods:{
        loadLatest(){
            let self=this;
            this.baseAjax({
                url:'../../../static/basicData/latestNews.json',
                showLoading:true,
                success:function(data){
                    console.log(data)
                    self.itemList=data.returnObject
                }
            })
        }
    },
    components: {
        Flexbox, 
        FlexboxItem,
        Spinner,
        VChart,
        VLine,
        VArea,
        VTooltip,
        VLegend,
        VScale
    }
}