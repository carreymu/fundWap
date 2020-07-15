<template>
    <div class="myLg">
        <div class="wel">欢迎登录</div>
        <div>
          <group>
            <x-input required placeholder="请输入用户名或手机号或Email" v-model="uname" :min="6" :max="16" class="fmfnt" :show-clear="false"></x-input>
            <x-input required type="password" placeholder="请输入密码" v-model="upwd" :min="6" :max="16" class="fmfnt" :show-clear="false"></x-input>
            <x-button type="warn" @click.native="login()">登录</x-button>
          </group>
        </div>
        <div style="padding:20px;">
            <div style="float:left">忘记密码</div>
            <div style="float:right">没有账号?注册</div>
        </div>
        <divider>其他登录方式</divider>
        <div style="padding:10px;">
            第三方帐号登录: &nbsp;&nbsp;
            <img src="../../../../static/img/weixin.png" style="height:20px;width:25px"/> &nbsp;&nbsp;
            <img src="../../../../static/img/weibo.png" style="height:20px;width:25px"/>
        </div>

      <x-dialog v-model="showDialogStyle" hide-on-blur 
      :dialog-style="{'max-width': '100%', width: '90%', height: '50%', 'background-color': 'transparent'}">
        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
          <span >{{dialogContent}}</span>
          <br>
          <br>
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
      </x-dialog>
    </div>
</template>
<script>
  import myLogin  from  "./js/myLogin.js"
  export default myLogin
</script>

<style>
  .myLg{
    color:dimgray;
    font-size:12px;
    margin:10px 10px 0px 10px;
  }
  .myLg .wel{
    font-size:23px;
    padding:10px;
  }
  .myLg .fmfnt{
    font-size:12px;
   }


  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
