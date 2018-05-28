import Vue from 'vue'
import Router from 'vue-router'
import passWord from '@/view/passWord'
import Hello from '@/view/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'password',
      component: passWord
    },
    {
      path: '/passWord',
      name: 'passWord',
      component: passWord
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
