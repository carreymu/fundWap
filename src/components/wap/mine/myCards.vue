<template>
    <div class="myCards">
        <flexbox style="margin:20px 0px;font-size:14px;font-weight:bold;">
            <flexbox-item>大目标服务卡</flexbox-item>
            <flexbox-item :span="2/3" style="text-align:right;">
            喵了个咪~ 剩余{{unexps.length}}张&nbsp;&nbsp;&nbsp;<x-button mini type="warn">购买</x-button></flexbox-item>
        </flexbox>
        <div v-for="(it,idx) in cards" :key="idx">
          <flexbox class="rectAgl">
              <flexbox-item :span="0.6">
                  <flexbox orient="vertical">
                    <flexbox-item class="aimRmkMoney">{{it.name}}</flexbox-item>
                    <flexbox-item>来源:{{it.sources}} </flexbox-item>
                    <flexbox-item>有效期:{{it.exp_date_start}}-{{it.exp_date_end}}</flexbox-item>
                  </flexbox>
              </flexbox-item>
              <flexbox-item v-if="it.diff_days<=30 && it.diff_days>0"><x-button mini type="warn"><span style="font-size:10px;">临期卡,尽快使用</span></x-button></flexbox-item>
              <flexbox-item v-else-if="it.diff_days<0" style="text-align:center;"><x-button mini type="default" disabled>
                <span style="font-size:10px;">已过期</span></x-button></flexbox-item>
              <flexbox-item v-else><x-button mini type="primary" ><span style="font-size:10px;">非临期卡,缓慢使用</span></x-button></flexbox-item>
          </flexbox>
        </div>
        <div style="text-align:center;"> - 已全部加载 -</div>
    </div>
</template>
<script>
  import myCards  from  "./js/myCards.js"
  export default myCards
</script>

<style>
  a:link {
  color:dimgray;
  text-decoration: none;
  }
  a:visited {
  color:dimgray;
  text-decoration: none;
  }
  a:hover {
  color:dimgray;
  }
  .myCards{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .myCards .rectAgl{
    height: 100px; 
    width: auto;
    /* background: rgb(216, 80, 80); */
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    /* border-color:  rgb(216, 80, 80); */
    border-color: #ccc;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  .myCards .rectAgl .aimRmkMoney{
    font-weight: 700;
    font-size: 14px;
  }
  .myCards .msg{
    font-size: 12px;
    margin-left:5px;
  }  


</style>
