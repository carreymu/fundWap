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
              <span class="fntBrown" v-if="funcInfo.daily_ratio>0">+{{funcInfo.daily_ratio}}%</span>
              <span class="fntGreen" v-else>{{funcInfo.daily_ratio}}%</span>
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
          <div  v-for="(ite,indx) in fundWorthStage" :key="indx">
          <div v-if="indx!=fundWorthStage-1">
            <div> {{ite.stages}}</div>
            <div>
              <span class="fntBrown" v-if="ite.worth>0">+{{ite.worth}}%</span>
              <span class="fntGreen" v-else>{{ite.worth}}%</span>
            </div>
            <div>{{ite.topn}}/{{ite.his_tot}}</div>
          </div>
          <div v-else>
            <!--todo:使用v-else后右箭头没了-->
            <div>
              <div style="float:left;">
                <div> {{ite.stages}}</div>
                <div>
                  <span class="fntBrown" v-if="ite.worth>0">+{{ite.worth}}%</span>
                  <span class="fntGreen" v-else>{{ite.worth}}%</span>
                </div>
                <div>{{ite.topn}}/{{ite.his_tot}}</div>
              </div>
              <div style="float:right;">
                <div style="padding-top:10px;"></div>
                <div class="mor"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="line"/>
      <div>
        <div class="stkPre">基金收益率走势</div>
        <swiper v-model="index" height="260px" :show-dots="false">
          <swiper-item v-for="(item, index) in timeRange" :key="index">
            <div>
              <v-chart :data="chartData.data">
                <v-scale x field="date" type="timeCat" mask="MM-DD"/>
                <v-scale y field="value" :tick-count="5" />
                <v-axis y :label="lblFy"/>
                <v-line series-field="stock_name" shape="smooth" :colors="chartData.color"/>
                <div v-for="(item, index) in chartData.tag" :key="index">
                  <v-guide type="html" :options="item" />
                </div>
              </v-chart>
           </div>
          </swiper-item>
        </swiper>
        <tab :scroll-threshold="5" :line-width=3 active-color='#db5361' bar-position="top" v-model="selectIdx">
          <tab-item @on-item-click="onItemClick(index,it)" v-for="(it,index) in timeRange" :key="index" class="fnt12">{{Object.keys(it)[0]}}</tab-item>
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
          <tr v-for="(it,idx) in chartData.alldata" :key="idx">
            <td>{{it.date}}</td>
            <td>{{it.value}}</td>
            <td>
              <span class="fntBrown" v-if="it.daily_ratio>0">+{{it.daily_ratio}}%</span>
              <span class="fntGreen" v-else>-{{it.daily_ratio}}%</span>
            </td>
          </tr>
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
        <div class="summary">{{funcInfo.notice}}</div>
        <div class="line"></div>
      </div>
    </div>
  <div class="tarsofooterFix" v-if="chartData.data.length>0">
    <div style="padding:0 5px;">
    <flexbox>
      <flexbox-item>
        <div class="fnt11"> 申购费率:<span style="color:brown;"> 1折起</span></div>
        </flexbox-item>
      <flexbox-item>
        <x-button :gradients="['#A644FF', '#FC5BC4']" class="fnt13" :link="{path:'/fundWap/targetSOrder',query:{fid:funcInfo.fid,sch:true}}">定投</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button :gradients="['#FF2719', '#FF61AD']" class="fnt13" :link="{path:'/fundWap/targetSOrder',query:{fid:funcInfo.fid}}">申购</x-button>
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
  font-size:13px;
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