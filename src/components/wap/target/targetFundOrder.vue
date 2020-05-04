<template>
<div>
  <div class="tarfndord">
    <div style="text-align:center;" v-if="list2.length==0">
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

      <div>
        <tab :line-width=1 active-color='#db5361' v-model="index">
          <tab-item class="vux-center" v-for="(item, index) in list2" 
          :key="index" @on-item-click="onItemClick">{{item}}</tab-item>
        </tab>
        <swiper v-model="index" height="260px" :show-dots="false">
          <swiper-item v-for="(item, index) in list2" :key="index">
            <div class="tabSwiper">&nbsp;&nbsp;&nbsp;七日年化
              <v-chart :data="data" prevent-default>
                <!-- <v-scale x :tick-count="4" /> -->
                <v-scale x field="date" :tick-count="4"/>
                <v-scale y field="value" :min="0" :tick-count="5" />
                <v-axis y :label="labelFormat"/>
                <v-tooltip :show-item-marker="false" show-x-value />
                <v-line :colors="lineColor" shape="smooth"/>
              </v-chart>
            </div>
          </swiper-item>
        </swiper>
      </div>

      <div style="height:95px;">
        <div class="linefd"></div>
          <div style="float:left;padding:10px;"> 基金信息</div>
          <div style="float:right;padding:10px;"> > </div>
        <div class="linefd"></div>
      </div>

    </div>
  </div>
  <div class="tarfooterFix">
    <x-button type="warn"  link="/fundWap/targetOrder/2">申购</x-button>
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
  .linefd{
    border-bottom:1px solid rgb(230, 230, 230);
  }
  .tarfooterFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:97px;
    background:#F7F7F7;
  }
  .tarfndord .tabSwiper {
    background-color: #fff;
    height: 260px;
  }
</style>
