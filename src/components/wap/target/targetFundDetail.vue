<template>
<div>
  <div class="targetfund">
    <div v-if="fundList.length==0">
      <spinner type="lines"/>
    </div>
    <div v-else>
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
        <div style="padding:5px 0;text-align:center;">申购日: 20年04月20日~20年04月29日</div>
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

        <div style="padding:5px 0;">
          <div v-for="(item,idx) in fundList" :key="idx"  style="clear:both;padding:5px 5px;color:#666;">
            <div style="float: left;">{{item.fundName}}({{item.fundCode}})</div>
            <div style="float: right;">{{item.percent}}%&nbsp;  ></div>
          </div>
        </div>
                

        <div class="line"></div>
        <div style="padding-top:5px;">
            <div class ="waitInvokeTxtPre">||| <span class="waitInvokeTxtTail">服务内容</span></div>
            <div style="clear:both;margin-left:10px;line-height:25px;text-align:left;" v-html="serviceInfo">-选基说明-v-html</div>
        </div>
        
        <!-- <div class="linefd"></div> -->
        <div>
          <group>
            <cell class="cell" :title="'操作与费率说明'" :link="{path:'/fundWap/systemInfoDetail/8'}" ></cell>
            <cell class="cell" :title="'大目标服务费说明'" :link="{path:'/fundWap/systemInfoDetail/8'}" ></cell>
            <cell class="cell" :title="'大目标是什么'" :link="{path:'/fundWap/systemInfoDetail/8'}"></cell>
            <cell class="cell" :title="'常见问题'" :link="{path:'/fundWap/systemInfoDetail/8'}" ></cell>
          </group>
        </div>

        <div class="linefd"></div>
        <div class="footer">
          <div class="bot">基金历史收益部代表其未来表现.<br/>【市场有风险,投资需谨慎。】</div>
        </div>

    </div>
  </div>
  <div class="footerFix">
    <div class="linefd"></div>
      <div class="timeFont">申购倒计时: {{hour}}小时{{min}}分{{second}}秒</div>
    <div class="linefd"></div>
    <flexbox style="text-align:center;">
      <flexbox-item ><div style="font-weight:bold;">3000元起投 0申购费</div><div style="font-size:10px;">需使用服务卡</div></flexbox-item>
      <flexbox-item ><x-button type="warn" link="/fundWap/targetOrder/2">申购</x-button></flexbox-item>
    </flexbox>
  </div>
</div>
</template>
<script>
  import { Tabbar, TabbarItem ,XHeader,XButton, Flexbox, FlexboxItem, Spinner,Cell, Group } from 'vux'
  export default {
    mounted() {
      this.countTime()
      this.$store.commit('UPDATE_PAGE_TITLE', '大目标2006') 
    },
    data(){
      return {
        serviceInfo:"- 操作与费率说明<br/>- 大目标服务费说明<br/>- 大目标是什么<br/>- 常见问题<br/>",
        sysInfo:{url:'systemInfoDetail',sid:7},
        fundList:[
          {id: 1001, fundName: "景顺长城沪深100增强基金", fundCode: "000311", percent: "申购基金"},
          {id: 1001, fundName: "景顺长城沪深100增强", fundCode: "000311", percent: "36.09"},
          {id: 1002, fundName: "景顺长城沪深200增强", fundCode: "000312", percent: "20.5"},
          {id: 1003, fundName: "富国动力A", fundCode: "001508", percent: "10"},
          {id: 1004, fundName: "富国动力B", fundCode: "001509", percent: "10.17"},
          {id: 1005, fundName: "前海开源价值成长A", fundCode: "006216", percent: "23.24"},
          {id: 1006, fundName: "富国动力A", fundCode: "001508", percent: "10"},
          {id: 1007, fundName: "富国动力B", fundCode: "001509", percent: "10.17"},
          {id: 1008, fundName: "前海开源价值成长A", fundCode: "006216", percent: "23.24"}
        ],
        curStartTime: '2020-07-31 08:00:00',
        day: '0',
        hour: '00',
        min: '00',
        second: '00',
      }
    },
    methods:{
      // loadFundDetail(){
      //   // let cid=this.$route.params.cid;
      //   this.baseAjax({
      //     url:'../../../static/basicData/choiceDetail.json',
      //     showLoading:true,
      //     // params:{cid:cid},
      //     success:function(data){
      //       // var myDate = new Date();
      //       // let mytime=myDate.toLocaleTimeString();
      //       // console.log(mytime)
      //       let arr=[]
      //       let ro = data.returnObject[0].funds
      //       for(var i=0;i<ro.length;i++){
      //         arr=arr.concat(ro[i].fundsList)
      //       }
      //       this.fundList=arr
      //       console.log(this.fundList.length)
      //       console.log(this.fundList)
      //     }
      //   })
      // },
      // loadLatest(){
      //   this.baseAjax({
      //     url:'../../../static/basicData/latestNews.json',
      //     showLoading:true,
      //     success:function(data){              
      //         this.itemList=data.returnObject
      //         // console.log(this.itemList)
      //     }
      //   })
      // }
      countTime() {  
          //获取当前时间  
          var date = new Date();  
          var now = date.getTime();  
          //设置截止时间  
          let endDate = new Date(this.curStartTime) // this.curStartTime需要倒计时的日期
          var end = endDate.getTime();  
          
          //时间差  
          var leftTime = end-now; 
          //定义变量 d,h,m,s保存倒计时的时间  
          if (leftTime >= 0) {
            // 天
            this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
            // 时
            let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
            this.hour = h < 10 ? '0' + h : h
            // 分
            let m = Math.floor(leftTime / 1000 / 60 % 60)
            this.min = m < 10 ? '0' + m : m
            // 秒
            let s = Math.floor(leftTime / 1000 % 60)
            this.second = s < 10 ? '0' + s : s
          } else {
            this.day = 0
            this.hour = '00'
            this.min = '00'
            this.second = '00'
          }
          // 等于0的时候不调用
          if (Number(this.hour) === 0 && Number(this.day) === 0 && Number(this.min) === 0 && Number(this.second) === 0) {
            return
          } else {
          // 递归每秒调用countTime方法，显示动态时间效果,
            setTimeout(this.countTime, 1000)
          }
      } 
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      XButton,
      Flexbox, 
      FlexboxItem,
      Spinner,
      Group,
      Cell
    }
  }
</script>

<style>
  .targetfund{
    /* text-align: center; */
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .targetfund .cell{
    font-size:14px;
  }
 .targetfund .topcontext{
    padding: 15px 40px 20px 40px;
    display:-webkit-flex;
    display: flex;
    justify-content: space-around;
  }
  .linefd{
    border-bottom:1px solid rgb(230, 230, 230);
  }
  .targetfund .line{
    border-bottom:1px solid rgb(230, 230, 230);
    padding:10px 0 10px 0;
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
    padding-left:5px;
    float: left;
    clear: both;
  }
  .targetfund .waitInvokeTxtTail{
    color:#000000;padding-left:5px;
  }
  .targetfund .footer{
    text-align:center;
    color:#666;
  }
  .targetfund .footer .bot{
    font-size:11px;
    padding:10px 0 80px 0;
  }  
  .footerFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:130px;
    background:#F7F7F7;
  }
  .footerFix .timeFont{
    padding:5px 0;
    text-align:center;
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
