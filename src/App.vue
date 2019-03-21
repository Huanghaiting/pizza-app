<template>
  <div id="app">
    <div class="container">
<appHeader></appHeader>
</div>
<div class="container">
  <!-- 点击哪个组件跳转到哪个页面 -->
  <router-view></router-view>
</div>
<br>
<!-- 路由复用 -->
<div class="container">
<div class="row">
  <div class="col-sm-12 col-md-4">
    <router-view name='orderingGuideLink'></router-view>
  </div>
  <div class="col-sm-12 col-md-4">
    <router-view name='deliverLink'></router-view>
  </div>
  <div class="col-sm-12 col-md-4">
    <router-view name='historyLink'></router-view>
  </div>
</div>
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
