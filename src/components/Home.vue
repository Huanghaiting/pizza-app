<template>
<div class="row">
  <div id="home" class="col-sm-12 text-center">
    <div class="background">
      <h1>欢迎大家品尝pizza！</h1>
      <h2>这里有你非常喜欢的pizza！</h2>
      <button @click="goToMenu" class="btn btn-success">let's order!</button>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  methods:{
    goToMenu:function(){
      this.$router.push({name:"menuLink"})
    }
  }
}
</script>
<style>
#home{
  background: url('../../src/assets/pizza2.jpg');

  height: 700px;
  padding: 10%;

}
h1,h2{
  margin: 6%;
}
.background{
  background: #eee;
  opacity: 0.8;
 max-width: 580px;
 margin: 60px auto;
 padding: 20px 0;
}
</style>
