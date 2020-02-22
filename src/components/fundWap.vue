<template>
  <div class="fundWap" style="height: 100%">
   <view-box ref="viewbox" body-padding-top="46px">
     <div class="vux-demo-header-box" slot="header">
        <x-header :left-options="{backText: ''}" style="background-color:#DD5858; color:white;" v-show="headShow">{{pageTitle}}</x-header>
     </div>
     <div v-transfer-dom class="loading-box">
        <loading :show="loading" position="absolute"></loading>
    </div>
        <router-view></router-view>
     <tabbar v-show="footerShow"  slot="bottom">
      <tabbar-item selected link="/fundWap/newsIndex">
        <img slot="icon" src="../assets/images/btn.png">
        <span slot="label">大目标</span>
      </tabbar-item>
      <tabbar-item link="/fundWap/drumstick">
        <img slot="icon" src="../assets/images/msg.png">
        <span slot="label">鸡腿计划</span>
      </tabbar-item>
      <tabbar-item  link="/fundWap/bestChoice">
        <img slot="icon" src="../assets/images/art.png">
        <span slot="label">优选</span>
      </tabbar-item>
      <tabbar-item link="/fundWap/mine">
        <img  slot="icon" src="../assets/images/cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    </view-box>
  </div>
</template>

<script>
  import { Tabbar,Icon,TabbarItem ,XHeader,Loading,ViewBox} from 'vux'
  import { TransferDomDirective as TransferDom } from 'vux'

  import {mapGetters} from 'vuex'
 
  export default {
    computed:mapGetters([
      'headShow',
      'loading',
      'footerShow',
      'pageTitle'
    ]),
    data(){
      let data={

      }
      return data
    },
    mounted() {
      
    },
    directives: {
        TransferDom
      },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      Loading,
      ViewBox,
      Icon
    }
  }
</script>
<style>

.fundWap .vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.fundWap .weui-tabbar__icon img{
  width: auto;
  height: 90%;
}

 .fundWap .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: #DD5858
}

</style>

