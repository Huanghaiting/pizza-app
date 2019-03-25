<template>
  <header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a href="#">
      <img class="mb-4" src="../assets/pizza_1229888_easyicon.net.svg" alt="" width="30" height="24" >

    </a>
    <a herf="/" class="navbar-brand">Pizza点餐系统</a>

    <ul class="navbar-nav">
      <li>
        <router-link to="/" class="nav-link">主页</router-link>
      </li>
      <li>
        <router-link to="menu" class="nav-link">菜单</router-link>
      </li>
      <li>
        <router-link to="admin" class="nav-link">管理</router-link>
      </li><li>
        <router-link to="about" class="nav-link">关于我们</router-link>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <li>
        <router-link to="login" class="nav-link">登录</router-link>
      </li>
      <li>
        <router-link to="register" class="nav-link">注册</router-link>
      </li>

    </ul>

    </nav>
  </header>
</template>
<style>
.mb-4{
margin: 20px 5px;
}
</style>
