<template>
  <div class="bestChoice">
    <div class="top">优选组合</div>
    <flexbox>
      <flexbox-item><x-button :gradients="['#6F1BFE', '#9479DF']" @click.native="fundTest"><div class="top3UpTxt">基金评测</div><div class="top3DownTxt">基金好坏我知道</div></x-button></flexbox-item>
      <flexbox-item><x-button :gradients="['#A644FF', '#FC5BC4']" @click.native="fundMemo"><div class="top3UpTxt">基金记账</div><div class="top3DownTxt">基金记账我在行</div></x-button></flexbox-item>
      <flexbox-item><x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="fundInvest"><div class="top3UpTxt">定投助手</div><div class="top3DownTxt">定投好坏我清楚</div></x-button></flexbox-item>
    </flexbox>
    <div class="fundItems">
    	<div class="itemBox" v-for="(it,idx) in choiceList" :key="idx">
    		 <flexbox orient="vertical">
           <flexbox-item class ="waitInvokeTxtPre">|| <span class="waitInvokeTxtTail">{{it.name}}</span></flexbox-item> 
          <flexbox-item>
            <div class="itemContent" v-for="(item,index) in it.fund_plans" :key="index">
                <flexbox orient="vertical">
                  <flexbox-item class="cont">
                    <div class="name">{{item.name}}</div>
                    <p class="itemDesc">{{item.short_intro}}</p>
                    <div class="rate">+{{item.profit_ratio}}%</div>
                    <p class="itemDesc">{{item.profit_txt}}</p>
                  </flexbox-item>
                  <flexbox-item>
                    <div v-if="item.page_type==1">
                      <x-button class="redBtn" type="warn" action-type='button' 
                      :link="'/fundWap/bestChoiceSingle/'+item.fpl_id" v-show="item.is_sellout==0">{{item.threshold}}起投</x-button>
                      <x-button class="redBtn" type="default" v-show="item.is_sellout==1" action-type='button' >已售完</x-button>
                    </div>
                    <div v-else>
                      <x-button class="redBtn" type="warn" action-type='button' 
                      :link="'/fundWap/bestChoiceDetail/'+item.fpl_id" v-show="item.is_sellout==0">{{item.threshold}}起投</x-button>
                      <x-button class="redBtn" type="default" v-show="item.is_sellout==1" action-type='button' >已售完</x-button>
                    </div>
                  </flexbox-item>
                </flexbox>
              </div>
            </flexbox-item>
          </flexbox>
    	</div>
    </div>
    <toast v-model="showMsg" type="text"  width="20em" class="showMsg" :time="2000">coming soon....</toast>
  </div>  
</template>
<script>
  import bestChoice  from  "./js/bestChoice.js"
  export default bestChoice
</script>

<style>
  .bestChoice{
    text-align: center;
    font-size:12px;
    margin:10px 20px 0px 10px;
  }
  .bestChoice .top{
    font-size: 20px;
    font-weight:800;
    color: brown;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .bestChoice .top3UpTxt{
    font-size: 14px;
  }
  .bestChoice .top3DownTxt{
    font-size:10px;
    white-space:nowrap;
  }

  .bestChoice .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    padding-left:10px;
  }
  .bestChoice .waitInvokeTxtTail{
    color:#000000;
    padding-left:5px;
  }

  .bestChoice .fundItems{
    text-align: center;
  }
  .bestChoice  .itemBox {
    /* border-bottom:1px solid #eee; */
    padding-top: 15px;
   }
  .bestChoice .itemContent{
    border-bottom:1px solid #eee;
    padding: 10px 0;
   }
   .bestChoice .redBtn{
     width:70%;height:40px;font-size:15px;
   }
  .bestChoice .itemContent .cont{
    text-align: center;
   }
  .bestChoice .itemContent .name{
    font-weight:800;
    font-size:16px;
   }
  .bestChoice .itemContent .rate{
    font-weight:800;
    font-size:20px;
    color:#af3737;
    padding:5px;
   }
  .bestChoice .itemDesc{
    font-size:12px;
    line-height: 20px;
    color:darkgrey;
   }

</style>
