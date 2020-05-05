<template>
	<div class="sysInfo">
		<div class="load" v-if="arrData.length==0">
			<spinner type="lines"/>
		</div>
		<div v-else>
            <div class="title" >{{arrTitle}}</div>
            <div class="titleBot1">自动止盈的基金投资服务</div>
            <div class="titleBot2">比较生猛 / 不易达成 / 落袋为安 / 省心</div>
            <div class="titleCont">[武林秘籍]看了再说</div>
            <div v-for="(it,idx) in arrData" :key="idx">
                <div class="linkList"><router-link :to="{path:'/fundWap/systemInfoDetail',query:{sysId:it.sid}}"> {{idx+1}}. {{it.title}}</router-link></div>
            </div>
        </div>
	</div>
</template>
<script>
	import systemInfo  from  "./js/systemInfo.js"
  	export default systemInfo
</script>
<style>
.sysInfo .title{
    font-size:large;
    text-align:center;
    padding-top:15px;
}

.sysInfo .load{
    text-align: center;
    height: 250px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.sysInfo .titleBot1{
	background-color:#db5361;
    line-height:35px;
    margin:10px 20px;
    color:white;
    text-align:center;	
}

.sysInfo .titleBot2{
	color:#666;
    text-align:center;
    font-size:12px;
}

.sysInfo .titleCont{
	margin:20px;
    color:#666;
    font-size:15px;
 }

.sysInfo .linkList{
	color: #666;
	font-size:12px;
	padding-left:20px;
	line-height: 25px;
}
	
</style>