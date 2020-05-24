<template>
    <div class="myCards">
        <flexbox style="margin:20px 0px;font-size:14px;font-weight:bold;">
            <flexbox-item>大目标服务卡</flexbox-item>
            <flexbox-item :span="2/3" style="text-align:right;">
            喵了个咪~ 剩余3张&nbsp;&nbsp;&nbsp;<x-button mini type="warn">购买</x-button></flexbox-item>
        </flexbox>
        <div v-for="(it,idx) in cards" :key="idx">
          <flexbox class="rectAgl">
              <flexbox-item :span="0.55">
                  <flexbox orient="vertical">
                    <flexbox-item class="aimRmkMoney">{{it.name}}</flexbox-item>
                    <flexbox-item>来源:{{it.sources}} </flexbox-item>
                    <flexbox-item>有效期:{{it.exp_date_start}}-{{it.exp_date_end}}</flexbox-item>
                  </flexbox>
              </flexbox-item>
              <flexbox-item><x-button mini type="warn">临期卡,尽快使用</x-button></flexbox-item>
          </flexbox>
        </div>
        <flexbox class="rectAgl">
            <flexbox-item :span="0.55">
                <flexbox orient="vertical">
                <flexbox-item class="aimRmkMoney">大目标服务卡</flexbox-item>
                <flexbox-item>来源:购买 </flexbox-item>
                <flexbox-item>有效期:20年4月24日-21年5月4日</flexbox-item>
                </flexbox>
            </flexbox-item>
            <flexbox-item><x-button mini type="primary"><span style="font-size:11px;">非临期卡,缓慢使用</span></x-button></flexbox-item> 
        </flexbox>
        <flexbox class="rectAgl">
            <flexbox-item :span="0.55">
                <flexbox orient="vertical">
                <flexbox-item class="aimRmkMoney">大目标服务卡</flexbox-item>
                <flexbox-item>来源:购买 </flexbox-item>
                <flexbox-item>有效期:20年4月24日-22年5月4日</flexbox-item>
                </flexbox>
            </flexbox-item>
            <flexbox-item><x-button mini type="primary"><span style="font-size:11px;">非临期卡,缓慢使用</span></x-button></flexbox-item> 
        </flexbox>
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
