<template>
  <div style="height: 100%;">
    <div class="login-bg">
      <img src="../assets/images/login-bg.jpg" />
      <div class="login-box">
        <div class="box">
          <h2>商品库存管理平台</h2>
          <div class="input-box">
            <el-input placeholder="请输入用户名" prefix-icon='el-icon-user' style="margin-bottom: 14px;"></el-input>
            <el-input type="password" placeholder="请输入密码" prefix-icon='el-icon-lock'></el-input>
          </div>
          <el-button type="primary" plain style="margin-top: 26px;width: 100%;">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style lang="" scoped>

</style>
