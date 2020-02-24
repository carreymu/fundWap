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
        <tab-item style="font-size:12px;" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div >{{item}} Container</div>
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
        <flexbox-item><x-button @click.native="next" mini class="timeBtn">近6月</x-button></flexbox-item>
        <flexbox-item><x-button @click.native="next" mini class="timeBtn">近1年</x-button></flexbox-item>
        <flexbox-item><x-button @click.native="prev" mini class="timeBtn">近3年</x-button></flexbox-item>
      </flexbox>
    </div>

    
    <group >
      <cell title="组合基金配置" is-link style="text-align:left;font-size: 12px;color:dimgray;">
        <span>查看消息 </span>
      </cell>
    </group>
    
    <div v-for="(item,index) in fTypeList" :key="index">
        <div class="funds"><span style="color:orange">■</span> {{item.name}}</div>
        <div class="fundsDetail">
        <flexbox orient="vertical">
          <flexbox-item  v-for="(it,idx) in item.fundsList" :key="idx">
            <div style="float: left;">{{it.fundName}}({{it.fundCode}})</div>
            <div style="float: right;">{{it.percent}}%</div>
          </flexbox-item>
        </flexbox>
        </div>
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
	.bestChoiceDetail .txt .topTxt{
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

  .bestChoiceDetail .funds{
    text-align: left;
    margin: 10px 10px 0 10px;
    color:#666;
   }
  .bestChoiceDetail .fundsDetail{
    color:#999;
 	  padding: 10px 20px;
    background-color:rgb(240, 240, 240);
    line-height: 22px;
   }

  .bestChoiceDetail .timeBtn {
    margin: 0 15px 0 5px;
    padding:0 5px;
    height: 30px;
    border-radius: 4px;
    background-clip: padding-box;
    &:active {
      border-color: rgba(206, 60, 57, 0.6)!important;
      color: rgba(206, 60, 57, 0.6)!important;
      background-color: transparent;
    }
  }


   /* .bestChoiceDetailTxt  .item-box {
   		border-bottom:1px solid #eee;
   		background: #fff;
   }

   .bestChoiceDetailTxt  .top-name{
   	   border-bottom:1px solid #eee;
   	   padding: 10px 0 5px 0;
   	   margin-right: 10px;
   }



   .bestChoiceDetailTxt .bottom-cer{
   		padding:10px 0;
   		font-size:12px;
   	    color: #666;
   	    position :relative;
   }

    .bestChoiceDetailTxt .bottom-cer p{
    	padding-left: 15px;
    	line-height: 20px;
    }
	
	.bestChoiceDetailTxt .bottom-cer p span{
		padding-left: 10px
	}

   .bestChoiceDetailTxt .icon-clock{
   		position:absolute;
   		fill: #666;
   }


   .bestChoiceDetailTxt .remark{
   	 height: 40px;
   	 font-size: 14px;
   	 line-height: 40px;
     color: #666;
   	 padding-left: 20px
   }

    .bestChoiceDetailTxt .time-box{
   	 background: #fff;
     padding-bottom:10px
     ;
   }

   .bestChoiceDetailTxt .checker-box{
      margin:15px;
   }

    .bestChoiceDetailTxt  .time-item{
		   border-bottom: 1px solid #eee
   }
    .bestChoiceDetailTxt  .arrow-icon{
   	  text-align: right;
   	  padding-right: 15px;

   }

   .bestChoiceDetailTxt .checkTime-item {
	  width: 20%;
	  height: 32px;
	  line-height: 32px;
	  text-align: center;
    border: 1px solid #ccc;
	  background-color: #fff;
    color: #000;
    box-sizing: border-box;
	}
	.bestChoiceDetailTxt .checkTime-item-selected {
	  background: #333333 url(../../../assets/images/bgIcon/select-icon.png) no-repeat right bottom;
    background-size:12px 10px;
	  color: #fff;
    border: 1px solid #333333;
    border-right:1px solid #ccc;

	}
  .bestChoiceDetailTxt .checkTime-item-disabled{
      background: #DEDCDC;
  }

  .bestChoiceDetailTxt .bottom-btn{
      padding:20px;
  }

  .bestChoiceDetailTxt .labels{
      margin:5px 30px;
      height: 30px;
      line-height: 30px
  }

    .bestChoiceDetailTxt .labels >div{
        float:left;
        margin-right: 20px;
        font-size: 12px;
        padding-left: 20px;

    }

    .bestChoiceDetailTxt .labels .is-allow{
        background: url(../../../assets/images/bgIcon/is-allow.png) no-repeat left center ;
        background-size:12px;
    }

    .bestChoiceDetailTxt .labels .no-allow{
        background: url(../../../assets/images/bgIcon/no-allow.png) no-repeat left center ;
        background-size:12px;
    }

    .bestChoiceDetailTxt .labels .is-select{
      background: url(../../../assets/images/bgIcon/is-select.png) no-repeat left center ;
      background-size:12px;
    }

    .bestChoiceDetailTxt .s-name span{
        height:30px;
        line-height: 30px;
        display:block;
        float: left;
    }

  .bestChoiceDetailTxt .s-name .name-label{
      background: #6B106A;
      color: #fff;
      font-size: 12px;
      height:20px;
      line-height: 20px;
      margin: 5px 10px;
      padding:0 10px;
    }

    .bestChoiceDetailTxt  .showSuccess .weui-toast__content{
      background: url(../../../assets/images/bgIcon/success.png) no-repeat left center;
      background-size:20px;
    }

    .bestChoiceDetailTxt  .showSuccess .weui-toast{
      padding-left: 10px;
    } */


</style>