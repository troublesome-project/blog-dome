import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/class',
      name: 'Class',
      component: () => import('@/views/class/index.vue'),
    },
    {
      path: '/footer',
      name: 'Footer',
      component: () => import('@/components/footer/index.vue')
    }
  ]
})
