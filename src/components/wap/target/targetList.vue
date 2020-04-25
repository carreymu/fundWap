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
        </flexbox-item>
        <flexbox-item ><div class="summary">{{summary}}</div>
        <div class="line"></div></flexbox-item>
        <flexbox-item>
            <tab :line-width=2 active-color='#FF0033' v-model="selectIdx">
              <tab-item @on-item-click="onItemClick" v-for="(item, index) in targetListData" :key="index">{{item.name}}</tab-item>
            </tab>
            <swiper v-model="selectIdx" :show-dots="false" :style="{height:autoHeight[selectIdx]+'px'}" :aspect-ratio="1.3">
              <swiper-item v-for="(item, ind) in targetListData" :key="ind">
                <div v-for="(it,idx) in item.items" :key="idx">
                  <router-link :to="'/fundWap/targetFundDetail/'+it.tid">
                    <flexbox orient="vertical">
                      <flexbox-item class="tabTop">
                        <div style="float: left;">大目标{{it.name}}</div>
                        <div style="float: right;">{{it.run_status}}</div>
                      </flexbox-item>
                      <flexbox-item style="color:dimgrey;">
                        <div style="float: left;">目标收益<span style="color:red;">+{{it.target_ratio}}%</span></div>
                        <div style="float: right;">{{it.run_statu}}{{it.run_days}}天</div>
                      </flexbox-item>
                    </flexbox>
                  </router-link>
                  <div class="line"></div>
                </div>
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
.targetList .hisList .tabTop {
  color:#999;
  padding-top:10px;
}

.targetList .hisList .summary{
  font-size:12px;
  color:dimgray;
  padding:0 5px;
}
</style>