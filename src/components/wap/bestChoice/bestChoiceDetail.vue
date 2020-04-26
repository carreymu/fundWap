<template>
  <div class="bestChoiceDetail">
    <div class="topImg">
      <div class="topTxt"><span style="color:brown">{{mainData.joinNums}}</span>人已购买</div>
    </div>
    <div class="txt">
      <flexbox class="aim">
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item class="rmk">{{mainData.annEarnLong}}</flexbox-item>
            <flexbox-item class="rateIn">+{{mainData.rateProfit}}%</flexbox-item>          
          </flexbox>
        </flexbox-item>
        <!-- <flexbox-item>
          //////////
        </flexbox-item> -->
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item class="rmk">历史最大亏损</flexbox-item>
            <flexbox-item class="rateOut">{{mainData.rateLoss}}%</flexbox-item>         
          </flexbox>
        </flexbox-item>
      </flexbox>
      <div class="midBox">
        <flexbox>
          <flexbox-item>
          <div  class="itemDesc">
            {{mainData.description}}
          </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="midChk">
      <flexbox class="midTxt">
        <flexbox-item><span class="ico">☑</span> &nbsp;明星经理</flexbox-item>
        <flexbox-item><span class="ico">☑</span> &nbsp;领跑同类</flexbox-item>
        <flexbox-item><span class="ico">☑</span> &nbsp;千里挑一</flexbox-item>
      </flexbox>
    </div>

    <div>
      <tab :line-width=2 active-color='#DA5162' v-model="index">
        <tab-item style="font-size:12px;" v-for="(item, index) in chartData" :key="index">{{item.name}}</tab-item>
      </tab>
      <swiper v-model="index" height="260px" :show-dots="false">
        <swiper-item v-for="(item, index) in chartData" :key="index">
          <v-chart :data="item.data">
            <v-line series-field="type" />
          </v-chart>
        </swiper-item>
      </swiper>
      <flexbox>
        <flexbox-item>
          <x-button @click.native="index=0" mini v-if="index===0" plain type="warn" class="timeBtn">近1月</x-button>
          <x-button @click.native="index=0" mini v-else  class="timeBtn">近1月</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button @click.native="index=1" mini v-if="index===1" plain type="warn"  class="timeBtn">近3月</x-button>
          <x-button @click.native="index=1" mini v-else  class="timeBtn">近3月</x-button>
        </flexbox-item>
        <!-- to do, add event -->
        <flexbox-item><x-button @click.native="next" mini class="timeBtn">近6月</x-button></flexbox-item>
        <flexbox-item><x-button @click.native="next" mini class="timeBtn">近1年</x-button></flexbox-item>
        <flexbox-item><x-button @click.native="prev" mini class="timeBtn">近3年</x-button></flexbox-item>
      </flexbox>

    </div>

    <div>
    <group >
      <cell title="组合基金配置" is-link class="group">
        <span>查看消息 </span>
      </cell>
    </group>
    </div>
    
    <div v-for="(item,index) in fTypeList" :key="index">
        <div class="funds"><span :style="'color:'+item.color">■</span> {{item.name}}</div>
        <div class="fundsDetail">
          <flexbox orient="vertical">
            <flexbox-item v-for="(it,idx) in item.fundsList" :key="idx">
              <div style="float: left;">{{it.fundName}}({{it.fundCode}})</div>
              <div style="float: right;">{{it.percent}}%</div>
            </flexbox-item>
          </flexbox>
        </div>
    </div>
    <div>
      <v-chart
        :data="data"
        :padding="[20, 'auto']">
        <v-tooltip disabled />
        <v-scale y :options="yOptions" />
        <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#FE5D4D','#3BA4FF','#737DDE']" />
        <v-legend :options="legendOptions" />
        <v-guide type="html" :options="htmlOptions" />
      </v-chart>
    </div>
  </div>
</template>
<script>
  import bestChoiceDetail  from  "./js/bestChoiceDetail.js"
  export default bestChoiceDetail
</script>

<style lang="less">
  .bestChoiceDetail{
    text-align: center;
    font-size:12px;
  }
  .bestChoiceDetail .txt{
    margin:0 10px 0 10px;
  }
  .bestChoiceDetail .topImg{
    background: url(../../../assets/images/biz/fundCat1.png) no-repeat center;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    height: 180px;
    position:relative;
  }
	.bestChoiceDetail .topImg .topTxt{
		position:absolute;
    /* top:160px; */
    right:10px;
    padding-top:160px;
    color:#666;
	}

  .bestChoiceDetail .txt .aim{
    font-size: large;
    padding:10px 0 10px 0;
   }
  .bestChoiceDetail .txt .aim .rmk{
    font-size: 12px;
    text-align: center; 
   }
  .bestChoiceDetail .txt .aim .rateIn{
    text-align: center;
    color: brown;
   }
  .bestChoiceDetail .txt .aim .rateOut{
    text-align: center;
    color:darkgreen;
   }

	.bestChoiceDetail .txt .midBox{
		padding: 10px 10px 10px 10px;
  }
  .bestChoiceDetail .txt .itemDesc{
    line-height: 22px;
    color: #999;
    clear:both;
   }

  .bestChoiceDetail .midChk{
    border-bottom:1px solid rgb(230, 230, 230);
    border-top:1px solid rgb(230, 230, 230);
    background-color:rgb(240, 240, 240);
  }
  .bestChoiceDetail .midChk .midTxt{
    text-align:center;
    line-height:35px;
    color:#999;
  }
  .bestChoiceDetail .midChk .midTxt .ico{
    font-size:16px;
    color:brown;
  }

  .bestChoiceDetail .group{
    text-align:left;
    font-size: 12px;
    color:dimgray;
  }
  .bestChoiceDetail .funds{
    text-align: left;
    margin: 10px 10px 0 10px;
    color:#666;
   }
  .bestChoiceDetail .fundsDetail{
    color:#999;
 	  padding: 5px 10px 5px 20px ;
    background-color:rgb(240, 240, 240);
    line-height: 22px;
   }
  // .bestChoiceDetail .fundsDetails{
  //   border-bottom:1px solid rgb(230, 230, 230);
  //  }
   
  .bestChoiceDetail .timeBtn {
    margin: 0 5px 0 5px;
    padding:0 5px;
    height: 25px;
    border-radius: 4px;
    background-clip: padding-box;
    &:active {
      border-color: rgba(206, 60, 57, 0.6)!important;
      color: rgba(206, 60, 57, 0.6)!important;
      background-color: transparent;
    }
  }
</style>