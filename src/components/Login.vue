<template>
<div class="text-center boxsignin">
  <form class="form-signin">
  <img class="mb-4" src="../assets/pizza_1229888_easyicon.net.svg" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">请登录</h1>
  <label for="inputEmail" class="sr-only">邮箱地址</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
  <label for="inputPassword" class="sr-only">密码</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> 记住我
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
</form>
</div>
</template>
<style scoped >
.mb-4{
  margin-top: 20px;
}
      .boxsignin{
        border: 1px solid silver;
        margin-top: 40px;
        border-radius: 15px;
      }
      #inputEmail,#inputPassword{
        width: 70%;
        margin: 5px auto;
      }
      button{
        width: 70%;
        margin: 0 auto;
      }
</style>
