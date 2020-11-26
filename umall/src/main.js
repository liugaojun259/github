// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入assets/reset.css
import "./assets/css/reset.css"
// 引入公共组件
import "./components/index.js"
// 引入全局过滤器
import "./filters/index.js"
// 引入vuex
import store from "./store/index.js"
// 引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
