<template>
  <div id="app">
    <div class="left">
      <ul class="left-item-wrap">
        <li class="left-item-list"><a @click="$goRoute('/password')">密码强度的检测</a></li>
        <li class="left-item-list"><a @click="$goRoute('/Hello')">Hello</a></li>
        <li class="left-item-list">112344</li>
        <li class="left-item-list">112344</li>
      </ul>
    </div>
    <div class="right">
      <div>
        <router-view>
       </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  height:100%;
  }
  .left{
    background:#e7e7ea8a;
    width:300px;
    height:100%;
    float:left;
  }
  .right{
    width:100%;
    margin-left:300px;
    height:100%;
    background:#f0f0f8;
  }
  .left-item-wrap{
    padding:20px;
  }
  .left-item-list{
    height:40px;
    line-height:40px;
    padding-left:10px;
    list-style:none;
    margin-bottom:10px;
    cursor:pointer;
    background:#607d8b;
    border-radius:4px;
  }
</style>
