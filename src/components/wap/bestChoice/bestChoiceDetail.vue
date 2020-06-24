<template>
<div>
  <div class="bestChoiceDetail">
    <div class="topImg">
      <div class="topTxt"><span style="color:brown">{{mainData.join_num}}</span>人已购买</div>
    </div>
    <div class="txt">
      <flexbox class="aim">
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item class="rmk">{{mainData.profit_txt}}</flexbox-item>
            <flexbox-item class="rateIn">+{{mainData.profit_ratio}}%</flexbox-item>          
          </flexbox>
        </flexbox-item>
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item class="rmk">历史最大亏损</flexbox-item>
            <flexbox-item class="rateOut">{{mainData.loss_ratio}}%</flexbox-item>         
          </flexbox>
        </flexbox-item>
      </flexbox>
      <div class="midBox">
        <flexbox>
          <flexbox-item class="itemDesc">{{mainData.details}}</flexbox-item>
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
            <v-scale x field="date" type="timeCat" mask="YY-MM-DD" />
            <v-tooltip show-crosshairs show-value-in-legend />
            <v-area series-field="type" shape="smooth" adjust="stack" />
            <v-line series-field="type" shape="smooth" adjust="stack" />
             <v-axis y :label="lblFy"/>
          </v-chart>
        </swiper-item>
      </swiper>
      <flexbox>
        <flexbox-item>
          <x-button @click.native="fltIdx(index,1)" mini v-if="month===1" plain type="warn" class="timeBtn">近1月</x-button>
          <x-button @click.native="fltIdx(index,1)" mini v-else  class="timeBtn">近1月</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button @click.native="fltIdx(index,3)" mini v-if="month===3" plain type="warn"  class="timeBtn">近3月</x-button>
          <x-button @click.native="fltIdx(index,3)" mini v-else  class="timeBtn">近3月</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button @click.native="fltIdx(index,6)" mini v-if="month===6" plain type="warn"  class="timeBtn">近6月</x-button>
          <x-button @click.native="fltIdx(index,6)" mini v-else  class="timeBtn">近6月</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button @click.native="fltIdx(index,12)" mini v-if="month===12" plain type="warn"  class="timeBtn">近1年</x-button>
          <x-button @click.native="fltIdx(index,12)" mini v-else  class="timeBtn">近1年</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button @click.native="fltIdx(index,36)" mini v-if="month===36" plain type="warn"  class="timeBtn">近3年</x-button>
          <x-button @click.native="fltIdx(index,36)" mini v-else  class="timeBtn">近3年</x-button>
        </flexbox-item>
      </flexbox>
    </div>

    <div>
    <group >
      <cell title="组合基金配置" is-link class="group">
        <span>查看消息 </span>
      </cell>
    </group>
    </div>
    
    <div v-for="(item,index) in mainData.funds" :key="index">
        <div class="funds"><span :style="'color:'+item.ico_color">■</span> {{item.name}}</div>
        <div class="fundsDetail">
          <flexbox orient="vertical">
            <flexbox-item v-for="(it,idx) in item.fundsList" :key="idx">
              <router-link :to="'/fundWap/targetStockOrder/'+it.fid">
              <div style="float: left;">{{it.fund_name}}({{it.fund_code}})</div>
              <div style="float: right;">{{it.hold_percentage}}%</div>
              </router-link>
            </flexbox-item>
          </flexbox>
        </div>
    </div>
    <div style="height:440px;text-align:left;">
      <v-chart
        :data="data"
        :padding="[20, 'auto']">
        <v-tooltip disabled />
        <v-scale y :options="yOptions" />
        <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="mainData.circleColors" />
        <v-legend :options="legendOptions" />
        <v-guide type="html" :options="htmlOptions" />
      </v-chart>
      <div class="linefd"></div>
        <div>
          <div class="tradeFont" style="float: left;">交易规则及费用</div>
          <div class="tradeFont" style="float: right;"> > &nbsp;</div>
        </div>
      <div class="linefd"></div>
      <div class="tradeCon">{{mainData.notice}}</div>
    </div>

  </div>

  <div class="bstfooterFix">
    <flexbox style="text-align:center;">
      <flexbox-item >
        <x-button type="default" class="fnt12" :link="{path:'/fundWap/targetSOrder',query:{cid:cid,sch:true}}">定投
        <div style="font-size:10px;">{{mainData.sched_init_amt}}元起投(费率1折起)</div>
        </x-button>
        </flexbox-item>
      <flexbox-item >
        <x-button type="warn" class="fnt12" :link="{path:'/fundWap/targetSOrder',query:{cid:cid}}">申购
        <div style="font-size:10px;">{{mainData.init_amt}}元起(费率1折起)</div>
        </x-button>
      </flexbox-item>
    </flexbox>
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
 	  padding: 5px 10px 5px 20px;
    background-color:rgb(240, 240, 240);
    line-height: 22px;
   }
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
  .bestChoiceDetail .fnt12{
    font-size:12px;
  }
  .bestChoiceDetail .fnt10{
    font-size:10px;
  }
  .bstfooterFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:120px;
    background:#F7F7F7;
    // padding:0 3px 0 3px;
  }
  .linefd{
    clear:both;
    border-bottom:1px solid rgb(230, 230, 230);
  }
  .tradeFont{
    background-color: white;
    padding:5px 0 5px 5px;
    color:#666;
  }
  .tradeCon{
    font-size: 10px;
    padding:5px 0 5px 5px;
    color:#666;
  }
</style>