import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/login/index.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/class',
      name: 'Class',
      component: () => import('../views/class/index.vue'),
      meta: { title: '课程' }
    }
  ]
})
