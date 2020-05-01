<template>
    <div class="mineCards">
        <flexbox style="margin:20px 0px;font-size:14px;font-weight:bold;">
            <flexbox-item>大目标服务卡</flexbox-item>
            <flexbox-item :span="2/3" style="text-align:right;">喵了个咪~ 剩余3张&nbsp;&nbsp;&nbsp;<x-button mini type="warn">购买</x-button></flexbox-item>
        </flexbox>
        <flexbox class="rectAgl">
        <flexbox-item :span="0.55">
            <flexbox orient="vertical">
            <flexbox-item class="aimRmkMoney">大目标服务卡</flexbox-item>
            <flexbox-item>来源:赠送 </flexbox-item>
            <flexbox-item>有效期:20年4月24日-20年5月4日</flexbox-item>
            </flexbox>
        </flexbox-item>
        <flexbox-item><x-button mini type="warn">临期卡,尽快使用</x-button></flexbox-item> 
        </flexbox>
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
  import mineCards  from  "./js/mineCards.js"
  export default mineCards
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
  .mineCards{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .mineCards .rectAgl{
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
  .mineCards .rectAgl .aimRmkMoney{
    font-weight: 700;
    font-size: 14px;
  }
  .mineCards .msg{
    font-size: 12px;
    margin-left:5px;
  }  


</style>
