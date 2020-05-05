<template>
	<div class="targetDetail">
		<div class="load" v-if="JSON.stringify(singleData)=='{}'">
			<spinner type="lines"/>
		</div>
		<div class="detail-box" v-else>
			<div class="text-top">
				<div class="title" v-html="singleData.subtitle"></div>
			</div>
			<div class="detail-text">
				<p v-html="singleData.content" style="line-height:35px;">
					{{singleData.content}}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	import systemInfoDetail  from  "./js/systemInfoDetail.js"
  	export default systemInfoDetail
</script>
<style>
.targetDetail .title{
	font-size: 16px;
	line-height: 25px;
	overflow: hidden;
	text-align: center;
	padding: 10px 5px 5px 5px;
}
.targetDetail .load{
    text-align: center;
    height: 250px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.targetDetail .detail-text{
	color: #666;
	padding:10px 15px;	
}

.targetDetail .detail-text p{
	text-indent: 28px;
	font-size: 14px;
	line-height: 22px;
	color: #666
}

.targetDetail  .text-top{
	border-bottom: 1px solid #eee;
	padding: 10px 15px 15px 15px; 
	text-align: center;
 }

.targetDetail .text-top .subtitle{
	font-size:14px;
}
</style>