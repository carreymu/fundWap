<template>
  <div class="bestChoiceDetail">
		<div class="top-box">
			<flexbox>
               <flexbox-item :span="3">
               		<div class="item-icon">22
               			<!-- <img src="../../../assets/images/timg.png"/> -->
               		</div>
               </flexbox-item>
               <flexbox-item>
               		<div class="top-name">
						<div class="s-name"><span>{{mainData.name}}</span><span class="name-label">私教</span></div>
						<p class="item-desc">{{mainData.description}}</p>
               		</div>
               		<div class="bottom-cer">
               			<x-icon type="ios-clock-outline" size="20" class="icon-clock"></x-icon>
               			<p><span>{{currentDate}}</span><span>({{currentDay}})</span></p>
	                </div>
                </flexbox-item>
	          </flexbox>
		</div>
		<div>
			<p class="remark">上课时间（时长：1小时）</p>
		</div>
		<div class="time-box">
			<div v-for="(item,index) in timeList" class="time-item" :key="index">
				<div class="group-head" @click="item.showList=!item.showList">
	                <flexbox>
	                   <flexbox-item :span="2">
	                  		 <div  v-show="index==0" class="s-icon"><x-icon type="ios-partlysunny-outline" size="30"></x-icon></div>
	                  		 <div  v-show="index==1" class="s-icon"><x-icon type="ios-sunny-outline" size="30"></x-icon></div>
	                  		 <div  v-show="index==2" class="s-icon"><x-icon type="ios-moon-outline" size="30"></x-icon></div>
	                   </flexbox-item>
	                   <flexbox-item ><div>{{item.name}}</div></flexbox-item>
	                   <flexbox-item :span="2"><div class="arrow-icon"><x-icon type="ios-arrow-down" size="20"></x-icon></div></flexbox-item>
	                </flexbox>
         </div>
          <div class="list-box" v-show="item.showList">
                <div class="checker-box">
                  <checker
                      v-model="checkTime"
                      type="checkbox"
                      default-item-class="checkTime-item"
                      selected-item-class="checkTime-item-selected"
                      disabled-item-class="checkTime-item-disabled"
                      >
                        <checker-item 
                          v-for="(sitem,sindex) in item.list" 
                          :key="sindex" 
                          :value="sitem.time" 
                          :disabled="!sitem.isEnable"
                          @on-item-click="checkMyTime(index,sitem.time,sitem.isEnable)">{{sitem.time}}
                        </checker-item>
                  </checker>
                </div>
          </div>
			</div>
      <div class="labels">
          <div class="is-allow">可选</div>
          <div class="no-allow">不可选</div>
          <div class="is-select">已选择</div>
      </div>
      <div class="bottom-btn" v-show="showReserveBtn">
          <x-button type="warn" @click.native="makeReserve">确定预约</x-button>
      </div>
		</div>
    <toast v-model="showSuccess" type="text" class="showSuccess" :time="2000">预约成功</toast>
    <toast v-model="showError" type="text" class="showError" :time="2000">预约失败</toast>
    <toast v-model="showMsg" type="text" class="showMsg" :time="2000">请选择1h相邻的时间段</toast>
  </div>
</template>
<script>
  import bestChoiceDetail  from  "./js/bestChoiceDetail.js"
  export default bestChoiceDetail
</script>

<style>

	.bestChoiceDetail .top-box{
		background: #fff
	}

	.bestChoiceDetail .item-icon{
		height: 60px;
		text-align: center;
		overflow: hidden;
  }

   .bestChoiceDetail .item-icon img{
		height: 100%;
		border-radius: 50%
   }

   .bestChoiceDetail  .item-box {
   		border-bottom:1px solid #eee;
   		background: #fff;
   }

   .bestChoiceDetail  .top-name{
   	   border-bottom:1px solid #eee;
   	   padding: 10px 0 5px 0;
   	   margin-right: 10px;
   }

   .bestChoiceDetail  .item-desc{
   	    font-size:12px;
   	    line-height: 20px;
   	    color: #666;
        clear:both;
   }

   .bestChoiceDetail .bottom-cer{
   		padding:10px 0;
   		font-size:12px;
   	    color: #666;
   	    position :relative;
   }

    .bestChoiceDetail .bottom-cer p{
    	padding-left: 15px;
    	line-height: 20px;
    }
	
	.bestChoiceDetail .bottom-cer p span{
		padding-left: 10px
	}

   .bestChoiceDetail .icon-clock{
   		position:absolute;
   		fill: #666;
   }

   .bestChoiceDetail .s-icon{
 	   padding-left: 20px
   }

	 .bestChoiceDetail .group-head{
		 font-size: 14px;
		 padding-top: 5px;
     border-bottom: 1px solid #eee
	  }

   .bestChoiceDetail .remark{
   	 height: 40px;
   	 font-size: 14px;
   	 line-height: 40px;
     color: #666;
   	 padding-left: 20px
   }

    .bestChoiceDetail .time-box{
   	 background: #fff;
     padding-bottom:10px
     ;
   }

   .bestChoiceDetail .checker-box{
      margin:15px;
   }

    .bestChoiceDetail  .time-item{
		   border-bottom: 1px solid #eee
   }
    .bestChoiceDetail  .arrow-icon{
   	  text-align: right;
   	  padding-right: 15px;

   }

   .bestChoiceDetail .checkTime-item {
	  width: 20%;
	  height: 32px;
	  line-height: 32px;
	  text-align: center;
    border: 1px solid #ccc;
	  background-color: #fff;
    color: #000;
    box-sizing: border-box;
	}
	.bestChoiceDetail .checkTime-item-selected {
	  background: #333333 url(../../../assets/images/bgIcon/select-icon.png) no-repeat right bottom;
    background-size:12px 10px;
	  color: #fff;
    border: 1px solid #333333;
    border-right:1px solid #ccc;

	}
  .bestChoiceDetail .checkTime-item-disabled{
      background: #DEDCDC;
  }

  .bestChoiceDetail .bottom-btn{
      padding:20px;
  }

  .bestChoiceDetail .labels{
      margin:5px 30px;
      height: 30px;
      line-height: 30px
  }

    .bestChoiceDetail .labels >div{
        float:left;
        margin-right: 20px;
        font-size: 12px;
        padding-left: 20px;

    }

    .bestChoiceDetail .labels .is-allow{
        background: url(../../../assets/images/bgIcon/is-allow.png) no-repeat left center ;
        background-size:12px;
    }

    .bestChoiceDetail .labels .no-allow{
        background: url(../../../assets/images/bgIcon/no-allow.png) no-repeat left center ;
        background-size:12px;
    }

    .bestChoiceDetail .labels .is-select{
      background: url(../../../assets/images/bgIcon/is-select.png) no-repeat left center ;
      background-size:12px;
    }

    .bestChoiceDetail .s-name span{
        height:30px;
        line-height: 30px;
        display:block;
        float: left;
    }

  .bestChoiceDetail .s-name .name-label{
      background: #6B106A;
      color: #fff;
      font-size: 12px;
      height:20px;
      line-height: 20px;
      margin: 5px 10px;
      padding:0 10px;
    }

    .bestChoiceDetail  .showSuccess .weui-toast__content{
         background: url(../../../assets/images/bgIcon/success.png) no-repeat left center ;
      background-size:20px;
    }

    .bestChoiceDetail  .showSuccess .weui-toast{
      padding-left: 10px;
    }


</style>