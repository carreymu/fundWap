<template>
<div>
  <div class="targetfund">
    <div class="load" v-if="fundList.length==0">
      <spinner type="lines"/>
    </div>
    <div v-else>
      <div class="topcontext">
        <div>
          <div class="aimRate">+{{targetRun1.targetRatio}}<span style="font-size:large;">%</span></div>
          <div class="aimRmk">目标收益率</div>
        </div>
        <div class="slopingside"></div>
        <div>
          <div class="aimLast">{{targetRun1.pre_run}}<span style="font-size:large;font-weight:700">个月</span></div>
          <div class="aimRmk">预计持有时长</div>
        </div>
      </div>
          
      <div>
        <div class="aimRmkSub">-- 目标收益为绝对收益,买入1万元,达标收益{{targetRun1.money}}元 --</div>
        <div class="linefd"></div>
          <div style="padding:5px 0;text-align:center;">申购日: {{targetRun1.appStart}}~{{targetRun1.appEnd}}</div>
        <div class="linefd"></div>
        <div style="padding: 5px 0;"><img src="../../../../static/img/funddetail_banner.png" width="340" height="80"/></div>
      </div>

      <div>
        <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">本期基金</span></div>
        <div style="float:right;"><router-link :to="'/fundWap/'+sysInfo.url+'/'+sysInfo.sid"><x-icon type="ios-help-outline" size="15"></x-icon></router-link></div>
      </div>

      <div style="padding:5px 0;">
        <div v-for="(item,idx) in fundList" :key="idx"  class="fundList">
            <div style="float: left;">{{item.fund_name}}({{item.fund_code}})</div>
            <div style="float: right;" v-if="item.show_order==0">
              <router-link :to="'/fundWap/targetFundOrder/'+item.fid">申购基金&nbsp; ></router-link>
              <!-- <router-link :to="{name:'targetFundOrder', 
              params:{fid: item.fid, fund_name: item.fund_name,cat_name: item.cat_name,fund_code:item.fund_code,
              apply_ratio:item.purchase_rate_new,fund_tot: item.fund_tot,topn: item.topn}}">申购基金&nbsp; ></router-link> -->
            </div>
            <div style="float: right;" v-else>
              <router-link :to="'/fundWap/targetStockOrder/'+item.fid">{{item.percentage}}%&nbsp; ></router-link>
            </div>
        </div>
      </div>

      <div class="line"></div>
      <div style="padding:10px 0;">
          <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">服务内容</span></div>
          <div class="serviceInfo" v-html="serviceInfo"></div>
      </div>
          
      <div>
        <div v-for="(it,idx) in sysInfos" :key="idx">
          <div class="linefd"/>
          <router-link :to="{path:'/fundWap/systemInfoDetail',query:{sid:it.sid}}">
            <div class="sysLt">{{it.title}}</div>
            <div class="sysRt">></div>
          </router-link>
        </div>
      </div>

      <div class="linefd"></div>
      <div class="footer">
        <div class="bot">基金历史收益部代表其未来表现.<br/>【市场有风险,投资需谨慎。】</div>
      </div>

    </div>
  </div>
  <div class="footerFix">
    <div class="linefd"></div>
      <div class="timeFont">申购倒计时: {{hour}}小时{{min}}分{{second}}秒</div>
    <div class="linefd"></div>
    <flexbox style="text-align:center;">
      <flexbox-item ><div style="font-weight:bold;">{{targetRun1.initial_amt}}元起投 {{targetRun1.fee_ratio}}申购费</div><div style="font-size:10px;">需使用服务卡</div></flexbox-item>
      <flexbox-item ><x-button type="warn" :link="{path:'/fundWap/targetOrder',query:{tid:targetRun1.id}}">申购</x-button></flexbox-item>
    </flexbox>
  </div>
</div>
</template>
<script>
  import targetFundDetail  from  "./js/targetFundDetail.js"
  export default targetFundDetail
</script>

<style>
  .targetfund{
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .targetfund .load{
  text-align: center;
  height: 250px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.targetfund .fundList{
  clear:both;
  padding:5px 5px;
  color:#333;
}
.targetfund .sysLt{
  float:left;
  line-height:35px;
  padding-left:10px;
  color:#333;
}
.targetfund .sysRt{
  float:right;
  line-height:35px;
  padding-right:10px;
}
.targetfund .serviceInfo{
  clear:both;
  padding: 10px 0 0 10px;
  line-height:25px;
  text-align:left;
  
}
.targetfund .cell{
  font-size:13px;
}
.targetfund .topcontext{
  padding: 15px 40px 20px 40px;
  display:-webkit-flex;
  display: flex;
  justify-content: space-around;
}
.line{
  clear: both;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 0px 0 10px 0;
}
.linefd{
  clear: both;
  border-bottom:1px solid rgb(230, 230, 230);
}
.targetfund .tfdline{
  border-bottom:1px solid rgb(230, 230, 230);
  margin:5px 0;
}  
.targetfund .aimRate{
  font-size: x-large;
  text-align: center;
}
.targetfund .aimLast{
  font-size: x-large;
  text-align: center;
}
.targetfund .aimRmk{
  text-align:center;
  color:#999999;
  margin-left:5px;
}  
.targetfund .aimRmkSub{
  text-align:center;
  color:#999999;
  font-size:11px;
  margin-bottom: 10px;
}

.targetfund .waitInvokeTxtPre{
  color:brown;
  font-weight:900;
  font-size: 15px;
  padding-left:5px;
  float: left;
  clear: both;
}
.targetfund .waitInvokeTxtTail{
  color:#000000;padding-left:5px;
}
.targetfund .footer{
  text-align:center;
  color:#666;
}
.targetfund .footer .bot{
  font-size:11px;
  padding:10px 0 80px 0;
}  
.footerFix{
  font-size:12px;
  position:absolute;
  bottom:0;
  width:100%;
  height:130px;
  background:#F7F7F7;
}
.footerFix .timeFont{
  padding:5px 0;
  text-align:center;
}
.targetfund .slopingside{
  height:0px;
  width:45px;
  margin-top: 30px;
  border-top: 0.1px solid rgb(128, 126, 126);
  transform:rotate(125deg);
  -o-transform:rotate(125deg);
  -moz-transform:rotate(125deg);
  -webkit-transform:rotate(125deg);
}
</style>
