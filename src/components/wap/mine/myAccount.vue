<template>
  <div class="myAcc">
    <group>
      <cell class="msg"  :title="'头像'" is-link><img src="../../../assets/images/biz/avastar.jpg" class="avastar"/></cell>
      <cell class="msg" :title="'昵称'" :value="'总有刁民想害朕'" is-link></cell>
      <cell class="msg" :title="'手机号码'" :value="'18888888888'" is-link></cell>
    </group>

    <group>
      <cell class="msg" :title="'基金交易账户'" :value="'已开通'" is-link></cell>
    </group>

    <group>
      <cell class="msg" :title="'修改登录密码'" is-link></cell>
      <x-switch class="msg" title="手势密码" v-model="show16"></x-switch>
      <x-switch class="msg" title="指纹密码" v-model="show16"></x-switch>
    </group>

    <group>
      <cell class="msg" :title="'福利中心'" :value="'已开通'" is-link></cell>
      <cell class="msg" :title="'豆豆币'"  is-link></cell>
    </group>

    <group>
      <cell class="msg" :title="'使用帮助'"  is-link></cell>
      <cell class="msg" :title="'关于豆豆金'" is-link></cell>
    </group>
    <div style="height:40px"/>

    <div class="mfooterFix">安全退出</div>

  </div>
</template>
<script>
  import myAccount  from  "./js/myAccount.js"
  export default myAccount
</script>

<style>
  .myAcc{
    color:dimgray;
    font-size:12px;
    /* margin:10px 10px 0px 10px; */
  }
  .myAcc .avastar{
    height:40px;
    width:40px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
  }
  .myAcc .msg{
    font-size: 12px;
  }

  .mfooterFix{
    text-align:center;
    font-size:12px;
    position:absolute;
    bottom:0;
    width:100%;
    height:80px;
    color:brown;
    background:#F7F7F7;
    padding-top: 10px;
  }

</style>
