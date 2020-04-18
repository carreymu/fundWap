<template>
  <div class="targetIndex">
    <div class="load" v-if="itemList.length==0">
        <spinner type="lines"/>
    </div>
    <div v-else class="newsItem" v-for="(item, index) in itemList" :key="index">
      <router-link :to="'/fundWap/targetDetail/'+item.id">
      <flexbox>
        <flexbox-item>
          <flexbox orient="vertical">
            <flexbox-item>
                <flexbox orient="vertical">
                  <flexbox-item class="title">{{item.title}}</flexbox-item>                  
                  <flexbox-item style="font-size:12px;">02-10 18:10</flexbox-item>
                </flexbox>
            </flexbox-item>          
          </flexbox>
        </flexbox-item>
        <flexbox-item class="postListImg"><img :src="item.icon"></flexbox-item>      
      </flexbox>      
      </router-link>
      <div class="line"></div>    
    </div>
  </div>
</template>
<script>
  import targetNews  from  "./js/targetNews.js"
  export default targetNews
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
.line{border-bottom:1px solid rgb(230, 230, 230); padding:10px 0 5px 0;}
.targetIndex .load{
    text-align: center;
    height: 250px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.targetIndex .newsItem{
  margin:5px 10px 0 10px;
  position: relative;
  height: 126px;
  overflow: hidden;
  border-radius: 5px
}

.targetIndex .newsItem .postListImg {
    display: table-cell;
    width: 160px;
    height: 96px;
    margin-top: 0;
    overflow: hidden;
}

.targetIndex .newsItem .title{
  font-size:14px;
  font-weight:500;
  padding:10px 15px 20px 20px;  
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>


