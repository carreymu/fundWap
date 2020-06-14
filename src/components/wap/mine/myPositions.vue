<template>
  <div class="mypo">
    <div>
    <div class="topRmk">总资产(元)</div>
    <div class="top">{{myInfo.all_amt}}</div>
    </div>

    <div style="padding:0 10px 0 20px;">
        <flexbox>
        <flexbox-item :span="0.38">
            <div >04月30日 
                <span class="aimRmkMoney"><img src="../../../assets/images/update_done.png" width="48" height="18"/></span>
            </div>
            <div>{{myInfo.daily_profit}}</div>
        </flexbox-item>
        <flexbox-item class="topInfo">
            <div>持仓盈亏</div>
            <div>{{myInfo.hold_profit}}</div>
        </flexbox-item>
        <flexbox-item class="topInfo">
            <div>累计盈亏</div>
            <div>{{myInfo.all_profit}}</div>
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
          <flexbox-item><div style="text-align:right;"><router-link :to="'/fundWap/myTargets'">持有{{myTargets.length}}期&nbsp;> </router-link></div></flexbox-item>
        </flexbox>
      </div>
      <div v-for="(it,idx) in myTargets" :key="idx" style="padding:5px;">
        <div class="rectAgl">
          <div class="invIntro">
            <div style="padding-top:12px;">
              <div>{{it.inserttime}}+2.88%</div>
              <div v-if="it.daily_profit>0" style="color:#d95353;">+{{it.daily_profit}}</div>
              <div v-if="it.daily_profit<0" style="color:green;">-{{it.daily_profit}}</div>
            </div>
            <div class="linkRight"></div>
            <div style="padding-top:12px;">
              <div>持仓盈亏 -2.88%</div>
              <div v-if="it.hold_profit>0" style="color:#d95353;">+{{it.hold_profit}}</div>
              <div v-if="it.hold_profit<0" style="color:green;">-{{it.hold_profit}}</div>
            </div>
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
          <div style="padding-top:12px;">
            <div>04月30日+2.88%</div>
            <div style="color:#d95353;">+9500.02</div>
          </div>
          <div class="linkRight"></div>
          <div style="padding-top:12px;">
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
          <div style="padding-top:12px;">
            <div>04月30日+2.88%</div>
            <div style="color:#d95353;">+9500.02</div>
          </div>
          <div class="linkRight"></div>
          <div style="padding-top:12px;">
            <div>持仓盈亏 -2.88%</div>
            <div style="color:green;">-10035.54</div>
          </div>
        </div>
      </div>
    </div>

    <div class="line"/>
    <div style="padding-top:12px;">
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
  .mypo .rectAgl{
    height: 60px; 
    width: auto;
    background: #f0f0f0;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color:  #f0f0f0;
  }
  .mypo .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
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
    text-align: center;
  }
  .mypo .rectAgl .aimRmkMoney{
    font-weight: 800;
    font-size: 14px;
  }
</style>
