<template>
  <div>
    <div class="passWord-input">
      <el-input type="password" class="inp" placeholder="请输入密码"></el-input>
      <div class="wop">wpde</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'password',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style  lang="less" scoped>
 .passWord-input{
   width:400px
 }
</style>
