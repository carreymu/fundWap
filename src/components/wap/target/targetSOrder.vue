<template>
  <div class="targetOrder">
    <div class="topcontext">
		<div style="padding:10px;">{{orderInfo.target_name}}</div>
      <div class="aimRate">
        <group>
          <x-input title="￥" type="number" :icon-type="iconType" required v-model="amount"  
          :placeholder="'最低买入'+orderInfo.init_amt+'元'" @on-change="change"></x-input>
          <!-- @keyup.enter.native="f" -->
        </group>
      </div>
    </div>

    <div>
      <div v-if="sched">
        <group>
          <popup-picker style="font-size:12px;" title="定投频率" :data="freqList" :columns="2" v-model="freqVal" show-name></popup-picker>
        </group>
        <!-- <div class="linefd"></div> -->
        <div class="invIntro">
          <div style="text-align:left;">买入费率</div>
          <div style="font-weight:bold;font-size:14px;">{{orderInfo.fee_ratio}}%&nbsp;&nbsp;</div>
          <div>费率说明 <x-icon type="ios-help-outline" size="15"></x-icon></div>
        </div>
        <div class="invIntro">
          <div style="text-align:left;">首笔扣款日</div>
          <div>{{orderInfo.endDate}}&nbsp;&nbsp;{{orderInfo.weekday}}</div>
          <div style="width:40px;"></div>
        </div>
      </div>
      <div v-else>
        <div class="invIntro">
          <div style="text-align:left;width:50px;">买入费率</div>
          <div style="font-weight:bold;font-size:14px;">{{orderInfo.fee_ratio}}%</div>
          <div>费率说明 <x-icon type="ios-help-outline" size="15"></x-icon></div>
        </div>
        <div style="padding-left:30px;font-size:11px;color:#999999;line-height:25px;">
          <div style="float:left;">确认净值</div>
          <div style="float:right;width:70%;">15:00之前提交将按{{orderInfo.startDate}}日净值确认份额.</div>
        </div>
        <div class="invIntro">
          <div style="text-align:left;width:50px;">&nbsp;确认日期</div>
          <div>{{orderInfo.endDate}}{{orderInfo.weekday}}(预计)</div>
          <div style="width:40px;"></div>
        </div>
        <!-- <x-table :cell-bordered="false" :content-bordered="false" class="aimRmkSub">
          <tr>
            <td>买入费率</td>
            <td style="font-weight:bold;font-size:14px;">{{orderInfo.fee_ratio}}%&nbsp;</td>
            <td>费率说明 <x-icon type="ios-help-outline" size="15"></x-icon></td>
          </tr>
          <tr>
            <td>确认净值</td>
            <td colspan="2">15:00之前提交将按{{orderInfo.startDate}}日净值确认份额</td>
          </tr>
          <tr>
            <td>确认日期</td>
            <td>{{orderInfo.endDate}}{{orderInfo.weekday}}(预计)</td>
            <td></td>
          </tr>
        </x-table> -->
      </div>


      <div class="linefd"></div>
      <popover placement="bottom">
        <div slot="content" style="font-size:12px;">
          本次就到这吧,下回分解。
        </div>
        <flexbox style="padding:10px 5px;">
          <flexbox-item :span="1/6">资金来源</flexbox-item>
          <flexbox-item :span="0.7">
            <div style="font-weight:bold;">{{orderInfo.bank_name}}<span style="font-size:10px;">({{orderInfo.card_tail}})</span></div>
            <div>{{orderInfo.policy}}</div>
          </flexbox-item>
          <flexbox-item style="text-align:right;padding-right:10px;">></flexbox-item>
        </flexbox>
      </popover>
      <div class="linefd"></div>

      <div class="contract" v-if="sched">
        <check-icon :value.sync="isChecked" type="plain"> 
          <router-link :to="{path:'/fundWap/systemInfoDetail',query:{sid:20}}">已认真阅读并同意《金金豆大目标产品管理协议》</router-link>
        </check-icon>
      </div>
    </div>

    <div class="footerFix">
      <div class="butt">
        <x-button :disabled="!isChecked" type="warn" @click.native="processButton001">提交</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import targetSOrder  from  "./js/targetSOrder.js"
  export default targetSOrder
</script>

<style>
  .targetOrder{
    text-align: center;
    font-size:12px;
    color:#666;
    margin:10px 10px 0px 10px;
  }
  .targetOrder .butt{
    padding:5px 40px 10px 20px;
    text-align:center;
  }
  .targetOrder .contract{
    padding-top:5px;
    font-size:12px;
  }
 .targetOrder .topcontext{
    padding: 0px 10px;
  }
  .linefd{
    border-bottom:1px solid rgb(230, 230, 230);
  }
  .targetOrder .line{
    border-bottom:1px solid rgb(230, 230, 230);
    padding:10px 0 10px 0;
  }  
  .targetOrder .aimRate{
    font-size: large;
    text-align: center;
  } 
  .targetOrder .aimRmkSub{
    text-align:center;
    color:#999999;
    font-size:11px;
    margin-top: 10px;
  }
  .targetOrder .invIntro{
    line-height: 35px;
    clear: both;
    color:#999999;
    font-size:11px;
    /* margin-top:10px; */
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
  }
  .footerFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:125px;
    background:#F7F7F7;
  }

  .targetOrder .tryitbtn {
    display: inline-block;
    color: #FFF;
    background-color: #8ac007;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    padding-bottom: 4px;
    text-decoration: none;
    margin-left: 5px;
    margin-top: 0;
    margin-bottom: 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
    white-space: nowrap;
}
</style>
