<template>
<div>
  <div class="tarfndord">
    <div v-if="fundList.length==0">
      <spinner type="lines"/>
    </div>
    <div v-else>
       <div style="margin:15px 0 5px 10px;">
          <div style="line-height:25px;">天弘鸿运宝A(001386)</div>
          <div><span style="color:brown;">货币型</span>&nbsp;&nbsp;  | &nbsp;&nbsp; 76/722</div>
        </div>
      <div class="linefd"></div>
      <div style="padding:10px 80px;color:#666">
        <div style="float: left;">
            <div>七日年化</div>
            <div class="ratio">+2.08%</div>
        </div>
        <div style="float: right;">
            <div>万份收益</div>
            <div class="ratio">0.6096</div>
        </div>
      </div>
    
      <div class="linefd"></div>
      <div class="itfoIntro">
        <div class="tfotitle">基金经理</div>
        <div class="tfoMen">李晨,范冰冰,王遗风 ></div>
        <div class="tfolinkRight"></div>
        <div class="tfotitle">申购费率</div>
        <div class="tfopdTop">0.00%</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div class="linefd"></div>




      <flexbox orient="vertical">
        <flexbox-item>
        <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">本期基金</span></div>
        <div style="float:right;"><router-link :to="'/fundWap/'+sysInfo.url+'/'+sysInfo.sid"><x-icon type="ios-help-outline" size="15"></x-icon></router-link></div>
        </flexbox-item>
      </flexbox>

      <div style="padding:5px 0;">
        <div v-for="(item,idx) in fundList" :key="idx"  style="clear:both;padding:5px 5px;color:#666;">
            <div style="float: left;">{{item.fundName}}({{item.fundCode}})</div>
            <div style="float: right;" v-if="idx==0"><router-link :to="'/fundWap/targetFundOrder/'+item.id">{{item.percent}}&nbsp; ></router-link></div>
            <div style="float: right;" v-else><router-link :to="'/fundWap/targetStockOrder/'+item.id">{{item.percent}}%&nbsp; ></router-link></div>
        </div>
      </div>

      <div class="line"></div>
      <div style="padding-top:5px;">
          <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">服务内容</span></div>
          <div style="clear:both;margin-left:10px;line-height:25px;text-align:left;" v-html="serviceInfo"></div>
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

    </div>
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
  import targetFundOrder  from  "./js/targetFundOrder.js"
  export default targetFundOrder
</script>

<style>
  .tarfndord{
    /* text-align: center; */
    font-size:12px;
    /* margin:10px 10px 0px 10px; */
  }
  .tarfndord .ratio{
      color:brown;
      font-size: 14px;
      margin-bottom: 5px;
  }
  .tarfndord .itfoIntro{
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding-top: 5px;
  }
  .tarfndord .itfoIntro .tfolinkRight{
    margin-top:5px;
    margin-bottom:5px;
    border-right: solid #ACC0D8 1px;
  }
  .tarfndord .itfoIntro .tfopdTop{
    padding-top:10px;
  }
  .tarfndord .itfoIntro .tfotitle{
    color:#666;
    padding-top:10px;
  }
  .tarfndord .itfoIntro .tfoMen{
    width:80px;
    padding-top:5px;
  }
  .tarfndord .cell{
    font-size:13px;
  }
 .tarfndord .topcontext{
    /* padding: 15px 40px 20px 40px; */
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
  }
  .linefd{
    border-bottom:1px solid rgb(230, 230, 230);
  }
  .tarfndord .line{
    border-bottom:1px solid rgb(230, 230, 230);
    padding:10px 0 10px 0;
  }  
  .tarfndord .aimRate{
    font-size: x-large;
    text-align: center;
  }
  .tarfndord .aimLast{
    font-size: x-large;
    text-align: center;
  }
  .tarfndord .aimRmk{
    text-align:center;
    color:#999999;
    margin-left:5px;
  }  
  .tarfndord .aimRmkSub{
    text-align:center;
    color:#999999;
    font-size:11px;
    margin-bottom: 10px;
  }

  .tarfndord .waitInvokeTxtPre{
    color:brown;
    font-weight:900;
    font-size: 15px;
    padding-left:5px;
    float: left;
    clear: both;
  }
  .tarfndord .waitInvokeTxtTail{
    color:#000000;padding-left:5px;
  }
  .tarfndord .footer{
    text-align:center;
    color:#666;
  }
  .tarfndord .footer .bot{
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
  .tarfndord .slopingside{
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
