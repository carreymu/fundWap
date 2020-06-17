<template>
<div>
    <div class="mytartop">
      <div class="topRmk">总资产(元)</div>
      <div class="top">{{myInfo.all_amt}}</div>
      <div class="botTxt">
        <div class="invIntro">
          <div class="ptop">
            <div class="inhdTxt">{{myInfo.inserttime}}收益</div>
            <div class="inbotTxt" v-if="myInfo.day_profit>=0">+{{myInfo.day_profit}}</div>
            <div class="inbotTxt" v-else>-{{myInfo.day_profit}}</div>
          </div>
          <div class="linkRight"></div>
          <div class="ptop">
            <div class="inhdTxt">持仓盈亏</div>
            <div class="inbotTxt" v-if="myInfo.all_profit>0">+{{myInfo.all_profit}}</div>
            <div class="inbotTxt" v-else>-{{myInfo.all_profit}}</div>
          </div>
        </div>
       </div>
    </div>
    <div class="mytars">
        <div>
            <div class="invIntro">
            <div style="padding-top:12px;">
                <div style="font-size:10px;">加入大目标(天)</div>
                <div style="text-align:center;">{{myInfo.reg_days}}</div>
            </div>
            <div class="linkRight"></div>
            <div style="padding-top:12px;">
                <div style="font-size:10px;">共达标</div>
                <div style="color:brown;font-size:13px;">5期</div>
            </div>
            <div class="linkRight"></div>
            <div style="padding-top:12px;">
                <div style="font-size:10px;">达标盈利(元)</div>
                <div style="color:brown;font-size:13px;">65981.76</div>
            </div>
            </div>
        </div>

        <div class="line"/>
        
        <div class="conTop">
            <div class="conTop">
                <flexbox>
                    <flexbox-item><div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">大目标2003</span></div></flexbox-item>
                    <flexbox-item><div style="text-align:right;font-size:11px;">9笔交易确认中 </div></flexbox-item>
                </flexbox>
            </div>
            <div class="rectAgl">
                <div class="invIntro">
                <div style="padding-top:12px;">
                    <div>04月30日+2.88%</div>
                    <div style="color:#d95353;font-size:13px;">+9500.02</div>
                </div>
                <div class="linkRight"></div>
                <div style="padding-top:12px;">
                    <div>持仓盈亏 +8.88%</div>
                    <div style="color:#d95353;font-size:13px;">10035.54</div>
                </div>
                </div>
            </div>
        </div>

        <div class="conTop">
        <div class="conTop">
            <flexbox>
                <flexbox-item><div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">大目标2004</span></div></flexbox-item>
            </flexbox>
        </div>
        <div class="rectAgl">
            <div class="invIntro">
            <div style="padding-top:12px;">
                <div>04月30日+2.88%</div>
                <div style="color:#d95353;font-size:13px;">+9500.02</div>
            </div>
            <div class="linkRight"></div>
            <div style="padding-top:12px;">
                <div>持仓盈亏 -2.88%</div>
                <div style="color:green;font-size:13px;">-10035.54</div>
            </div>
            </div>
        </div>
    </div>

    <div class="conTop">
        <div class="conTop">
            <flexbox>
                <flexbox-item><div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">大目标2005</span></div></flexbox-item>
                <flexbox-item><div style="text-align:right;font-size:11px;">1笔交易确认中 </div></flexbox-item>
            </flexbox>
        </div>
        <div class="rectAgl">
            <div class="invIntro">
            <div style="padding-top:12px;">
                <div>04月30日+2.88%</div>
                <div style="color:#d95353;font-size:13px;">+9500.02</div>
            </div>
            <div class="linkRight"></div>
            <div style="padding-top:12px;">
                <div>持仓盈亏 -2.88%</div>
                <div style="color:green;font-size:13px;">-10035.54</div>
            </div>
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
