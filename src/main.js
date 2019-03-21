import Vue from 'vue'
//①引入路由
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
//②使用路由
Vue.use(VueRouter)

//④实例化router，将routes放在router里
const router= new VueRouter({
  routes,
  mode:'history'
})
//全局守卫
// router.beforeEach((to, from, next) => {
//   if(to.path=='/login'|| to.path=='/register'){
//     next();
//   }else{
//     alert("您还没有登录，请先登录！")
//     next('/login')
//   }

// })
new Vue({
  el: '#app',
  //将router放在实例里使用
  router,
  render: h => h(App)
})
