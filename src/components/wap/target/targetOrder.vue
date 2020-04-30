<template>
  <div class="targetOrder">
    <div class="topcontext">
		<div style="padding:10px;">大目标2014</div>
		<div class="aimRate"><x-input title="￥"  placeholder="最低买入3000.00元"></x-input></div>
    </div>

    <!-- <div class="linefd"></div> -->
    <div>
      <!-- <div class="aimRmkSub">
        <div style="clear:both;padding:5px 5px;color:#666;">
        <div style="float: left;">买入费率</div>
        <div style="float: right;">
          <div>
          <div style="float: left;">0.00%</div>
          <div style="float: right;">费率说明<x-icon type="ios-help-outline" size="15"></x-icon></div>
          </div>
        </div>
        </div>
        <div style="clear:both;padding:5px 5px;">
          <div style="float: left;">确认净值</div>
          <div style="float: right;">15:00之前提交将按04-29日净值确认份额</div>
        </div>
        <div style="clear:both;padding:5px 5px;">
          <div style="float: left;">确认日期</div>
          <div style="float: right;">04-30周四(预计)</div>
        </div>
      </div> 
      <div class="line"></div>-->

      <x-table :cell-bordered="false" :content-bordered="false" class="aimRmkSub">
        <tr>
          <td>买入费率</td>
          <td>0.00%&nbsp;</td>
          <td>费率说明<x-icon type="ios-help-outline" size="15"></x-icon></td>
        </tr>
        <tr>
          <td>确认净值</td>
          <td colspan="2">15:00之前提交将按04-29日净值确认份额</td>
        </tr>
        <tr>
          <td>确认日期</td>
          <td>04-30周四(预计)</td>
          <td></td>
        </tr>
      </x-table>


      <flexbox style="padding:10px 5px;">
        <flexbox-item >服务卡使用</flexbox-item>
        <flexbox-item :span="1/2">扣除一次(剩余8次)</flexbox-item>
        <flexbox-item style="text-align:right;padding-right:10px;">></flexbox-item>
      </flexbox>
      <div class="linefd"></div>
        <flexbox style="padding:10px 5px;">
          <flexbox-item :span="1/6">资金来源</flexbox-item>
          <flexbox-item :span="2/3">
            <div style="font-weight:bold;">包头银行<span style="font-size:10px;">(9494)</span></div>
            <div>单笔支付限额10万,日限额10万,月限额3000万</div>
          </flexbox-item>
          <flexbox-item style="text-align:right;padding-right:10px;">></flexbox-item>
        </flexbox>
      <div class="linefd"></div>
      <div style="padding-top:5px;font-size:12px;">
        <check-icon size="15" :value.sync="demo2" type="plain"> 已认真阅读并同意《金金豆大目标产品管理协议》</check-icon>
      </div>
    </div>
    <div class="footerFix">
      <div style="padding:5px 20px;text-align:center;"><x-button type="warn" link="/fundWap/targetOrder/2">提交</x-button></div>
    </div>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem ,XHeader,XButton, Flexbox, FlexboxItem, Spinner,XInput,CheckIcon,XTable  } from 'vux'
  export default {
    mounted() {
      this.$store.commit('UPDATE_PAGE_TITLE', '申购基金') 
    },
    data(){
      return {
        demo2: true,
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
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      XButton,
      Flexbox, 
      FlexboxItem,
      Spinner,
      XInput,
      CheckIcon,
      XTable
    }
  }
</script>

<style>
  .targetOrder{
    text-align: center;
    font-size:12px;
    color:#666;
    margin:10px 10px 0px 10px;
  }
 .targetOrder .topcontext{
    padding: 0px 10px;
  }
  .linefd{
    border-bottom:1px solid rgb(230, 230, 230);
  }
  .targetOrder .line{
    border-bottom:1px solid rgb(230, 230, 230);
    padding:10px 0 10px 0;
  }  
  .targetOrder .aimRate{
    font-size: large;
    text-align: center;
  } 
  .targetOrder .aimRmkSub{
    text-align:center;
    color:#999999;
    font-size:11px;
    margin-top: 10px;
  }
  .footerFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:125px;
    background:#F7F7F7;
  }
</style>
