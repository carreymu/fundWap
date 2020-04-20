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
              <tab-item class="vux-center" :selected="'全部57期' === item" v-for="(item, index) in list2" :key="index">{{item}}</tab-item>
            </tab>
            <swiper v-model="index" height="100px" :show-dots="false">
              <swiper-item v-for="(item, index) in list2" :key="index">
                <div class="tab-swiper vux-center">{{item}} Container</div>
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


