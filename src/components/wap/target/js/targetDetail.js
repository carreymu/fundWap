import {Flexbox, FlexboxItem,Spinner,dateFormat} from 'vux'
export default{
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '详情');     
    },
    data(){
        return {
            mainData:{
                "nid": 1,
                "title": "[大目标]2周年运行情况和当前市场分析",
                "img_url": "https://image.talicai.com/MGZjODAyMzU3Zjc4MjA4Y2RkZDQ0MWYzYTU3ZGQ3Mzc-sq200",
                "content": "我是分析君...哈哈哈",
                "inserttime": dateFormat(1586726041000,'MM-DD HH:mm:ss')
                }
        }
    },
    methods:{	
    },

    components:{
        Flexbox, FlexboxItem,Spinner
    }
}