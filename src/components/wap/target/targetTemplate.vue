<template>
  <div class="mypo">
    <div>
    <div class="topRmk">持仓收益率</div>
    <div class="top">2,100,200.01</div>
    <div class="topRmk">{{fundtemp.apply_endtime}}加入以来</div>
    </div>

    <div style="padding:0 10px 0 20px;">
        <flexbox>
        <flexbox-item :span="0.38">
            <div>{{target.now}}</div>
            <div v-if="target.daily_profit>0" style="color:#d95353;font-size:13px;">+{{target.daily_profit}}</div>
            <div v-else style="color:green;font-size:13px;">{{target.daily_profit}}</div>
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
      <div style="padding:10px;">汇添富中证主要消费ETF联接(000248)</div>
      <div class="invIntro">
        <div style="padding-top:5px;">
            <div>04月30日+2.88%</div>
            <div style="color:#d95353;">+9500.02</div>
        </div>
        <div class="botLineRight"></div>
        <div style="padding-top:5px;">
            <div>持仓盈亏 -2.88%</div>
            <div style="color:green;">-10035.54</div>
        </div>
      </div>
      <div class="line"/> 

    <div style="padding:10px;">天弘创业板ETF联接(001593)</div>
    <div class="invIntro">
        <div style="padding-top:5px;">
            <div>04月30日+2.88%</div>
            <div style="color:#d95353;">+9500.02</div>
        </div>
        <div class="botLineRight"></div>
        <div style="padding-top:5px;">
            <div>持仓盈亏 -2.88%</div>
            <div style="color:green;">-10035.54</div>
        </div>
      </div>
      <div class="line"/> 
    </div>

    <div style="padding-top:15px;">
      <div style="float: left;">已清仓</div>
      <div style="float: right;">赎回明细 ></div>
    </div>
    <!-- <toast v-model="showMsg" type="text"  width="20em" class="showMsg" :time="2000">coming soon....</toast> -->
  </div>
</template>
<script>
  import targetTemplate  from  "./js/targetTemplate.js"
  export default targetTemplate
</script>

<style>
  .tartmp{
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
  .tartmp .rectAgl{
    height: 70px; 
    width: auto;
    background: #f0f0f0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color:  #f0f0f0;
  }
  .tartmp .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    text-align: left;
  }
  .tartmp .waitInvokeTxtTail{
    color:#000000;padding-left:5px;
  }
  .tartmp .invIntro {
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
  .tartmp .top{
    font-size: 20px;
    font-weight:600;
    padding-bottom: 10px;
    text-align: center;
  }
  .tartmp .topRmk{
    color:dimgray;
    text-align: center;
    padding-top: 20px;
  }
  .tartmp .topInfo{
    text-align: center;
  }
  .tartmp .rectAgl .aimRmkMoney{
    font-weight: 800;
    font-size: 14px;
  }
</style>
