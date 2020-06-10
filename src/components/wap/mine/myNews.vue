<template>
    <div class="myNews">
        <div v-for="(it,idx) in newsList" :key="idx">
        <flexbox class="rectAgl" orient="vertical">
            <flexbox-item>
              <div style="padding:10px 10px 0px 10px;">
                <flexbox orient="vertical">
                    <flexbox-item><span style="font-size:13px;">{{it.title}}</span></flexbox-item>
                    <flexbox-item>{{it.inserttime}}</flexbox-item>
                    <flexbox-item>{{(it.content.length > 85)?it.content.substring(0,85)+"...":it.content}}</flexbox-item>
                </flexbox>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div v-if="it.content.length > 85">
                <div class="linen"></div>
                <div style="padding:10px 10px 5px 10px;">
                    <x-button mini @click.native="doShowToast(it.uni_id)">查看详情</x-button>
                </div>
              </div>
            </flexbox-item>
        </flexbox>
        </div>

      <x-dialog v-model="showDialogStyle" hide-on-blur 
      :dialog-style="{'max-width': '100%', width: '90%', height: '50%', 'background-color': 'transparent'}">
        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
          <span >{{dialogContent}}</span>
          <br>
          <br>
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
      </x-dialog>

    </div>
</template>
<script>
  import myNews  from  "./js/myNews.js"
  export default myNews
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
  .myNews{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .myNews .rectAgl{
    height:auto;
    width: auto;
    /* background: rgb(216, 80, 80); */
    border-width: 1px;
    border-style: solid;
    /* border-radius: 5px; */
    /* border-color:  rgb(216, 80, 80); */
    border-color: #ccc;
    /* padding-left: 10px; */
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .myNews .linen{
    border-bottom:1px solid rgb(230, 230, 230);
   }
  .myNews .rectAgl .aimRmkMoney{
    font-weight: 700;
    font-size: 14px;
  }
  .myNews .msg{
    font-size: 12px;
    margin-left:5px;
  }  


  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
