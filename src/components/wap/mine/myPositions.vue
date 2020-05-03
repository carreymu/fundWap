<template>
  <div class="mypo">
    <div>
    <div class="topRmk">总资产(元)</div>
    <div class="top">2,100,200.00</div>
    </div>

    <div style="padding:0 10px 0 20px;">
        <flexbox>
        <flexbox-item :span="0.35">
            <div >04月30日 
                <span class="aimRmkMoney"><img src="../../../assets/images/update_done.png" width="50" height="18"/></span>
            </div>
            <div>10200.36</div>
        </flexbox-item>
        <flexbox-item class="topInfo">
            <div>持仓盈亏</div>
            <div>-150200.36</div>
        </flexbox-item>
        <flexbox-item class="topInfo">
            <div>累计盈亏</div>
            <div>-30200.39</div>
        </flexbox-item>
    </flexbox>
    </div>

    <div style="padding:15px 0;">
    <x-table>
        <tr>
            <th>交易记录</th>
            <th width="50%">我的定投</th>
        </tr>
    </x-table>
    </div>

    <div style="text-align:center;" v-if="redemption.length>0">
        <router-link :to="'#'">{{redemption}} &nbsp; ></router-link>
    </div>
    <div class="line"/>
    
    <div>
      <div style="padding:15px 0 5px 0;">
        <flexbox>
          <flexbox-item><div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">大目标</span></div></flexbox-item>
          <flexbox-item><div style="text-align:right;"><router-link :to="'/fundWap/myTargets'">持有3期&nbsp;> </router-link></div></flexbox-item>
        </flexbox>
      </div>
      <div class="rectAgl">
        <div class="invIntro">
          <div style="padding-top:20px;">
            <div>04月30日+2.88%</div>
            <div style="color:#d95353;">+9500.02</div>
          </div>
          <div class="linkRight"></div>
          <div style="padding-top:20px;">
            <div>持仓盈亏 -2.88%</div>
            <div style="color:green;">-10035.54</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div style="padding:15px 0 5px 0;">
        <div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">鸡腿计划</span></div>
      </div>
      <div class="rectAgl">
        <div class="invIntro">
          <div style="padding-top:20px;">
            <div>04月30日+2.88%</div>
            <div style="color:#d95353;">+9500.02</div>
          </div>
          <div class="linkRight"></div>
          <div style="padding-top:20px;">
            <div>持仓盈亏 -2.88%</div>
            <div style="color:green;">-10035.54</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div style="padding:15px 0 5px 0;">
        <div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">活期理财</span></div>
      </div>
      <div class="rectAgl">
        <div class="invIntro">
          <div style="padding-top:20px;">
            <div>04月30日+2.88%</div>
            <div style="color:#d95353;">+9500.02</div>
          </div>
          <div class="linkRight"></div>
          <div style="padding-top:20px;">
            <div>持仓盈亏 -2.88%</div>
            <div style="color:green;">-10035.54</div>
          </div>
        </div>
      </div>
    </div>

    <div class="line"/>
    <div style="padding-top:15px;">
      <div style="float: left;">已清仓</div>
      <div style="float: right;">赎回明细 ></div>
    </div>
    <div class="line"/>
    <!-- <toast v-model="showMsg" type="text"  width="20em" class="showMsg" :time="2000">coming soon....</toast> -->
  </div>
</template>
<script>
  import myPositions  from  "./js/myPositions.js"
  export default myPositions
</script>

<style>
  .mypo{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .linkRight {
    margin-top:20px;
    border-right: solid #ACC0D8 1px;
  }
  .line{
    clear: both;
    border-bottom:1px solid rgb(230, 230, 230); 
    padding:0px 0 10px 0;
  }
  .mypo .avastar{
    height:40px;
    width:40px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
  }
  .mypo .rectAgl{
    height: 70px; 
    width: auto;
    background: #f0f0f0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color:  #f0f0f0;
    /* color: white; */
  }
  .mypo .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    /* padding-left:10px; */
    text-align: left;
  }
  .mypo .waitInvokeTxtTail{
    color:#000000;padding-left:5px;
  }
  .mypo .invIntro {
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
  .mypo .top{
    font-size: 20px;
    font-weight:600;
    padding-bottom: 10px;
    text-align: center;
  }
  .mypo .topRmk{
    color:dimgray;
    text-align: center;
    padding-top: 20px;
  }
  .mypo .topInfo{
    font-size: center;
  }

  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }

  .mypo .rectAgl .aimRmk{
    /* text-align:center; */
    margin-left:5px;
  }
  .mypo .rectAgl .aimRmkMoney{
    font-weight: 800;
    font-size: 14px;
  }
  .mypo .msg{
    font-size: 12px;
  }  


</style>
