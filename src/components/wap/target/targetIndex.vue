<template>
  <div class="targetIndex">
    <div class="topTxt">
      <div class="top">大目标</div>
      <div class="topRmk">自动止盈的基金投资服务</div>
      <swiper auto height="230px" dots-position="center">
        <swiper-item v-for="(item, index) in banList" :key="index">
          <a :href="item.url"><img :alt="item.title" :src="item.img_url"/></a>
        </swiper-item>
      </swiper>

      <div class="rect">
        <div style="height:15px;"></div>
        <flexbox>
          <flexbox-item :span="1/20"></flexbox-item>          
          <flexbox-item class="title">大目标{{target_run1.name}}</flexbox-item>
          <flexbox-item class="limTime">限时申购</flexbox-item>
          <flexbox-item :span="1/20"></flexbox-item>
        </flexbox>
        <br/>
        <flexbox>
          <flexbox-item :span="1/20"></flexbox-item> 
          <flexbox-item>
            <flexbox orient="vertical">
              <flexbox-item class="aimRate">+{{target_run1.target_ratio}}<span style="font-size:large;">%</span></flexbox-item>
              <flexbox-item style="text-align:center;">目标收益</flexbox-item>
            </flexbox>
          </flexbox-item>
          <!-- <flexbox-item>
            -------------
          </flexbox-item> -->
          <flexbox-item>
            <flexbox orient="vertical">
              <flexbox-item class="aimLast">{{target_run1.pre_run}}<span style="font-size:large;font-weight:700">个月</span></flexbox-item>
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
                  <flexbox-item>大目标{{item.name}}</flexbox-item>
                  <flexbox-item class="days">{{item.run_days}}天达标</flexbox-item>
                </flexbox>
              </flexbox-item>
            </div>
          <flexbox-item :span="1/200"></flexbox-item> 
      </flexbox>
      <flexbox>
          <flexbox-item class="past">已<router-link :to="'/fundWap/targetList'">达标{{target_done}}期查,看往期 >>></router-link></flexbox-item> 
      </flexbox>
      <div style="border-bottom:1px solid rgb(230, 230, 230); padding:10px 0 5px 0;"></div>      
      <flexbox class="newsTitle">        
        <!-- <flexbox-item :span="1/100"></flexbox-item>  -->
        <flexbox-item class="lf">[大目标]投资面对面</flexbox-item> 
        <flexbox-item class="rg"><router-link :to="'/fundWap/targetDetail/1'">更多 ></router-link></flexbox-item> 
        <!-- <flexbox-item :span="1/100"></flexbox-item>          -->
      </flexbox>
    </div>
    <div class="newsItem" v-for="(item, index) in news2List" :key="index">
      <router-link :to="'/fundWap/targetDetail/'+item.nid">
      <flexbox>
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item>
                <flexbox orient="vertical">
                  <flexbox-item class="title">{{item.title}}</flexbox-item>                  
                  <flexbox-item style="font-size:12px;"><!-- <img src="../../../assets/images/view.png"> -->{{item.inserttime}}</flexbox-item>
                </flexbox>
            </flexbox-item>          
          </flexbox>
        </flexbox-item>
        <flexbox-item class="postListImg"><img :src="item.img_url"></flexbox-item>      
      </flexbox>      
      </router-link>
      <div style="border-bottom:1px solid rgb(230, 230, 230); padding:10px 0 5px 0;"></div>    
    </div>
    <div class="footer">
      <flexbox class="invIntro">
        <div  v-for="(item, index) in investList" :key="index" style="padding-left:35px;">
          <flexbox-item ><router-link :to="item.url+'/'+item.sid"><img :src="item.img_url"/><br/>&nbsp;{{item.title}}</router-link></flexbox-item>
        </div>
        <!-- <flexbox-item><router-link :to="'/fundWap/systemInfoDetail/1'"><img src="../../../../static/img/intro.png"/><br/>了解[大目标]</router-link></flexbox-item>
        <flexbox-item ><router-link :to="'/fundWap/systemInfoDetail/1'"><img src="../../../../static/img/think.png"/><div style="padding-left:10px;">投资理念</div></router-link></flexbox-item>
        <flexbox-item><router-link :to="'/fundWap/systemInfoDetail/1'"><img src="../../../../static/img/safe.png"/><div style="padding-left:15px;">安全可靠</div></router-link></flexbox-item> -->
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item class="botTxt">快乐投资新体验 | <router-link :to="company_info.url+'/'+company_info.sid"><span style="color:#DD5858;">{{company_info.title}}</span></router-link></flexbox-item>
      </flexbox>
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


