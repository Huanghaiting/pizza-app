<template>
  <div id="app">
    <div class="container">
<appHeader></appHeader>
</div>
<div class="container">
  <!-- 点击哪个组件跳转到哪个页面 -->
  <router-view></router-view>
</div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components:{
    appHeader:Header
  }

}
</script>

<style>

</style>
