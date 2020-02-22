<template>
  <!-- <div class="mine">
    <div class="topDate">
      <div class="top">鸡腿计划</div>
      <br/>

      <flexbox>
        <flexbox-item class="aimRmkSub">      
        <group>
          <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
          <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
        </group>
      </flexbox-item>
        </flexbox>
        <br/>
        <div class="footer">
          <div>更多内容 ></div>
          <divider>-</divider>
          <div class="bot">基金历史收益部代表其未来表现.<br/>【市场有风险,投资需谨慎。】</div>
        </div>
    </div>
  </div> -->
  <div class="mine">
    <!-- <div >鸡腿计划</div> -->
      <!-- <flexbox>
          <flexbox-item ><img src="../../../assets/images/biz/avastar.jpg" style="height:40px;width:40px;-webkit-border-radius: 50%;border-radius: 50%;overflow: hidden;"/></flexbox-item>
          <flexbox-item ></flexbox-item> 
          <flexbox-item ></flexbox-item>
          <flexbox-item ></flexbox-item> 
      </flexbox> -->
    <flexbox class="rectAgl">
      <flexbox-item :span="0.2"><img src="../../../assets/images/biz/avastar.jpg" style="height:40px;width:40px;-webkit-border-radius: 50%;border-radius: 50%;overflow: hidden;"/></flexbox-item>
      <flexbox-item >鉄の卵</flexbox-item> 
      <flexbox-item :span="0.55">
        <flexbox orient="vertical">
          <flexbox-item class="aimRmk">总资产: <span class="aimRmkMoney">2,100,200.00</span></flexbox-item>
          <flexbox-item class="aimRmk">最新收益: <span class="aimRmkMoney">+8,000.01</span></flexbox-item>
        </flexbox>
      </flexbox-item>
      <!-- <flexbox-item>
        //////////
      </flexbox-item> -->
      <!-- <flexbox-item>
        <flexbox orient="vertical">
          <flexbox-item class="aimRmk">最新收益</flexbox-item>
          <flexbox-item class="aimRmkSub">+8,0000.01</flexbox-item>
        </flexbox>
      </flexbox-item> -->
    </flexbox>
    <group>
      <div v-for="(item, index) in menuList" :key="index" class="msg">
        <cell :title="item.title" is-link>
          <div>
            <router-link :to="'/fundWap/targetDetail/1'">
              <div v-if="item.newsCnt!=undefined & item.newsCnt>0">
                <span>新消息 &nbsp;</span>
                <badge :text="item.newsCnt"></badge></div>
              <div v-else>
                <span>查看消息 &nbsp;</span>
              </div>
            </router-link>
          </div>
        </cell>
      </div>
    </group>
    </div>
</template>
<script>
  import { Tabbar, TabbarItem ,XHeader,XButton,XImg, Flexbox, FlexboxItem, Group, Badge, Cell } from 'vux'
  export default {
    mounted() {
      this.menuLists();
      this.loadLatest(); 
      this.$store.commit('UPDATE_PAGE_TITLE', '我的理财') 
    },
    data(){
      return {
        itemList:'',
        menuList:'',
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
      },
      menuLists(){
        let self=this;
        this.baseAjax({
          url:'../../../static/basicData/mineMenu.json',
          showLoading:true,
          success:function(data){
              console.log(data)
              self.menuList=data.returnObject
              // console.log(self.urlList)
          }
        })
      },
    },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      XButton,
      XImg,
      Flexbox,
      FlexboxItem,
      Group,
      Cell,
      Badge
    }
  }
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
  .mine{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .mine .rectAgl{
    height: 70px; 
    width: auto;
    background: rgb(216, 80, 80);
    border-width: 10px;
    border-style: solid;
    border-radius: 15px;
    border-color:  rgb(216, 80, 80);
    color: white;
  }

  .mine .rectAgl .aimRmk{
    /* text-align:center; */
    margin-left:5px;
  }
  .mine .rectAgl .aimRmkMoney{
    font-weight: 800;
    font-size: 14px;
  }
  /* .mine .rectAgl .aimRmkSub{
    font-size: 14px;
    text-align: center;
  } */

  .mine .msg{
    font-size: 12px;
    margin-left:5px;
  }  


</style>
