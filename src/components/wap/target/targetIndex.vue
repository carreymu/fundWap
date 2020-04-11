<template>
  <div class="targetIndex">
    <div class="topTxt">
      <div class="top">大目标</div>
      <div class="topRmk">自动止盈的基金投资服务</div>
      <swiper auto height="230px" dots-position="center">
        <swiper-item v-for="(item, index) in urlList" :key="index">
          <a :href="item.url"><img :src="item.img"/></a>
        </swiper-item>
      </swiper>

      <div class="rect">
        <div style="height:15px;"></div>
        <flexbox>
          <flexbox-item :span="1/20"></flexbox-item>          
          <flexbox-item class="title">大目标2005</flexbox-item>
          <flexbox-item class="limTime">限时申购</flexbox-item>
          <flexbox-item :span="1/20"></flexbox-item>
        </flexbox>
        <br/>
        <flexbox>
          <flexbox-item :span="1/20"></flexbox-item> 
          <flexbox-item>
            <flexbox orient="vertical">
              <flexbox-item class="aimRate">+8.00<span style="font-size:large;">%</span></flexbox-item>
              <flexbox-item style="text-align:center;">目标收益</flexbox-item>
            </flexbox>
          </flexbox-item>
          <!-- <flexbox-item>
            -------------
          </flexbox-item> -->
          <flexbox-item>
            <flexbox orient="vertical">
              <flexbox-item class="aimLast">6-12<span style="font-size:large;font-weight:700">个月</span></flexbox-item>
              <flexbox-item style="text-align:center;">预计持有时长</flexbox-item>
            </flexbox>
          </flexbox-item>
          <flexbox-item :span="1/20"></flexbox-item> 
        </flexbox>
        <br/>
        <flexbox>
          <flexbox-item :span="1/4"></flexbox-item> 
          <flexbox-item><x-button type="warn">立即申购</x-button></flexbox-item>
          <flexbox-item :span="1/4"></flexbox-item> 
        </flexbox>
        <div style="height:30px;"></div>
      </div>
      <br>
      <flexbox>
          <flexbox-item :span="1/200"></flexbox-item>
          <flexbox-item :span="5/40"><img src="../../../assets/images/medal3.png" style="height:55px;width:50px;"/></flexbox-item> 
          <flexbox-item :span="1/100"></flexbox-item>
            <div v-for="(item, index) in top3FundList" :key="index">
              <flexbox-item class="top3fd">
                <flexbox orient="vertical">
                  <flexbox-item>大目标{{item.title}}</flexbox-item>
                  <flexbox-item class="days">{{item.days}}天达标</flexbox-item>
                </flexbox>
              </flexbox-item>
            </div>
          <flexbox-item :span="1/200"></flexbox-item> 
      </flexbox>
      <flexbox>
          <flexbox-item class="past">已达标41期查,看往期 >>></flexbox-item> 
      </flexbox>
      <div style="border-bottom:1px solid rgb(230, 230, 230); padding:10px 0 5px 0;"></div>      
      <flexbox class="newsTitle">        
        <!-- <flexbox-item :span="1/100"></flexbox-item>  -->
        <flexbox-item class="lf">[大目标]投资面对面</flexbox-item> 
        <flexbox-item class="rg"><router-link :to="'/fundWap/targetDetail/1'">更多 ></router-link></flexbox-item> 
        <!-- <flexbox-item :span="1/100"></flexbox-item>          -->
      </flexbox>
    </div>
    <div class="newsItem" v-for="(item, index) in itemList" :key="index">
      <router-link :to="'/fundWap/targetDetail/'+item.id">
      <flexbox>
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item>
                <flexbox orient="vertical">
                  <flexbox-item class="title">{{item.title}}</flexbox-item>                  
                  <flexbox-item style="font-size:12px;"><!-- <img src="../../../assets/images/view.png"> -->02-10 18:10</flexbox-item>
                </flexbox>
            </flexbox-item>          
          </flexbox>
        </flexbox-item>
        <flexbox-item class="postListImg"><img :src="item.icon"></flexbox-item>      
      </flexbox>      
      </router-link>
      <div style="border-bottom:1px solid rgb(230, 230, 230); padding:10px 0 5px 0;"></div>    
    </div>
    <div class="footer">
      <flexbox class="invIntro">
        <flexbox-item><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../assets/images/intro.png"/><br/>了解[大目标]</router-link></flexbox-item>
        <flexbox-item></flexbox-item>
        <flexbox-item ><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../assets/images/think.png"/><div style="padding-left:10px;">投资理念</div></router-link></flexbox-item>
        <flexbox-item></flexbox-item>
        <flexbox-item><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../assets/images/safe.png"/><div style="padding-left:15px;">安全可靠</div></router-link></flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item class="botTxt">快乐投资新体验 | <router-link :to="'/fundWap/targetDetail/1'"><span style="color:#DD5858;">公司介绍</span></router-link></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
  import {Tabbar, TabbarItem ,XHeader,XButton,XImg, Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
  export default {
    mounted() {
      this.test();
      // this.bannerList();
      // this.loadLatest();
      // this.top3Fund();      
      this.$store.commit('UPDATE_PAGE_TITLE', '大目标') 
    },
    data(){      
      return {
        itemList:'',
        top3FundList:'',
        urlList:[],
      }
    },
    methods:{
      test(){
        let dt = {
          "req": {
              "category":1,
          },
          "event_names": [
              "system_info"
          ],
          "wap_info": {
              "hashid": "hashkey", 
              "appid": "10050001"
          }
        }
        this.$api.fetchPost('/sanic-api', dt).then(r=>{
          console.log(r)
        }).catch(err=>{
          console.log(err)
        })
      },
      bannerList(){
        let self=this;
        let dt = {
            "req": {
                "category":1,
            },
            "event_names": [
                "system_info"
            ],
            "wap_info": {
                "hashid": "hashkey", 
                "appid": "10050001"
            }
        }
        
        this.baseAjax({
          url:'../../../static/basicData/activityBanner.json',
          // url: 'http://localhost:8000/',
          data: dt,
          type: 'post',
          showLoading:true,
          success:function(data){
              console.log(data)
              self.urlList=data.data
              // console.log(self.urlList)
          }
        })
      },
      top3Fund(){
        let self=this;
        this.baseAjax({
          url:'../../../static/basicData/top3Fund.json',
          showLoading:true,
          success:function(data){
              console.log(data)
              self.top3FundList=data.returnObject
          }
        })
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

</script>
<style>
a:link {
 font-size: 12px;
 color: #000000;
 text-decoration: none;
}
a:visited {
 font-size: 12px;
 color: #000000;
 text-decoration: none;
}
a:hover {
 font-size: 12px;
 color: #999999;
}

.targetIndex .topTxt{
  font-size: 12px;
  text-align: center;
  margin:10px 10px 0px 10px;
}
.targetIndex .topTxt .top{
  font-size: 20px;
  font-weight:800;
  color: brown;
  padding-top: 20px;
  padding-bottom: 10px;
}
.targetIndex .topTxt .topRmk{
  color:dimgray;
  height: 15px;
}

.targetIndex .topTxt .top3fd{
  width:100%;margin:5px 10px 0px 15px;height:60px;color:rgb(99, 99, 99);
}
.targetIndex .topTxt .top3fd .days{
  font-size:13px;font-weight:600;text-align:center;
}
.targetIndex .topTxt .past{
  text-align:center;color:rgb(99, 99, 99);font-size:12px;
}

.targetIndex .topTxt .newsTitle{
  font-size: 14px;font-weight:700;padding-top: 10px;
}
.targetIndex .topTxt .newsTitle .lf{
  text-align:left;
}
.targetIndex .topTxt .newsTitle .rg{
  text-align:right;
}

.targetIndex .topTxt .rect{
  width: 100%;
  height: 250px;
  /* padding: 30px 20px 40px 20px; */
  border-radius: 10px;
  box-shadow: 5px 5px 5px #e2e1e1; 
  background-color: white;
  transition: 0.7s;
}
/* .targetIndex .topTxt .rect:hover{
  opacity: 0
} */
.targetIndex .topTxt .rect .title{
  font-size: 20px;
  font-weight: 800;
  text-align: left;
}
.targetIndex .topTxt .rect .limTime{
  font-size: 20px;
  font-weight: 800;
  text-align: right;
}
.targetIndex .topTxt .rect .aimRate{
  font-size: xx-large;
  text-align: center;
}
.targetIndex .topTxt .rect .aimLast{
  font-size: xx-large;
  text-align: center;
}

.targetIndex .newsItem{
  margin:5px 10px 0 10px;
  position: relative;
  height: 126px;
  overflow: hidden;
  border-radius: 5px
}

.targetIndex .newsItem .postListImg {
    display: table-cell;
    width: 160px;
    height: 96px;
    margin-top: 0;
    overflow: hidden;
}

.targetIndex .newsItem .title{
  font-size:14px;
  font-weight:500;
  padding:10px 15px 20px 20px;  
  overflow: hidden;
  text-overflow: ellipsis;
}

.targetIndex .footer{
  margin:10px 30px 0 10px;  
  font-size: 12px;
}

.targetIndex .footer .invIntro{
  white-space:nowrap;
}

.targetIndex .footer .botTxt{
  text-align:center;
  color:#999999;
  padding:20px;
}
</style>


