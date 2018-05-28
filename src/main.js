// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import './assets/style/style.css'
// element-uI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
// const router = new VueRouter({
//   mode: 'history',
//   routes: router
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
