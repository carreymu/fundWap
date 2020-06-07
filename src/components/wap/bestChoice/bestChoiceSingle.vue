<template>
	<div class="bstSgl">
		<div class="load" v-if="JSON.stringify(mainData)=='{}'">
			<spinner type="lines"/>
		</div>
		<div v-else>
			<div class="detail-text">
				<!-- <p v-html="mainData.content" style="line-height:35px;"></p> -->
				<img :src="mainData.img_url" />
                <div style="font-size:15px;">醒醒,你不是分析君啊,你是优选基金页面，单个页面!!</div>
			</div>
		</div>

		  <div class="bstfooterFix">
			<flexbox style="text-align:center;">
			<flexbox-item >
				<x-button type="default" class="fnt12" :link="{path:'/fundWap/targetSOrder',query:{cid:cid,sch:true}}">定期存入</x-button>
			</flexbox-item>
			<flexbox-item >
				<x-button type="warn" class="fnt12" :link="{path:'/fundWap/targetSOrder',query:{cid:cid}}">立即存入</x-button>
			</flexbox-item>
			</flexbox>
		</div>
	</div>
</template>
<script>
  import bestChoiceSingle  from  "./js/bestChoiceSingle.js"
  export default bestChoiceSingle
</script>
<style>
.bstSgl .title{
	font-size: 16px;
	line-height: 25px;
	overflow: hidden;
	text-align: center;
	padding: 10px 5px 5px 5px;
}

.bstSgl .detail-text{
	color: #666;
	padding:10px 15px;	
}

.bstSgl .detail-text p{
	text-indent: 28px;
	font-size: 14px;
	line-height: 22px;
	color: #666
}

.bstSgl  .sDate{
	margin-top: 10px;
	font-size: 12px;
	color: #666
}

.bstSgl  .text-top{
	border-bottom: 1px solid #eee;
	padding: 10px 15px 15px 15px; 
 }

 .bstSgl .load{
    text-align: center;
    height: 250px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.bstSgl .bstfooterFix{
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:97px;
    background:#F7F7F7;
}
</style>