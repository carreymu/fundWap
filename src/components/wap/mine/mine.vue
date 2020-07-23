<template>
  <div class="mine">
    <flexbox class="rectAgl">
      <flexbox-item :span="0.15">
        <router-link :to="'/fundWap/myAccount'"><img :src="myInfo.avastar" class="avastar"/></router-link>
      </flexbox-item>
      <flexbox-item ><router-link :to="'/fundWap/myAccount'" style="color:white;"> {{myInfo.username}}</router-link></flexbox-item> 
      <flexbox-item :span="0.45">
        <router-link :to="'/fundWap/myPositions'">
        <flexbox orient="vertical">
          <flexbox-item class="aimRmk">总资产: <span class="aimRmkMoney">{{myInfo.init_amt}}</span></flexbox-item>
          <flexbox-item class="aimRmk">最新收益: <span class="aimRmkMoney">{{myInfo.daily_profit}}</span></flexbox-item>
        </flexbox>
        </router-link>
      </flexbox-item>
    </flexbox>
    
    <group>
      <div v-for="(it,idx) in menus" :key="idx">
        <!-- <cell class="msg" :title="it.title" v-if="it.isWithTail" :link="{path:it.url+'/'+it.id}">
          <badge v-if="it.newsCnt!=undefined & it.newsCnt>0" :text="it.newsCnt"></badge>
        </cell> -->
        <cell class="msg" v-if="it.title.indexOf('目标卡')>0" :title="it.title" :link="it.url">
          {{'剩余'+it.card_cnt+'次'}}
        </cell>
        <cell class="msg" :title="it.title" v-else-if="it.url.length>0" :link="it.url+'?sid='+it.sid">
          <badge v-if="it.cnt!=undefined & it.cnt>0" :text="it.cnt"></badge>
        </cell>
        <span v-else >
        <cell class="msg" is-link :title="it.title" :border-intent="false" :arrow-direction="showContent ? 'down' : ''"
        @click.native="showContent = !showContent"></cell>
        <actionsheet class="msg" v-model="showContent" :menus="menus" :close-on-clicking-mask="false" show-cancel
        @on-click-mask="maskClick('on click mask')"></actionsheet>
        </span>
      </div>
    </group>
    </div>
</template>
<script>
  import mine  from  "./js/mine.js"
  export default mine
</script>

<style>
  .mine{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .mine .avastar{
    height:40px;
    width:40px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
  }
  .mine .rectAgl{
    height: 70px; 
    width: auto;
    background: rgb(216, 80, 80);
    border-width: 10px;
    border-style: solid;
    border-radius: 5px;
    border-color:  rgb(216, 80, 80);
    color: white;
  }

  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }

  .mine .rectAgl .aimRmk{
    /* text-align:center; */
    margin-left:5px;
    color:white;
  }
  .mine .rectAgl .aimRmkMoney{
    font-weight: 800;
    font-size: 14px;
  }
  .mine .msg{
    font-size: 12px;
  }  


</style>
