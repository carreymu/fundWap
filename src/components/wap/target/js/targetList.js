import {Flexbox, FlexboxItem, VChart, VLine, VTooltip, VGuide, VScale, Spinner,
    Tab, TabItem, Swiper, SwiperItem } from 'vux'
export default {
    mounted() {
        this.loadLatest()
        this.getTags()
        this.$store.commit('UPDATE_PAGE_TITLE', '[大目标]往期产品') 
    },
    data(){      
        return {
            index: 0,
            list2: ['全部57期', '已达标42期', '运行中14期'],
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
                        if(this.randomNum(0,300)>threshold){
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
            let self=this;
            this.baseAjax({
                url:'../../../static/basicData/latestNews.json',
                showLoading:true,
                success:function(data){
                    console.log(data)
                    self.itemList=data.returnObject
                }
            })
        },
        randomNum(minNum,maxNum){ 
            switch(arguments.length){ 
                case 1: 
                    return parseInt(Math.random()*minNum+1,10); 
                break; 
                case 2: 
                    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                break; 
                    default: 
                        return 0; 
                    break; 
            } 
        }
    },
    components: {
        Flexbox,
        FlexboxItem,
        Spinner,
        VChart,
        VLine,
        Tab, TabItem, Swiper, SwiperItem ,
        VTooltip,
        VGuide,
        VScale
    }
}