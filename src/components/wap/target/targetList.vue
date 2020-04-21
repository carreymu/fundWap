<template>
  <div class="targetList">
    <div class="load" v-if="itemList.length==0">
        <spinner type="lines"/>
    </div>
    <div v-else class="hisList">
      <flexbox orient="vertical">
        <flexbox-item>
            <v-chart :data="chartData.data">
              <v-scale x field="date" type="timeCat" mask="MM-DD" />
              <v-scale y field="value" :tick-count="5" :max="300" />
              <v-line series-field="stock_name" :colors="chartData.color"/>
              <div v-for="(item, index) in chartData.tag" :key="index">
                <v-guide type="html" :options="item" />
              </div>
              <!-- <v-tooltip :show-item-marker="false" show-x-value /> -->
              <!-- <v-tooltip show-crosshairs show-value-in-legend/> -->
            </v-chart>
          <!-- <flexbox orient="vertical">
            <flexbox-item>
                <flexbox orient="vertical">
                  <flexbox-item class="title">{{item.title}}</flexbox-item>                  
                  <flexbox-item style="font-size:12px;">02-10 18:10</flexbox-item>
                </flexbox>
            </flexbox-item>          
          </flexbox> -->
        </flexbox-item>
        <flexbox-item ><div style="font-size:12px;color:dimgray;padding:0 5px;">共发车57期,42期已达标5%~8%,平均运行4.4个月.投资年化回报18.49%.跑赢大盘19.66%以上。</div>
        <div class="line"></div></flexbox-item> 
        <!-- <flexbox-item ></flexbox-item> -->
        <flexbox-item>
          <!-- asdfssfd -->
            <tab :line-width=2 active-color='#FF0033' v-model="index">
              <tab-item class="vux-center" :selected="demo2 === item" @on-item-click="onItemClick" v-for="(item, index) in list2" :key="index">{{item}}</tab-item>
            </tab>
            <swiper v-model="index" :show-dots="false" style="height:100%">
              <swiper-item v-for="(item, ind) in list2" :key="ind" :style="ind==index?{position:'static'}:''">
                <div v-for="(it,idx) in targetListData" :key="idx">
                  <!-- {{targetListData.length}} -->
                <flexbox orient="vertical">
                  <flexbox-item style="color:#999;padding-top:10px;">
                    <div style="float: left;">大目标{{it.targetName}}</div>
                    <div style="float: right;">建仓中</div>
                  </flexbox-item>
                  <flexbox-item style="color:dimgrey;">
                    <div style="float: left;">目标收益<span style="color:red;">+5.01%</span></div>
                    <div style="float: right;">运行23天</div>
                  </flexbox-item>
                </flexbox>
                <div class="line"></div>
                </div>
                <!-- <flexbox orient="vertical">
                  <flexbox-item style="color:#999;padding-top:10px;">
                    <div style="float: left;">大目标2012</div>
                    <div style="float: right;">建仓中</div>
                  </flexbox-item>
                  <flexbox-item style="color:dimgrey;">
                    <div style="float: left;">目标收益<span style="color:red;">+5.01%</span></div>
                    <div style="float: right;">运行23天</div>
                  </flexbox-item>
                </flexbox> -->
              </swiper-item>
            </swiper>
        </flexbox-item> 
      </flexbox>
      
    </div>
  </div>
</template>
<script>
  import targetList  from  "./js/targetList.js"
  export default targetList
</script>
<style>
a:link {
 font-size: 12px;
 color: #000000;
 text-decoration: none;
}
a:visited {
 font-size: 12px;
 color: #000000;
 text-decoration: none;
}
a:hover {
 font-size: 12px;
 color: #999999;
}
.vux-swiper{height:500px;}
.line{border-bottom:1px solid rgb(230, 230, 230);}
.targetList .load{
    text-align: center;
    height: 250px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.targetList .hisList{
  margin:5px 10px 0 10px;
  position: relative;
  overflow: hidden;
  border-radius: 5px
}

.targetList .hisList .wrap span{
  display:none;
  float:left;
}
.targetList .hisList .wrap:hover span{
  display:block;margin-right:10px;
}
.targetList .hisList .postListImg {
    display: table-cell;
    width: 160px;
    height: 96px;
    margin-top: 0;
    overflow: hidden;
}

.targetList .hisList .title{
  font-size:14px;
  font-weight:500;
  padding:10px 15px 20px 20px;  
  overflow: hidden;
  text-overflow: ellipsis;
}
.targetList .tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>


