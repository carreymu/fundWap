<template>
  <div class="targetIndex">
    <div class="notification" v-if="notification.length>0">
      <flexbox>
        <flexbox-item :span="1/12"><x-icon type="ios-information" size="30"></x-icon></flexbox-item>
        <flexbox-item>{{notification}}</flexbox-item>
      </flexbox>
    </div>
    <div class="topTxt">
      <div class="top">大目标</div>
      <div class="topRmk">自动止盈的基金投资服务</div>
      <swiper auto  style="height:100px; border-radius:8px; overflow:hidden;" dots-position="center">
        <swiper-item v-for="(item, index) in bannerList" :key="index" style="height:120px;">
          <a :href="item.url"><img :alt="item.title" :src="item.img_url"/></a>
        </swiper-item>
      </swiper>

      <div class="rect">
        <div style="padding:10px;">
          <flexbox>        
            <flexbox-item class="title">大目标{{targetRun1.name}}</flexbox-item>
            <flexbox-item class="limTime">限时申购</flexbox-item>
          </flexbox>
        </div>
        <div class="topcontext">
          <div> 
            <div class="aimRate">+{{targetRun1.target_ratio}}<span style="font-size:large;">%</span></div>
            <div class="aimRmk">目标收益率</div>
          </div>
          <div class="slopingside"></div>      
          <div>
            <div class="aimLast">{{targetRun1.pre_run}}<span style="font-size:large;font-weight:700">个月</span></div>
            <div class="aimRmk">预计持有时长</div>
          </div>
        </div>
        <div style="text-align:center; padding:12px 50px;">
          <x-button type="warn" :link="'/fundWap/targetFundDetail/'+targetRun1.ft_id">立即申购</x-button>
        </div>
        <div v-if="JSON.stringify(top1TargetRct20d)!='{}'">
          <div class="line"/>
          <flexbox style="text-align:center;padding:10px 0;">
            <flexbox-item><img src="../../../assets/images/happy.gif" /></flexbox-item>
            <flexbox-item :span="1/2">
              <div style="color:brown;">大目标{{top1TargetRct20d.name}}到期了</div>
              <div style="color:#666;font-size:10px;">运行{{top1TargetRct20d.run_days}}天达标{{top1TargetRct20d.target_ratio}}%,快围观</div>
            </flexbox-item>
            <flexbox-item><img src="../../../assets/images/happy.gif" /></flexbox-item>
          </flexbox>
        </div>
      </div>

      <div style="padding-top:15px;">
        <div class="invIntro">
          <div><img src="../../../assets/images/medal3.png" style="height:50px;width:45px;"/></div>
          <div v-for="(item, index) in top3FundList" :key="index">
            <div class="top3fd">
              <div style="width:65px;">大目标{{item.name}}</div>
              <div class="days">{{item.run_days}}天达标</div>
            </div>
          </div>
        </div>
      </div>
      <div class="past"> 已<router-link :to="'/fundWap/targetList'">达标{{targetDoneCnt}}期查,看往期 ></router-link></div>
      <div class="line"></div>
      <div class="newsTitle">
        <div class="lf">[大目标]投资面对面</div> 
        <div class="rg"><router-link :to="'/fundWap/targetNews/1'">更多 ></router-link></div> 
      </div>
    </div>
    <div class="newsItem" v-for="(item, index) in news2List" :key="index">
      <router-link :to="'/fundWap/targetDetail/'+item.nid">
      <flexbox>
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item>
              <div style="height:60px;">{{item.title}}</div>
              <div style="height:20px;">{{item.inserttime}}</div>
            </flexbox-item>          
          </flexbox>
        </flexbox-item>
        <flexbox-item class="postListImg"><img :src="item.img_url"></flexbox-item>      
      </flexbox>      
      </router-link>
      <div class="line"></div>    
    </div>
    <div class="footer">
      <div class="invIntro">
        <div v-for="(item, index) in investList" :key="index">
          <router-link :to="{path:item.url,query:{sid:item.sid}}"><img :src="item.img_url"/><br/>&nbsp;{{item.title}}</router-link>
        </div>
      </div>
      <div class="foot">
        <div class="rect" v-for="(item, index) in sysCatList" :key="index">
          <router-link :to="{path:item.url,query:{scid:item.scid,title:item.title}}"><div v-html="item.subtitle"></div></router-link>
        </div>
      </div>
      <div class="botTxt">
        快乐投资新体验 | <router-link :to="companyInfo.url+'/'+companyInfo.sid"><span style="color:#DD5858;">{{companyInfo.title}}</span></router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import targetIndex  from  "./js/targetIndex.js"
  export default targetIndex
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
.notification{
  min-height:100%;
  position:relative;
  padding:10px;
  background:#FFFFCC;
  font-size:12px;
}
.line{border-bottom:1px solid rgb(230, 230, 230);}
.targetIndex .topTxt{
  font-size: 12px;
  text-align: center;
  margin:10px 10px 0px 10px;
}
.targetIndex .topTxt .top{
  font-size: 20px;
  font-weight:800;
  color: brown;
  padding: 10px 0px;
}
.targetIndex .topTxt .topRmk{
  color:dimgray;
  line-height: 35px;
}
.targetIndex .topTxt .top3fd{
  padding: 10px;
  color:rgb(99, 99, 99);
}
.targetIndex .topTxt .top3fd .days{
  font-size:14px;
}
.targetIndex .topTxt .past{
  text-align:center;color:rgb(99, 99, 99);font-size:12px;
}
.targetIndex .topTxt .newsTitle{
  font-size: 14px;font-weight:700;padding-top: 10px;
}
.targetIndex .topTxt .newsTitle .lf{
  /* text-align:left; */
  float: left;
}
.targetIndex .topTxt .newsTitle .rg{
  /* text-align:right; */
  float: right;
}
.targetIndex .topTxt .rect{
  width: 100%;
  height: auto;
  padding: 10px 0px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #e2e1e1; 
  background-color: white;
  transition: 0.7s;
}
/* .targetIndex .topTxt .rect:hover{
  opacity: 0
} */
.targetIndex .topTxt .rect .title{
  font-size: 14px;
  text-align: left;
}
.targetIndex .topTxt .rect .limTime{
  font-size: 14px;
  text-align: right;
}
.targetIndex .topTxt .rect .aimRate{
  font-size: x-large;
  text-align: center;
}
.targetIndex .topTxt .rect .topcontext{
    padding: 0 40px;
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
}
.targetIndex .topTxt .rect .slopingside{
    height:0px;
    width:45px;
    margin-top: 30px;
    border-top: 0.1px solid rgb(128, 126, 126);
    transform:rotate(125deg);
    -o-transform:rotate(125deg);
    -moz-transform:rotate(125deg);
    -webkit-transform:rotate(125deg);
}
.targetIndex .topTxt .rect .aimLast{
  font-size: x-large;
  text-align: center;
}
.targetIndex .foot {
  text-align: left;
}
.targetIndex .foot .rect{
  margin-top: 10px;
  padding: 10px 0px 10px 15px;
  border-radius: 6px;
  box-shadow: 5px 5px 5px #e2e1e1; 
  background-color: white;
  transition: 0.7s;
  color: dimgray;
}
.targetIndex .newsItem{
  clear: both;
  margin:5px 10px 0 10px;
  position: relative;
  height: 116px;
  overflow: hidden;
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
  padding:10px;  
  overflow: hidden;
  text-overflow: ellipsis;
}
.targetIndex .footer{
  margin:0px 10px 0 10px;  
  font-size: 12px;
}
.targetIndex .invIntro{
  text-align: center;
  display:-webkit-flex;
  display: flex;
  justify-content: space-around;
}
.targetIndex .footer .botTxt{
  text-align:center;
  color:#999999;
  padding:20px;
}
</style>