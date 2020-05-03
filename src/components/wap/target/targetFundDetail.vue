<template>
<div>
  <div class="targetfund">
    <!-- <div v-if="fundList.length==0">
      <spinner type="lines"/>
    </div>
    <div v-else> -->
    <div class="topcontext">
      <div>          
        <div >
          <div class="aimRate">+8.00<span style="font-size:large;">%</span></div>
          <div class="aimRmk">目标收益率</div>
        </div>
      </div>
      <div class="slopingside"></div>
      <div>          
        <div>
          <div class="aimLast">6~12<span style="font-size:large;font-weight:700">个月</span></div>
          <div class="aimRmk">预计持有时长</div>
        </div>
      </div>
    </div>
        
    <div>
      <div class="aimRmkSub">-- 目标收益为绝对收益,买入1万元,达标收益800元 --</div>
      <div class="linefd"></div>
        <div style="padding:5px 0;text-align:center;">申购日: 20年04月20日~20年04月29日</div>
      <div class="linefd"></div>
      <div style="padding: 5px 0;"><img src="../../../../static/img/funddetail_banner.png" width="340" height="80"/></div>
    </div>

        <!-- <div >
          <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">本期基金</span></div>
          <div style="float:right;"><router-link :to="'/fundWap/'+sysInfo.url+'/'+sysInfo.sid"><x-icon type="ios-help-outline" size="15"></x-icon></router-link></div>
        </div> -->
        <flexbox orient="vertical">
          <flexbox-item>
          <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">本期基金</span></div>
          <div style="float:right;"><router-link :to="'/fundWap/'+sysInfo.url+'/'+sysInfo.sid"><x-icon type="ios-help-outline" size="15"></x-icon></router-link></div>
          </flexbox-item>
        </flexbox>

        <div style="padding:5px 0;">
          <div v-for="(item,idx) in fundList" :key="idx"  style="clear:both;padding:5px 5px;color:#666;">
            <div style="float: left;">{{item.fundName}}({{item.fundCode}})</div>
            <div style="float: right;" v-if="idx==0">{{item.percent}}&nbsp; ></div>
            <div style="float: right;" v-else>{{item.percent}}%&nbsp; ></div>
          </div>
        </div>

        <div class="line"></div>
        <div style="padding-top:5px;">
            <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">服务内容</span></div>
            <div style="clear:both;margin-left:10px;line-height:25px;text-align:left;" v-html="serviceInfo">-选基说明-v-html</div>
        </div>
        
        <div>
          <group>
            <cell class="cell" :border-intent="false" :title="'操作与费率说明'" :link="{path:'/fundWap/systemInfoDetail/8'}" ></cell>
            <cell class="cell" :border-intent="false" :title="'大目标服务费说明'" :link="{path:'/fundWap/systemInfoDetail/8'}" ></cell>
            <cell class="cell" :border-intent="false" :title="'大目标是什么'" :link="{path:'/fundWap/systemInfoDetail/8'}"></cell>
            <cell class="cell" :border-intent="false" :title="'常见问题'" :link="{path:'/fundWap/systemInfoDetail/8'}" ></cell>
          </group>
        </div>

        <div class="linefd"></div>
        <div class="footer">
          <div class="bot">基金历史收益部代表其未来表现.<br/>【市场有风险,投资需谨慎。】</div>
        </div>

    <!-- </div> -->
  </div>
  <div class="footerFix">
    <div class="linefd"></div>
      <div class="timeFont">申购倒计时: {{hour}}小时{{min}}分{{second}}秒</div>
    <div class="linefd"></div>
    <flexbox style="text-align:center;">
      <flexbox-item ><div style="font-weight:bold;">3000元起投 0申购费</div><div style="font-size:10px;">需使用服务卡</div></flexbox-item>
      <flexbox-item ><x-button type="warn" link="/fundWap/targetOrder/2">申购</x-button></flexbox-item>
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
    /* text-align: center; */
    font-size:12px;
    margin:10px 10px 0px 10px;
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
  .linefd{
    border-bottom:1px solid rgb(230, 230, 230);
  }
  .targetfund .line{
    border-bottom:1px solid rgb(230, 230, 230);
    padding:10px 0 10px 0;
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
