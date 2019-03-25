<template>
  <div class="menu">
  <table class="table table-condensed">
  <thead>

<tr>
      <th>尺寸</th>
      <th>价格</th>
      <th>加入</th>
    </tr>

  </thead>
  <tbody>
   <tr><th>夏威夷pizza</th></tr>

    <tr>
      <td>10寸</td>
      <td>38元</td>
      <td><button>+</button></td>
    </tr>
    <tr>
      <td>12寸</td>
      <td>49元</td>
      <td><button>+</button></td>
    </tr>
<tr>
  <th>巴萨罗那风味pizza</th>
</tr>

    <tr>
      <td>10寸</td>
      <td>38元</td>
      <td><button>+</button></td>
    </tr>
    <tr>
      <td>12寸</td>
      <td>49元</td>
      <td><button>+</button></td>
    </tr>
<tr>
  <th>榴莲pizza</th>
</tr>

    <tr>
      <td>10寸</td>
      <td>39元</td>
      <td><button>+</button></td>
    </tr>
    <tr>
      <td>12寸</td>
      <td>52元</td>
      <td><button>+</button></td>
    </tr>
  </tbody>
</table>

<div class="shoppingcart">
  购物车里暂时没有东西
</div>
  </div>
</template>
<style scoped>
.menu{
  position: relative;
}
table{
  width: 70%;
}
.shoppingcart{
  /* border: 1px solid silver; */
  height: 300px;
  width: 25%;
  position: absolute;
top:0;
right: 0;
}
</style>
