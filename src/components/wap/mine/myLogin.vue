<template>
    <div class="myLg">
        <div class="wel">欢迎登录</div>
        <div>
          <group style="padding: 10px;">
            <x-input required :show-clear="false" placeholder="请输入用户名或手机号或Email" v-model="uname" :min="6" :max="16" class="fmfnt"
             @on-enter="onEnter"></x-input>
            <x-input required :show-clear="false" type="password" placeholder="请输入密码" v-model="upwd" :min="6" :max="16" @on-enter="onEnter"
            class="fmfnt"></x-input>
          </group>
          <x-button type="warn" @click.native="login()">登录</x-button>
        </div>
        <div style="padding:20px;">
          <div style="float:left">忘记密码</div>
          <div style="float:right">没有账号?注册</div>
        </div>
        <divider>其他登录方式</divider>
        <div style="padding:10px;">
          第三方帐号登录: &nbsp;&nbsp;
          <img src="../../../../static/img/weixin.png" @οn-click="doShowToast()" style="cursor: pointer;height:20px;width:25px"/> &nbsp;&nbsp;
          <img src="../../../../static/img/weibo.png" @οn-click="doShowToast()" style="cursor: pointer;height:20px;width:25px"/>
        </div>
      <toast v-model="showMsg" type="text"  width="20em" class="showMsg" :time="2000">coming soon....</toast>
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
    background-color: #fbf9fe;
   }
</style>
