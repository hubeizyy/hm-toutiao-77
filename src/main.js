import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入路由模块
// @ 是某个路径别名   @是src路径别名  绝对路径 ./是绝对路径
// 在通过vue-cli创建的项目下才可使用@
// node.js 目录下有默认索引文件  index.js就是索引文件  .js .vue .js导入的优先顺序
import router from '@/router'
// tip提示信息  [生产环境提示product=false] 即按照开发环境提示  详细一些
Vue.config.productionTip = false
Vue.use(ElementUI)
// 创建根实例
new Vue({
  // 局部组件挂载在根组件中
  router,
  // render  渲染 app组件
  render: h => h(App)
  // mount 挂载在#app容器中
}).$mount('#app')

// main.js的职责
/*
1、导入项目需要的依赖的资源（js包，css文件，其他资源）
2、创建一个根实例

*/
