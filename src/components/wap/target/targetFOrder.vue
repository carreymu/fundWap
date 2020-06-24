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

    <div style="padding: 15px; line-height: 30px;text-align:left;">
        <div>买入费率<span style="font-weight:bold;font-size:14px;padding-left:15px;">{{orderInfo.fee_ratio}}%&nbsp;</span></div>
        <div>确认日期<span style="padding-left:15px;">{{orderInfo.endDate}}{{orderInfo.weekday}}(预计)</span></div>
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
    <div class="footerFix">
      <div class="butt">
        <x-button type="warn" @click.native="processButton001">提交</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import targetFOrder  from  "./js/targetFOrder.js"
  export default targetFOrder
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
  .footerFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:125px;
    background:#F7F7F7;
  }
</style>
