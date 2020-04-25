<template>
	<div class="targetDetail">
		<div class="detail-box">
			<div class="text-top">
				<div class="title" v-html="mainData.subtitle"></div>
			</div>
			<div class="detail-text">
				<p v-html="mainData.content" style="line-height:35px;">
					{{mainData.content}}
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