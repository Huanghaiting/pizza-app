import Vue from 'vue'
//①引入路由
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
//二级路由
import Contact from './components/about/Contact'
import Deliver from './components/about/Deliver'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'
//②使用路由
Vue.use(VueRouter)
//③ 配置路由
const routes=[
  {path:'/',component:Home},
  {path:'/menu',component:Menu},
  {path:'/menu',component:Menu},
  {path:'/admin',component:Admin},
  {path:'/about',redirect: '/history',component:About,children:[
    {path:'/contact',name:'contactLink',component:Contact,children:[
      {path:'/phone',name:'phoneNumber',component:Phone},
      {path:'/personname',name:'personName',component:PersonName}
    ]},
    {path:'/deliver',name:'deliverLink',component:Deliver},
    {path:'/history',name:'historyLink',component:History},
    {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'*',redirect: '/'}
]
//④实例化router，将routes放在router里
const router= new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el: '#app',
  //将router放在实例里使用
  router,
  render: h => h(App)
})
