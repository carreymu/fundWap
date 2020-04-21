import {Tabbar, TabbarItem ,XHeader,XButton,XImg, Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
import date_ops from '@/utils/utdate'
export default {
  mounted() {
    this.bannerList();
    // this.loadLatest();
    this.top3Fund();
    this.$store.commit('UPDATE_PAGE_TITLE', '大目标') 
  },
  data(){      
    return {
      target_run1:{name:'2001',target_ratio:8.00,pre_run:'1-12'},
      news2List:[],
      top3FundList:[],
      urlList:[],
    }
  },
  methods:{
    bannerList(){
      let dt = {
        "req": {
            "category":1,
            "run_status":0,
            "topx":1
        },
        "event_names": [
            "system_info","targets_status_topx"
        ]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.system_info.length > 0){
          let si = r.system_info
          for(var i =0 ;i<si.length; i++){
            let url = si[i].url
            if(url.length > 0 && !url.startsWith("http")){
              url = `${url}?id=${si[i].id}&content=${si[i].content}`
            }
            this.urlList.push({
              url: url,
              img_url: si[i].img_url,
              title: si[i].title
            })
          }
        }
        if(r.targets_status_topx.length > 0){
          let tar_1 = r.targets_status_topx[0]
          this.target_run1.name = tar_1.name
          this.target_run1.target_ratio=(tar_1.target_ratio*100).toFixed(2)
          this.target_run1.pre_run=tar_1.pre_run
        }
        //console.log(this.target_run1)
        //console.log(this.urlList)
      }).catch(err=>{
        console.log(err)
      })
    },
    top3Fund(){
      let dt = {
        "req": {
            "run_status":4,
            "topx":3,
            "nc_id":1
        },
        "event_names": [
            "targets_status_topx","news_info_topx_by_ncid"
        ]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.targets_status_topx.length > 0){
          let top3 = r.targets_status_topx.sort(function(a,b){a.run_days-b.run_days})
          this.top3FundList=top3
        }
        if(r.news_info_topx_by_ncid.length > 0){
          let news_list = r.news_info_topx_by_ncid
          for(var i = 0 ;i<news_list.length -1; i++){
            news_list[i].inserttime = date_ops.date_fmt(news_list[i].inserttime,"MM-dd hh:mm:ss")
            this.news2List.push(news_list[i])
          }
        }
        // console.log(this.news2List)
        // console.log(this.top3FundList)
      }).catch(err=>{
        console.log(err)
      })
    },
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    XButton,
    XImg,
    Swiper,
    SwiperItem,
    Flexbox, 
    FlexboxItem
  }
}