<template>
  <div class="text-center boxsignin">
  <form class="form-signin ">
  <!-- <img class="mb-4" src="../assets/pizza_1229888_easyicon.net.svg" alt="" width="72" height="72"> -->
  <h1 class="h3 mb-3 font-weight-normal">欢迎加入</h1>
  <label for="inputEmail" class="sr-only">邮箱地址</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="邮箱地址" required autofocus>
  <label for="inputPassword" class="sr-only">密码</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="密码" required>
  <label for="inputPassword" class="sr-only">确认密码</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="确认密码" required>

  <button class="btn btn-lg btn-primary btn-block" type="submit">注册</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
</form>
</div>
</template>
<style scoped >
.mb-4{
  margin-top: 20px;
}
      .boxsignin{
        margin: 0 auto;
        border-radius: 15px;
        background: url('../../src/assets/pizza.jpg');
        width: 100%;
        height: 800px;
        opacity: 0.8;
      }
.form-signin{
  padding-top: 20%;
}
      h1{
        color: aliceblue;
      }
      #inputEmail,#inputPassword{
        width: 70%;
        margin: 20px auto;
      }
      button{
        width: 70%;
        margin: 0 auto;
      }
</style>
