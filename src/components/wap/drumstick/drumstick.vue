<template>
  <div class="drumstick">
    <div class="topDate">
      <div class="top">鸡腿计划</div>
      <div class="topRmk">长期资产配置服务</div>
      <br/>
      <flexbox>
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item class="aimRate">14.8<span style="font-size:large;">%</span></flexbox-item>
            <flexbox-item class="aimRmk">策略回测年化收益率</flexbox-item>
          </flexbox>
        </flexbox-item>
        <!-- <flexbox-item>
          //////////
        </flexbox-item> -->
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item class="aimLast">3~5<span style="font-size:large;font-weight:700">年</span></flexbox-item>
            <flexbox-item class="aimRmk">建议投资期限</flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
        <br/>
        <flexbox>
          <flexbox-item class="aimRmkSub">-- 根据策略信号不定期开车,平均每月1～2次 --</flexbox-item>
        </flexbox>
        <br/>
        <flexbox>
          <flexbox-item class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">等待定投</span></flexbox-item>          
        </flexbox>
        <br/>
        <flexbox>
          <flexbox-item>
            <table class="invIntr">
                <tr>
                  <td valign="top">长期投资,不能傻傻持有。鸡腿计划，帮你做资产轮动中抓住投资机会,在风险积聚时自动调仓,锁定收益。</td>
                  <td style="width:20px;"></td>
                  <td><img src="../../../assets/images/stas.png" width="120px" height="120px"/></td>
                </tr>
            </table>
          </flexbox-item>
           <!-- <flexbox-item :span="1/20"></flexbox-item> -->
        </flexbox>
        <flexbox>
          <flexbox-item><x-button type="warn">设置提醒</x-button></flexbox-item>
        </flexbox>
        <br/>
        <flexbox class="invIntro">
          <flexbox-item><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../assets/images/intro.png"/><br/>了解[鸡腿计划]</router-link></flexbox-item>
          <flexbox-item></flexbox-item>
          <flexbox-item ><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../assets/images/think.png"/><div style="padding-left:10px;">投资理念</div></router-link></flexbox-item>
          <flexbox-item></flexbox-item>
          <flexbox-item><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../assets/images/safe.png"/><div style="padding-left:15px;">团队介绍</div></router-link></flexbox-item>
        </flexbox>
        <div style="border-bottom:1px solid rgb(230, 230, 230); padding:10px 0 10px 0;"></div> 
        <div class="newsTop">鸡腿计划动态</div>        
        <div class="newsItem" v-for="(item, index) in itemList" :key="index">
          <router-link :to="'/fundWap/targetDetail/'+item.id">
          <flexbox>
            <flexbox-item>
              <flexbox orient="vertical">
                <flexbox-item>
                    <flexbox orient="vertical">
                      <flexbox-item >{{item.title}}</flexbox-item>                  
                      <flexbox-item>02-10 18:10</flexbox-item>
                    </flexbox>
                </flexbox-item>          
              </flexbox>
            </flexbox-item>
            <flexbox-item class="postListImg"><img :src="item.icon"></flexbox-item>      
          </flexbox>      
          </router-link>
          <div style="border-bottom:1px solid rgb(230, 230, 230); padding-top:5px;"></div>           
        </div>
        <div class="footer">
          <div>更多内容 ></div>
          <div style="border-bottom:1px solid rgb(230, 230, 230); padding:0 0 5px 0;"></div>   
          <div class="bot">基金历史收益部代表其未来表现.<br/>【市场有风险,投资需谨慎。】</div>
        </div>
    </div>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem ,XHeader,XButton,XImg, Flexbox, FlexboxItem, Divider } from 'vux'
  export default {
    mounted() {
      // this.bannerList();
      this.loadLatest();
      // this.top3Fund();  
      this.$store.commit('UPDATE_PAGE_TITLE', '鸡腿计划') 
    },
    data(){
      return {
        itemList:'',

      }
    },
    methods:{
      loadLatest(){
        let self=this;
        this.baseAjax({
          url:'../../../static/basicData/latestNews.json',
          showLoading:true,
          success:function(data){
              console.log(data)
              self.itemList=data.returnObject
          }
        })
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      XButton,
      XImg,
      Flexbox, 
      FlexboxItem,
      Divider
    }
  }
</script>

<style>
  .drumstick{
    text-align: center;
    font-size:12px;
    margin:10px 20px 0px 10px;
  }

  .drumstick .top{
    font-size: 20px;
    font-weight:800;
    color: brown;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  
  .drumstick .topRmk{
    color:dimgray;
    height: 15px;
  }

  .drumstick .aimRate{
    font-size: xx-large;
    text-align: center;
  }
  .drumstick .aimLast{
    font-size: xx-large;
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
  }

  .drumstick .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    padding-left:10px;
  }
  .drumstick .waitInvokeTxtTail{
    color:#000000;padding-left:5px;
  }
  
  .drumstick .invIntr{
    width:100%;font-size:12px;line-height:25px;color:dimgray;border:none;padding:0px 5px 0px 5px;
  }
  
 .drumstick .invIntro{
    padding-right:20px;    
    white-space:nowrap;
  }

  .drumstick .newsTop{
    font-size:14px;text-align:left;font-weight:700;padding-top:10px;
  }
  .drumstick .newsItem{
    margin:5px 0px 0px 5px;
    position: relative;
    height: 126px;
    overflow: hidden;
    border-radius: 5px
  }
  .drumstick .newsItem .postListImg {
    display: table-cell;
    width: 160px;
    height: 96px;
    margin-top: 0;
    overflow: hidden;
  }
  .drumstick .footer{
    text-align:center;color:#666;
  }

  .drumstick .footer .bot{
    font-size:11px;padding:10px 0 20px 0;
  }

</style>
