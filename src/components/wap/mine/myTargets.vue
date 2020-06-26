<template>
<div>
    <div class="mytartop">
      <div class="topRmk">总资产(元)</div>
      <div class="top">{{myInfo.all_amt}}</div>
      <div class="botTxt">
        <div class="invIntro">
          <div class="ptop">
            <div class="inhdTxt">{{myInfo.now}}收益</div>
            <div class="inbotTxt" v-if="myInfo.daily_profit>=0">+{{myInfo.daily_profit}}</div>
            <div class="inbotTxt" v-else>-{{myInfo.daily_profit}}</div>
          </div>
          <div class="linkRight"></div>
          <div class="ptop">
            <div class="inhdTxt">持仓盈亏</div>
            <div class="inbotTxt" v-if="myInfo.hold_profit>=0">+{{myInfo.hold_profit}}</div>
            <div class="inbotTxt" v-else>-{{myInfo.hold_profit}}</div>
          </div>
        </div>
       </div>
    </div>
    <div class="mytars">
        <div>
            <div class="invIntro">
            <div style="padding-top:12px;">
                <div style="font-size:10px;">加入大目标(天)</div>
                <div style="text-align:center;">{{myInfo.joined_days}}</div>
            </div>
            <div class="linkRight"></div>
            <div style="padding-top:12px;">
                <div style="font-size:10px;">共达标</div>
                <div style="color:brown;font-size:13px;">{{myInfo.target_achivement}}期</div>
            </div>
            <div class="linkRight"></div>
            <div style="padding-top:12px;">
                <div style="font-size:10px;">达标盈利(元)</div>
                <div style="color:brown;font-size:13px;">{{myInfo.hold_profit}}</div>
            </div>
            </div>
        </div>

        <div class="line"/>
        
      <div v-for="(it,idx) in myInfo.hold_targets" :key="idx">
        <div class="conTop">
            <div class="conTop">
                <flexbox>
                    <flexbox-item><div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">{{it.name}}--{{it.iv_id}}</span></div></flexbox-item>
                    <flexbox-item>
                      <div style="text-align:right;font-size:11px;" v-if="it.trade_msg.length>0">{{it.trade_msg}}</div>
                    </flexbox-item>
                </flexbox>
            </div>
            <div class="rectAgl">
              <router-link :to="{path:'/fundWap/targetTemplate',query:{iv_id:it.iv_id}}">
                <div class="invIntro">
                <div style="padding-top:12px;">
                    <div>{{it.inserttime}} &nbsp;&nbsp;<span v-if="it.daily_profit_ratio>=0">+</span>{{it.daily_profit_ratio}}%</div>
                    <div v-if="it.daily_profit>=0" style="color:#d95353;font-size:13px;">+{{it.daily_profit_str}}</div>
                    <div v-else style="color:green;">{{it.daily_profit_str}}</div>
                </div>
                <div class="linkRight"></div>
                <div style="padding-top:12px;">
                    <div>持仓盈亏 &nbsp;&nbsp;<span v-if="it.hold_profit_ratio>=0">+</span>{{it.hold_profit_ratio}}%</div>
                    <div v-if="it.hold_profit>=0" style="color:#d95353;font-size:13px;">+{{it.hold_profit_str}}</div>
                    <div v-else style="color:green;">{{it.hold_profit_str}}</div>
                </div>
                </div>
              </router-link>
            </div>
        </div>
      </div>
  </div>
</div>
  
</template>
<script>
  import myTargets  from  "./js/myTargets.js"
  export default myTargets
</script>

<style>
  .mytartop{
    text-align: center;
    color:white;
    background-color:#db5361;
    padding-bottom:15px;
  }
  .mytartop .botTxt{
      padding:0 10px;
  }
  .mytartop .invIntro {
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
  .mytartop .invIntro .ptop{
      padding-top:12px;
  }
  .mytartop .invIntro .ptop .inhdTxt{
      font-size:10px;
  }
  .mytartop .invIntro .ptop .inbotTxt{
      font-size:14px;
  }
  .mytartop  .linkRight {
    margin:15px 0 5px 0;
    border-right: solid #fff 1px;
  }
  .mytartop .top{
    font-size: 20px;
    font-weight:600;    
  }
  .mytartop .topRmk{
    padding-top: 20px;
    font-size: 12px;
  }

  .mytars{
    color:dimgray;
    font-size:12px;
    margin:5px 10px 0px 10px;
  }
  .mytars .conTop{
      padding:5px 0;
  }
  .linkRight {
    margin-top:10px;
    border-right: solid #ACC0D8 1px;
  }
  .line{
    clear: both;
    border-bottom:1px solid rgb(230, 230, 230); 
    padding:0px 0 10px 0;
  }
  .mytars .rectAgl{
    height: 60px; 
    width: auto;
    background: #f0f0f0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color:  #f0f0f0;
  }
  .mytars .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    text-align: left;
  }
  .mytars .waitInvokeTxtTail{
    color:#000;
    padding-left:5px;
  }
  .mytars .invIntro {
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
</style>
