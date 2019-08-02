// 定义router对象  导出给main.js使用
// 需要使用router需要把'vue-router' 引入
import VueRouter from 'vue-router'
import Vue from 'vue'
// 导入login组件 index.vue  @是绝对路径，默认找index
import login from '@/views/login'
// 需要使用Vue.use(VueRouter)注册，所以需要引入vue
import Home from '@/views/home'
import Welcome from '@/views/welcome'
Vue.use(VueRouter)

const router = new VueRouter({
  // 路由规则配置
  routes: [
    {
      // 登录的规则
      path: '/login',
      // name也是别名，给当前路由规则取名字
      // 跳转路由 $router.push("/login")或者$router.push({name:"login"})
      name: 'login',
      // 页面级别的组件，此处是组件名；所以需要去页面定义组件。并把组件引入此页面
      component: login
    },
    {
      // 登录的规则
      path: '/',
      // name也是别名，给当前路由规则取名字
      // 跳转路由 $router.push("/login")或者$router.push({name:"login"})
      // name: 'home',
      // 页面级别的组件，此处是组件名；所以需要去页面定义组件。并把组件引入此页面
      // 一级二级共享一个页面，所以可以把welcome的路由定义到首页路由上
      component: Home,
      // 方法1
      // redirect: '/welcome',
      // children: [
      //   { path: '/welcome', name: 'welcome', component: Welcome }
      //  方法2
      children: [
        { path: '/', name: 'welcome', component: Welcome }
      ]
    }
  ]
})
// 初始化一个router给main.js使用，所以需要导出
export default router
