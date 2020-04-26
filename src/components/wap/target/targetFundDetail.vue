<template>
  <div class="targetfund">
    <div v-if="isLoading">
      <spinner type="lines"/>
    <!-- </div>
    <div v-else> -->
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
          <div class="linefd"></div>
            <div style="padding:5px 0;">申购日期: 20年04月20日~20年04月29日</div>
          <div class="linefd"></div>
          <div style="padding: 5px 0;"><img src="../../../../static/img/funddetail_banner.png" width="340" height="80"/></div>
        </div>

        <!-- <div >
          <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">本期基金</span></div>
          <div style="float:right;"><router-link :to="'/fundWap/'+sysInfo.url+'/'+sysInfo.sid"><x-icon type="ios-help-outline" size="15"></x-icon></router-link></div>
        </div> -->
        <flexbox orient="vertical">
          <flexbox-item>
          <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">本期基金</span></div>
          <div style="float:right;"><router-link :to="'/fundWap/'+sysInfo.url+'/'+sysInfo.sid"><x-icon type="ios-help-outline" size="15"></x-icon></router-link></div>
          </flexbox-item>
        </flexbox>

        <div v-cloak>
                <!-- <div v-for="(item,index) in fTypeList" :key="index"> -->
                  <!-- <div class="funds"><span :style="'color:'+item.color">■</span> {{item.name}}</div> -->
                    <!-- <div class="fundsDetail"> -->
                      <flexbox>
                        <flexbox-item v-for="(item,idx) in fundList" :key="idx">
                          <div style="float: left;">{{item.fundName}}({{item.fundCode}})11</div>
                          <div style="float: right;">{{item.percent}}%</div>
                        </flexbox-item>
                      </flexbox>
                    <!-- </div> -->
                <!-- </div> -->
          <!-- <div class="linefd"></div> -->
        </div>
        <!-- <div v-else>aaa
          {{sysInfo}}
        </div> -->
        
        <!-- <div>
          <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">服务内容</span></div>
          <div >-选基说明</div>
        </div> -->
        <!-- <div>
          <div class="foot">
            <div class="rect" v-for="(item, index) in sysCatList" :key="index">
              <router-link :to="item.url+'/'+item.scid"><div v-html="item.subtitle"></div></router-link>
            </div>
          </div>
        </div> -->
        <!-- <flexbox>
          <flexbox-item class ="waitInvokeTxtPre">|||| <span class="waitInvokeTxtTail">本期基金</span></flexbox-item>          
        </flexbox> -->
        

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
  </div>
</template>
<script>
  import { Tabbar, TabbarItem ,XHeader,XButton,XImg, Flexbox, FlexboxItem, Divider,Spinner } from 'vux'
  export default {
    mounted() {
      // var myDate = new Date();
      // let mytime=myDate.toLocaleTimeString();
      // console.log(mytime)
      this.loadFundDetail()
      this.loadLatest()
      this.$store.commit('UPDATE_PAGE_TITLE', '鸡腿计划') 
    },
    // created() {
    //     this.loadFundDetail()
    // },
    data(){
      return {
        isLoading:false,
        itemList:[],
        sysInfo:{url:'systemInfoDetail',sid:7},
        fundList:[],
      }
    },
    methods:{
      loadFundDetail(){
        // let cid=this.$route.params.cid;
        this.baseAjax({
          url:'../../../static/basicData/choiceDetail.json',
          showLoading:true,
          // params:{cid:cid},
          success:function(data){
            // var myDate = new Date();
            // let mytime=myDate.toLocaleTimeString();
            // console.log(mytime)
            this.isLoading=true
            console.log(this.isLoading)
            let arr=[]
            let ro = data.returnObject[0].funds
            for(var i=0;i<ro.length;i++){
              arr=arr.concat(ro[i].fundsList)
            }
            this.fundList=arr
            console.log(this.fundList.length)
            console.log(this.fundList)
          }
        })
      },
      loadLatest(){
        this.baseAjax({
          url:'../../../static/basicData/latestNews.json',
          showLoading:true,
          success:function(data){              
              this.itemList=data.returnObject
              // console.log(this.itemList)
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
      Divider,
      Spinner
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
  .targetfund .funds{
    text-align: left;
    margin: 10px 10px 0 10px;
    color:#666;
   }
  .targetfund .fundsDetail{
    color:#999;
 	  padding: 5px 10px 5px 20px ;
    background-color:rgb(240, 240, 240);
    line-height: 22px;
   }
  .targetfund .linefd{
    border-bottom:1px solid rgb(230, 230, 230);
  }

  
.targetfund .foot {
  text-align: left;
}
.targetfund .foot .rect{
  margin-top: 10px;
  padding: 10px 0px 10px 15px;
  border-radius: 6px;
  box-shadow: 5px 5px 5px #e2e1e1; 
  background-color: white;
  transition: 0.7s;
  color: dimgray;
}


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
    margin-bottom: 10px;
  }

  .targetfund .waitInvokeTxtPre{
    color:brown;
    font-weight:900;
    font-size: 15px;
    padding-left:10px;
    float: left;
    clear: both;
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
