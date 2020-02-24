<template>
  <div class="bestChoice">
    <div class="top">优选组合</div>
    <flexbox>
      <flexbox-item><x-button :gradients="['#6F1BFE', '#9479DF']" @click.native="fundTest"><div class="top3UpTxt">基金评测</div><div class="top3DownTxt">基金好坏我知道</div></x-button></flexbox-item>
      <flexbox-item><x-button :gradients="['#A644FF', '#FC5BC4']" @click.native="fundMemo"><div class="top3UpTxt">基金记账</div><div class="top3DownTxt">基金记账我在行</div></x-button></flexbox-item>
      <flexbox-item><x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="fundInvest"><div class="top3UpTxt">定投助手</div><div class="top3DownTxt">定投好坏我清楚</div></x-button></flexbox-item>
    </flexbox>
    <br/>
    <div class="fundItems">
    	<div class="itemBox" v-for="(item,index) in fundList" :key="index">
    		 <flexbox orient="vertical">
           <flexbox-item class ="waitInvokeTxtPre">|| <span class="waitInvokeTxtTail">{{item.categoryName}}</span></flexbox-item> 
          <flexbox-item>
            <div class="itemContent">
                <flexbox orient="vertical">
                  <flexbox-item class="cont">
                    <div class="name">{{item.name}}</div>
                    <p class="itemDesc">{{item.shortDesc}}</p>
                    <div class="rate">+{{item.rateProfit}}%</div>
                    <p class="itemDesc">{{item.annEarnLong}}</p>
                  </flexbox-item>
                  <flexbox-item class="cont">
                    <router-link :to="'/fundWap/bestChoiceDetail/'+item.id" v-show="item.status==1" >
                        <x-button style="width:70%;" type="warn"  action-type='button' >{{item.minInvest}}起投</x-button>
                    </router-link>
                    <x-button style="width:70%;" type="default" v-show="item.status==2"  action-type='button' >已售完</x-button>
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
    font-size:12px;
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
