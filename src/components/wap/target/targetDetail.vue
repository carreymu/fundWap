<template>
	<div class="sysInfoDtl">
		<div class="load" v-if="JSON.stringify(mainData)=='{}'">
			<spinner type="lines"/>
		</div>
		<div v-else>
			<div class="text-top">
				<p class="title">{{mainData.title}}</p>
				<div class="sDate">
					<flexbox>
				      <flexbox-item>发布时间：{{mainData.inserttime}}</flexbox-item>
					</flexbox>
				</div>
			</div>
			<div class="detail-text">
				<p v-html="mainData.content" style="line-height:35px;"></p>
			</div>
		</div>
	</div>
</template>
<script>
  import targetDetail  from  "./js/targetDetail.js"
  export default targetDetail
</script>
<style>
.sysInfoDtl .title{
	font-size: 16px;
	line-height: 25px;
	overflow: hidden;
	text-align: center;
	padding: 10px 5px 5px 5px;
}

.sysInfoDtl .detail-text{
	color: #666;
	padding:10px 15px;	
}

.sysInfoDtl .detail-text p{
	text-indent: 28px;
	font-size: 14px;
	line-height: 22px;
	color: #666
}

.sysInfoDtl  .sDate{
	margin-top: 10px;
	font-size: 12px;
	color: #666
}

.sysInfoDtl  .text-top{
	border-bottom: 1px solid #eee;
	padding: 10px 15px 15px 15px; 
 }

 .sysInfoDtl .load{
    text-align: center;
    height: 250px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>