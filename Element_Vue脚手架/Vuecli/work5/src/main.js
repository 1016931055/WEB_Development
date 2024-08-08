// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//vue脚手架需要导入vue
import Vue from 'vue'
//导入element
import ElementUI from 'element-ui';
// 导入element的css样式
import 'element-ui/lib/theme-chalk/index.css';
// 导入App.vue根组件
import App from './App'
// 导入路由
import router from './router'

// 让vue对象使用ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
