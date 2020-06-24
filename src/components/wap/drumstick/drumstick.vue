<template>
  <div class="drumstick">
    <div class="topDate">
      <div class="top">鸡腿计划</div>
      <div class="topRmk">长期资产配置服务</div>

      <div class="topcontext">        
        <div >
          <div class="aimRate">{{drumstickInfoSub.ratio}}<span style="font-size:large;">%</span></div>
          <div class="aimRmk">策略回测年化收益率</div>
        </div>
        <div class="slopingside"></div>
        <div>
          <div class="aimLast">{{drumstickInfoSub.time}}<span style="font-size:large;">年</span></div>
          <div class="aimRmk">建议投资期限</div>
        </div>
      </div>
      <div class="aimRmkSub">{{drumstickInfoSub.remark}}</div>
      <div class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">等待定投</span></div>
      <div class="invIntr">
        <div class="infoLt">{{drumstickInfo.content}}</div>
        <div class="infoRt"><img :src="drumstickInfo.img_url" width="120px" height="120px"/></div>
        <!-- <table class="invIntr">
          <tr>
            <td valign="top">长期投资,不能傻傻持有。鸡腿计划，帮你做资产轮动中抓住投资机会,在风险积聚时自动调仓,锁定收益。</td>
            <td style="width:20px;"></td>
            <td><img src="../../../assets/images/stas.png" width="120px" height="120px"/></td>
          </tr>
        </table> -->
      </div>
      <div style="padding:0 15px;">
        <span v-if="value.length>0">
          <x-button type="warn" @click.native="showPopupPicker = true" style="font-size:14px;">设置提醒{{value}}</x-button>
        </span>
        <span v-else>
          <x-button type="warn" @click.native="showPopupPicker = true" style="font-size:14px;">设置提醒</x-button>
        </span>
        <group>
          <popup-picker title="时间" :show.sync="showPopupPicker" :inline-desc="`当前值[${value}]` " 
          v-model="value" :show-cell="false" :data="dateRange" 
          :display-format="format"></popup-picker>
        </group>
      </div>
      
      <div class="drsinvIntro">
        <div v-for="(item, index) in drumstickList" :key="index">
          <router-link :to="item.url+'/'+item.sid"><img :src="item.img_url"/><br/>&nbsp;{{item.title}}</router-link>
        </div>
      </div>
      <div class="line"></div> 

      <div class="newsTop">鸡腿计划动态</div>        
      <div class="newsItem" v-for="(item, index) in newsList" :key="index">
        <router-link :to="'/fundWap/targetDetail/'+item.nid">
        <flexbox>
          <flexbox-item>
            <div style="height:60px;">{{item.title}}</div>
            <div style="height:20px;">{{item.inserttime}}</div>
          </flexbox-item>
          <flexbox-item class="postListImg"><img :src="item.img_url"></flexbox-item>      
        </flexbox>
        </router-link>
        <div class="line0"></div>           
      </div>
      <div class="footer">
        <div><router-link :to="'/fundWap/targetNews/2'">更多内容 ></router-link></div>
        <div class="line1"></div>   
        <div class="bot">基金历史收益部代表其未来表现.<br/>【市场有风险,投资需谨慎。】</div>
      </div>
    </div>
  </div>
</template>
<script>
  import drumstick  from  "./js/drumstick.js"
  export default drumstick
</script>

<style>
  .line{
    border-bottom:1px solid rgb(230, 230, 230); 
    padding:10px 0 10px 0;
  }
  .line0{
    border-bottom:1px solid rgb(230, 230, 230); 
    padding-top:5px;
  }
  .line1{
    border-bottom:1px solid rgb(230, 230, 230); 
    padding:0 0 5px 0;
  }
  .drumstick{
    font-size:12px;
    margin:10px 20px 0px 10px;
  }
  .drumstick .top{
    font-size: 20px;
    font-weight:800;
    color: brown;
    padding: 20px 0 10px 0;
    text-align: center;
  }
  .drumstick .topRmk{
    color:dimgray;
    height: 35px;
    text-align: center;
  }
  .drumstick .topcontext{
    padding: 0px 40px 0 40px;
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
  }
  .drumstick .slopingside{
    height:0px;
    width:45px;
    margin-top: 30px;
    border-top: 0.1px solid rgb(128, 126, 126);
    transform:rotate(125deg);
    -o-transform:rotate(125deg);
    -moz-transform:rotate(125deg);
    -webkit-transform:rotate(125deg);
  }
  .drumstick .aimRate{
    font-size: x-large;
    text-align: center;
  }
  .drumstick .aimLast{
    font-size: x-large;
    text-align: center;
  }
  .drumstick .aimRmk{
    text-align:center;
    color:#999999;
    margin-left:5px;
  }  
  .drumstick .aimRmkSub{
    text-align:center;
    color:#999999;
    font-size:11px;
    padding:10px 0;
  }

  .drumstick .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    padding-left:10px;
    text-align: left;
  }
  .drumstick .waitInvokeTxtTail{
    color:#000000;
    padding-left:5px;
  }
  
  .drumstick .invIntr{
    display: inline-block;
    line-height:25px;
    color:dimgray;
  }
  
 .drumstick .drsinvIntro{
    text-align: center;
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
  }
  .drumstick .newsTop{
    font-size:14px;
    text-align:left;
    font-weight:700;
    padding-top:10px;
  }
  .drumstick .newsItem{
    margin:5px 0px 0px 5px;
    position: relative;
    height: 116px;
    overflow: hidden;
  }
  .drumstick .newsItem .postListImg {
    display: table-cell;
    width: 160px;
    height: 96px;
    margin-top: 0;
    overflow: hidden;
  }
  .drumstick .footer{
    text-align:center;
    color:#666;
  }
  .drumstick .footer .bot{
    font-size:10px;
    padding:10px 0 20px 0;
  }
  .drumstick .infoLt {
    float:left;width:55%;padding:10px;overflow:hidden;height:90px;
  }
  .drumstick .infoRt {
    float:right;overflow:hidden;height:120px;
  }
</style>
