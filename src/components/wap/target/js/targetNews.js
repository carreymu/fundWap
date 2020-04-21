import {Flexbox, FlexboxItem,Spinner } from 'vux'
export default {
    mounted() {
        this.loadLatest()     
        this.$store.commit('UPDATE_PAGE_TITLE', '[大目标]投资面对面') 
    },
    data(){      
        return {
        itemList:[],
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
        Spinner
    }
}