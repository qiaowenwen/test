<template>
  <div id="app">
    <div class="left">
      <ul class="left-item-wrap">
        <li class="left-item-list">112344</li>
        <li class="left-item-list">112344</li>
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
    background:#f0f0f0;
    width:400px;
    height:100%;
    float:left;
  }
  .right{
    width:100%;
    height:100%;
    background:#f0f0f8;
  }
  .left-item-wrap{
    padding:10px;
  }
  .left-item-list{
    margin-bottom:10px;
    cursor:pointer;
  }
</style>
