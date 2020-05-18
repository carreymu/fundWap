<template>
  <div class="tarstkord">
    <div class="load" v-if="chartData.data.length==0">
        <spinner type="lines"/>
    </div>
    <div v-else>
      <div style="padding:20px 15px;">
        <flexbox>
          <flexbox-item>
            <div class="fnt10"> 日涨跌幅</div>
            <div style="font-size:25px;">
              <span class="fntBrown" v-if="funcInfo.daily_change>0">+{{funcInfo.daily_change}}%</span>
              <span class="fntGreen" v-else>-{{funcInfo.daily_change}}%</span>
              </div>
            </flexbox-item>
          <flexbox-item><div class="fnt10">单位净值({{funcInfo.date}})</div>
          <div class="fnt25">{{funcInfo.value}}</div></flexbox-item>
        </flexbox>
        <div>
          <div class="stkF1">指数型</div> 
          <div class="stkF2">中风险</div>
        </div>
      </div>
      <div class="line"/>
      <div class="rctCont">
        <div class="dotIntro">
          <div>
            <div> 近一周</div>
            <div class="fntBrown">+0.03%</div>
            <div>733/944</div>
          </div>
          <div>
            <div> 近三月</div>
            <div class="fntGreen">-0.01%</div>
            <div>18/888</div>
          </div>
          <div>
            <div style="float:left;">
              <div> 近一年</div>
              <div class="fntBrown">+10.01%</div>
              <div>118/788</div>
            </div>
            <div style="float:right;">
              <div style="padding-top:10px;"></div>
              <div class="mor"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"/>
      <div>
        <div class="stkPre">基金收益率走势</div>
        <swiper v-model="index" height="260px" :show-dots="false">
          <swiper-item v-for="(item, index) in list2" :key="index">
            <div>
              <v-chart :data="chartData.data">
                <v-scale x field="date" type="timeCat" mask="MM-DD"/>
                <v-scale y field="value" :tick-count="5" />
                <v-axis y :label="lblFy"/>
                <v-line series-field="stock_name" :colors="chartData.color"/>
                <div v-for="(item, index) in chartData.tag" :key="index">
                  <v-guide type="html" :options="item" />
                </div>
              </v-chart>
           </div>
          </swiper-item>
        </swiper>
        <tab :scroll-threshold="5" :line-width=3 active-color='#db5361' bar-position="top" v-model="selectIdx">
          <tab-item @on-item-click="onItemClick"  class="fnt12" v-for="(item, index) in list2" :key="index">{{item}}</tab-item>
        </tab>
      </div>
      <div>
        <x-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
          <tr >
            <th>日期</th>
            <th>单位净值</th>
            <th>日涨跌幅</th>
          </tr>
        </thead>
        <tbody>
          <span v-for="(it,idx) in chartData.data" :key="idx">
          <tr>
            <td>{{it.inserttime}}</td>
            <td>{{it.worth}}</td>
            <td>
              <span class="fntBrown" v-if="it.daily_change>0">+{{it.daily_change}}%</span>
              <span class="fntGreen" v-else>-{{it.daily_change}}%</span>
              </td>
          </tr>
          </span>
          <!-- <tr>
            <td>2020-04-29</td>
            <td>1.25</td>
            <td class="fntGreen">-0.43%</td>
          </tr> -->
        </tbody>
      </x-table>
      <div class="seeMore">
        查看更多 >
      </div>
      <div>
        <!-- <div style="padding-top:12px;">
          <div style="float: left;">已清仓</div>
          <div style="float: right;">赎回明细 ></div>
        </div> -->
        <group>
          <cell class="fnt12" :border-intent="false" :title="'基金概况'" :value="funcInfo.fund_name" is-link></cell>
          <cell class="fnt12" :border-intent="false" :title="'基金经理'" :value="funcInfo.managers" is-link></cell>
          <cell class="fnt12" :border-intent="false" :title="'基金持仓'" is-link></cell>
          <cell class="fnt12" :border-intent="false" :title="'分红拆分'" is-link></cell>
        </group>
      </div>
      <div>
      <group>
        <cell class="fnt12" :border-intent="false" :title="'交易规则及费用'" is-link></cell>
      </group>
      </div>
      <div class="line"/>
        <div class="summary">
          基金行情数据及基金交易服务由川大爷的公司提供,基金销售服务资格暂时不告诉你.本页非任何法律文件,投资前请认真阅读基金合同.市场有风险,投资需谨慎。
          </div>
        <div class="line"></div>
      </div>
    </div>
  <div class="tarsofooterFix">
    <div style="padding:0 5px;">
    <flexbox>
      <flexbox-item>
        <div class="fnt11"> 申购费率:<span style="color:brown;"> 1折起</span></div>
        </flexbox-item>
      <flexbox-item>
        <x-button :gradients="['#A644FF', '#FC5BC4']" class="fnt13" >定投</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button :gradients="['#FF2719', '#FF61AD']" class="fnt13" link="/fundWap/targetOrder/2">申购</x-button>
      </flexbox-item>
    </flexbox>
    </div>
  </div>

  </div>
</template>
<script>
  import targetStockOrder  from  "./js/targetStockOrder.js"
  export default targetStockOrder
</script>
<style>
a:link {
 font-size: 12px;
 color: #000000;
 text-decoration: none;
}
a:visited {
 font-size: 12px;
 color: #000000;
 text-decoration: none;
}
a:hover {
 font-size: 12px;
 color: #999999;
}
.tarstkord{
  font-size:12px;
  color:dimgray;
}
.line{border-bottom:1px solid rgb(230, 230, 230);}
.tarstkord .dotIntro{
  display:-webkit-flex;
  display: flex;
  justify-content: space-around;
}
.tarstkord .mor:after {
    content: " ";
    display: inline-block;
    height: 20px;
    width: 20px;
    border-width: 2px 2px 0 0;
    border-color: #ccc;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: absolute;
  }
.tarstkord .load{
  text-align: center;
  height: 250px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.tarstkord .stkF1{
  float:left;padding:2px;border:1px solid #ccc;
}
.tarstkord .stkF2{
  float:left;padding:2px;border:1px solid #ccc;margin-left:3px;
}
.tarstkord .rctCont{
  font-size:10px;
  padding:10px 0 0 10px;
}
.tarstkord .stkPre{
  padding:10px 0 0 10px;
  font-size:14px;
}
.tarstkord .fntBrown{
  color:brown;
}
.tarstkord .fntGreen{
  color:green;
}
.tarstkord .fnt25{
  font-size:25px;
}
.tarstkord .fnt13{
  font-size:12px;
}
.tarstkord .fnt12{
  font-size:12px;
}
.tarstkord .fnt11{
  font-size:11px;
}
.tarstkord .fnt10{
  font-size:10px;
}
.tarstkord .seeMore {
  text-align:center;
  padding-top:10px;
  font-size:13px;
}
.tarstkord .summary{
  font-size:10px;
  padding:10px 10px;
  height:90px;
}
.tarstkord .tarsofooterFix{
  position:absolute;
  bottom:0;
  width:100%;
  height:90px;
  background:#F7F7F7;
}
</style>