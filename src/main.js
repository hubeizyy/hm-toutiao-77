import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// tip提示信息  [生产环境提示product=false] 即按照开发环境提示  详细一些
Vue.config.productionTip = false
Vue.use(ElementUI)
// 创建根实例
new Vue({
  // render  渲染 app组件
  render: h => h(App)
  // mount 挂载在#app容器中
}).$mount('#app')

// main.js的职责
/*
1、导入项目需要的依赖的资源（js包，css文件，其他资源）
2、创建一个根实例

*/
