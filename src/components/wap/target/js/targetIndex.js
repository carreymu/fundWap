import {Tabbar, TabbarItem ,XHeader,XButton,XImg, Swiper, SwiperItem, Flexbox, FlexboxItem, dateFormat } from 'vux'
export default {
  mounted() {
    this.bannersList();
    this.systemInfo();
    this.top3Fund();
    this.$store.commit('UPDATE_PAGE_TITLE', '大目标') 
  },
  data(){      
    return {
      notification:"",
      targetRun1:{id:0,name:'2001',target_ratio:8.00,pre_run:'1-12'},
      news2List:[],
      top3FundList:[],
      bannerList:[],
      investList:[],
      sysCatList:[],
      companyInfo:{},
      targetDoneCnt:0,
      sysFlag:{banner:1,investInfo:2,company:3,notification:9}
    }
  },
  methods:{
    bannersList(){
      let dt = {
        "req": {"scids":"1,2,3,4,9","run_status":0,"topx":1},
        "event_names": ["system_info","targets_status_topx"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.system_info.length > 0){
          let si = r.system_info.filter(x=>x.scid==this.sysFlag.banner && x.status == 1)
          for(var i =0 ;i<si.length; i++){
            let url = si[i].url
            if(url.length > 0 && !url.startsWith("http")){
              url = `${url}?id=${si[i].id}&content=${si[i].content}`
            }
            this.bannerList.push({url: url,img_url: si[i].img_url,title: si[i].title})
          }
          let invList = r.system_info.filter(x=>x.scid==this.sysFlag.investInfo && x.status == 1)
          if(invList.length > 0){
            this.investList = invList
          }
          let comp = r.system_info.filter(x=>x.scid==this.sysFlag.company && x.status == 1)
          if(comp.length >0){
            this.companyInfo = comp[0]
          }
          let no = r.system_info.filter(x=>x.scid==this.sysFlag.notification && x.status == 1)
          // console.log(no)
          if(no.length > 0){
            this.notification = no[0].content
          }

        }
        if(r.targets_status_topx.length > 0){
          let tar_1 = r.targets_status_topx[0]
          this.targetRun1.name = tar_1.name
          this.targetRun1.target_ratio=(tar_1.target_ratio*100).toFixed(2)
          this.targetRun1.pre_run=tar_1.pre_run
          this.targetRun1.id=tar_1.tid
        }
        //console.log(this.targetRun1)
        //console.log(this.urlList)
      }).catch(err=>{
        console.log(err)
      })
    },
    top3Fund(){
      let dt = {
        "req": {"run_status":4,"topx":3,"nc_id":1},
        "event_names": ["targets_status_topx","news_info_topx_by_ncid"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.targets_status_topx.length > 0){
          let top3 = r.targets_status_topx.sort(function(a,b){a.run_days-b.run_days})
          this.top3FundList=top3
        }
        if(r.news_info_topx_by_ncid.length > 0){
          let news_list = r.news_info_topx_by_ncid
          for(var i = 0 ;i<news_list.length -1; i++){
            news_list[i].inserttime = dateFormat(news_list[i].inserttime,"MM-DD HH:mm:ss")
            this.news2List.push(news_list[i])
          }
        }
        // console.log(this.news2List)
        // console.log(this.top3FundList)
      }).catch(err=>{
        console.log(err)
      })
    },
    systemInfo(){
      let dt = {
        "req": {"pscid":4,"run_status":"5,4"},
        "event_names": ["targets_status_done","system_info_category"]
      }
      this.$api.fetchPost('/sanic-api', dt).then(r=>{
        if(r.targets_status_done.length > 0){
          this.targetDoneCnt = r.targets_status_done[0].tot_target
        }
        this.sysCatList = r.system_info_category
        // console.log(this.news2List)
        // console.log(this.top3FundList)
      }).catch(err=>{
        console.log(err)
      })
    }
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