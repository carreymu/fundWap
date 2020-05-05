// import {Flexbox, FlexboxItem,XImg} from 'vux'
export default{
    mounted() {
        this.$store.commit('UPDATE_PAGE_TITLE', '详情');
        this.loadDetail();	      
    },
    data(){
        return {
        mainData:{
                "sid": 5,
                "title": "安全可靠",
                "subtitle": "<h2>保证资金安全</h2>",
                "content": "安全可靠安全可靠",
                "url": "systemInfoDetail",
                "img_url": "../../../static/img/safe.png",
                "inserttime": 1586817237000
            }
        }
    },
    methods:{	
    },

    components:{
        // Flexbox, FlexboxItem,XImg
    }
}
