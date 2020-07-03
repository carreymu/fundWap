<template>
  <div>
  <div class="bcp">
    <div>
    <div class="topRmk">持仓收益率</div>
    <div v-if="target.hold_profit_ratio>0" class="rtop">{{target.hold_profit_ratio}}%</div>
    <div v-else class="gtop">{{target.hold_profit_ratio}}%</div>
    <div class="botRmk">{{fundtemp.apply_endtime}}加入以来</div>
    </div>

    <div style="padding:0 10px 0 20px;">
        <flexbox>
        <flexbox-item>
            <div>{{target.now}}</div>
            <div v-if="target.daily_profit>0" style="color:#d95353;font-size:17px;">+{{target.daily_profit}}</div>
            <div v-else style="color:green;font-size:17px;">{{target.daily_profit}}</div>
        </flexbox-item>
        <flexbox-item class="topInfo">
            <div>持仓收益</div>
            <div v-if="target.hold_profit>0" style="color:#d95353;font-size:13px;">+{{target.hold_profit}}</div>
            <div v-else style="color:green;font-size:13px;">{{target.hold_profit}}</div>
        </flexbox-item>
        <flexbox-item class="topInfo">
            <div>持有总额</div>
            <div style="color:#d95353;font-size:13px;">{{target.hold_amt}}</div>
        </flexbox-item>
    </flexbox>
    </div>

    <div class="line"/> 

    <div style="padding:10px;">
        <div style="float:left;">目标收益{{fundtemp.target_ratio}}%</div>
        <div style="float:right;">产品已运行{{fundtemp.run_days}}天</div>
    </div>

    <div class="line"/> 
    
    <div>
      <div style="padding:15px 0 5px 0;">
        <flexbox>
          <flexbox-item><div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">持仓动态</span></div></flexbox-item>
          <flexbox-item><div style="text-align:right;"><router-link :to="'/fundWap/myTargets'">全部&nbsp;> </router-link></div></flexbox-item>
        </flexbox>
      </div>
      <div class="rectAgl">
        <router-link :to="'/fundWap/myTargets'">
        <div class="invIntro">
          <div style="padding:10px;font-size:14px;width:45px;background-color:font-weight:bold;">
            <div>04月</div>
            <div>30日</div>
          </div>
          <div class="midLineRight"></div>
          <div style="padding:10px;">
            <div>04月24日[大目标]投资播报</div>
            <div style="font-size:10px;">今日大盘上涨0.3%。预计今天[大目标]收益范围在上涨0.09%至0.23%之间</div>
          </div>
        </div>
        </router-link>
      </div>
    </div>

    <div>
      <div style="padding:15px 0 5px 0;">
        <div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">持仓基金</span></div>
      </div>
      <div v-for="(it,idx) in fund_lst" :key="idx">
        <div style="padding:10px;">{{it.fund_name}}</div>
        <div class="invIntro">
          <div style="padding-top:5px;">
              <div>持有总金额</div>
              <div style="color:#d95353;">{{it.hold_amt}}</div>
          </div>
          <div class="botLineRight"></div>
          <div style="padding-top:5px;">
              <div>{{it.now}}收益</div>
              <div v-if="it.daily_profit>=0" style="color:#d95353;">+{{it.daily_profit}}</div>
              <div v-else style="color:green;">{{it.daily_profit}}</div>
          </div>
        </div>
        <div class="line"/>
      </div>
    </div>

    <div style="padding: 10px 0px 70px 10px;">
      <div style="float: left;">交易记录</div>
      <div style="float: right;"> ></div>
    </div>
    
    <toast v-model="showMsg" type="text"  width="20em" class="showMsg" :time="2000">coming soon....</toast>
  </div>
  <div class="ttpfooterFix">
      <x-button type="default" @click.native="redeem()"><span style="font-size:12px">赎回</span></x-button>
  </div> 
  </div>
</template>
<script>
  import bestChoicePlan  from  "./js/bestChoicePlan.js"
  export default bestChoicePlan
</script>

<style>
  .bcp{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .midLineRight {
    margin-top:5px;
    height: 50px;
    border-right: solid #ACC0D8 1px;
  }
  .botLineRight {
    margin-top:5px;
    height: 30px;
    border-right: solid #ACC0D8 1px;
  }
  .line{
    clear: both;
    border-bottom:1px solid rgb(230, 230, 230); 
    padding:0px 0 10px 0;
  }
  .bcp .rectAgl{
    height: 70px; 
    width: auto;
    background: #f0f0f0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color:  #f0f0f0;
  }
  .bcp .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    text-align: left;
  }
  .bcp .waitInvokeTxtTail{
    color:#000000;padding-left:5px;
  }
  .bcp .invIntro {
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
  .bcp .rtop{
    font-size: 30px;
    font-weight:600;
    color:#db5361;
    padding: 10px 0px;
    text-align: center;
  }
  .bcp .gtop{
    font-size: 30px;
    font-weight:600;
    color:green;
    padding: 10px 0px;
    text-align: center;
  }
  .bcp .topRmk{
    color:dimgray;
    text-align: center;
  }
  .bcp .botRmk{
    color:dimgray;
    text-align: center;
    padding-bottom: 10px;
  }
  .bcp .topInfo{
    text-align: center;
  }
  .bcp .rectAgl .aimRmkMoney{
    font-weight: 800;
    font-size: 14px;
  }
  .ttpfooterFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:97px;
    background:#F7F7F7;
  }
</style>
