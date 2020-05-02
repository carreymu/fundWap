<template>
  <div class="mine">
    <flexbox class="rectAgl">
      <flexbox-item :span="0.2">
        <img src="../../../assets/images/biz/avastar.jpg" class="avastar"/>
      </flexbox-item>
      <flexbox-item >鉄の卵</flexbox-item> 
      <flexbox-item :span="0.55">
        <flexbox orient="vertical">
          <flexbox-item class="aimRmk">总资产: <span class="aimRmkMoney">2,100,200.00</span></flexbox-item>
          <flexbox-item class="aimRmk">最新收益: <span class="aimRmkMoney">+8,000.01</span></flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>
    <group>
      <div v-for="(it,idx) in menuList" :key="idx">
        <cell class="msg" :title="it.title" v-if="it.isWithTail" :link="{path:it.url+'/'+it.id}">
          <badge v-if="it.newsCnt!=undefined & it.newsCnt>0" :text="it.newsCnt"></badge>
        </cell>
        <cell class="msg" :title="it.title" v-else :link="it.url">
          <badge v-if="it.newsCnt!=undefined & it.newsCnt>0" :text="it.newsCnt"></badge>
        </cell>
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

  .mine .rectAgl .aimRmk{
    /* text-align:center; */
    margin-left:5px;
  }
  .mine .rectAgl .aimRmkMoney{
    font-weight: 800;
    font-size: 14px;
  }
  .mine .msg{
    font-size: 12px;
  }  


</style>
