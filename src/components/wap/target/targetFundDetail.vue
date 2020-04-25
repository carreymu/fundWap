<template>
  <div class="targetfund">
      <div class="topcontext">
            <div>          
                <div >
                        <div class="aimRate">+8.00<span style="font-size:large;">%</span></div>
                        <div class="aimRmk">目标收益率</div>
                </div>
          </div>
            <div class="slopingside"></div>
            <div>          
            <div>
                    <div class="aimLast">6~12<span style="font-size:large;font-weight:700">个月</span></div>
                    <div class="aimRmk">预计持有时长</div>
            </div>
          </div>
       </div>

        
        <div>
          <div class="aimRmkSub">-- 目标收益为绝对收益,买入1万元,达标收益800元 --</div>
          <div class="line"></div>
            <div>申购日期: 20年04月20日~20年04月29日</div>
          <div class="line"></div>
        </div>
        
        <flexbox>
          <flexbox-item class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">等待定投</span></flexbox-item>          
        </flexbox>
        
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
        
        <flexbox class="invIntro">
          <flexbox-item><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../../static/img/intro.png"/><br/>了解[鸡腿计划]</router-link></flexbox-item>
          <flexbox-item></flexbox-item>
          <flexbox-item ><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../../static/img/think.png"/><div style="padding-left:10px;">投资理念</div></router-link></flexbox-item>
          <flexbox-item></flexbox-item>
          <flexbox-item><router-link :to="'/fundWap/targetDetail/1'"><img src="../../../../static/img/safe.png"/><div style="padding-left:15px;">团队介绍</div></router-link></flexbox-item>
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
          <div class="line"></div>           
        </div>
        <div class="footer">
          <div>更多内容 ></div>
          <div class="line"></div>   
          <div class="bot">基金历史收益部代表其未来表现.<br/>【市场有风险,投资需谨慎。】</div>
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
  .targetfund{
    text-align: center;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
 .targetfund .topcontext{
    padding: 15px 40px 20px 40px;
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
  }
  .targetfund .line{border-bottom:1px solid rgb(230, 230, 230);}

  .targetfund .aimRate{
    font-size: x-large;
    text-align: center;
  }
  .targetfund .aimLast{
    font-size: x-large;
    text-align: center;
  }
  .targetfund .aimRmk{
    text-align:center;
    color:#999999;
    margin-left:5px;
  }  
  .targetfund .aimRmkSub{
    text-align:center;
    color:#999999;
    font-size:11px;
  }

  .targetfund .waitInvokeTxtPre{
    color:brown;
    font-weight:700;
    padding-left:10px;
  }
  .targetfund .waitInvokeTxtTail{
    color:#000000;padding-left:5px;
  }
  
  .targetfund .invIntr{
    width:100%;font-size:12px;line-height:25px;color:dimgray;border:none;padding:0px 5px 0px 5px;
  }
  
 .targetfund .invIntro{
    padding-right:20px;    
    white-space:nowrap;
  }

  .targetfund .newsTop{
    font-size:14px;text-align:left;font-weight:700;padding-top:10px;
  }
  .targetfund .newsItem{
    margin:5px 0px 0px 5px;
    position: relative;
    height: 126px;
    overflow: hidden;
    border-radius: 5px
  }
  .targetfund .newsItem .postListImg {
    display: table-cell;
    width: 160px;
    height: 96px;
    margin-top: 0;
    overflow: hidden;
  }
  .targetfund .footer{
    text-align:center;color:#666;
  }

  .targetfund .footer .bot{
    font-size:11px;padding:10px 0 20px 0;
  }
.targetfund .slopingside{
    height:0px;
    width:45px;
    margin-top: 30px;
    border-top: 0.1px solid rgb(128, 126, 126);
    transform:rotate(125deg);
    -o-transform:rotate(125deg);
    -moz-transform:rotate(125deg);
    -webkit-transform:rotate(125deg);
}
</style>
