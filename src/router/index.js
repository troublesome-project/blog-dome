import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: () => import('@/views/home/index.vue')
      component: resolve => (require(['@/views/home/index'], resolve))
    },
    {
      path: '/login',
      name: 'Login',
      // component: () => import('@/views/login/index.vue')
      component: resolve => (require(['@/views/login/index'], resolve))
    },
    {
      path: '/class',
      name: 'Class',
      // component: () => import('@/views/class/index.vue')
      component: resolve => (require(['@/views/class/index'], resolve))
    },
    {
      path: '/aphorism',
      name: 'Aphorism',
      // component: () => import('@/views/aphorism/index.vue')
      component: resolve => (require(['@/views/aphorism/index'], resolve))
    },
    {
      path: '/poetryDetails',
      name: 'PoetryDetails',
      // component: () => import('@/views/aphorism/components/poetryDetails.vue')
      component: resolve => (require(['@/views/aphorism/components/poetryDetails'], resolve))
    },
    {
      path: '/others',
      name: 'Others',
      // component: () => import('@/views/aphorism/components/others.vue')
      component: resolve => (require(['@/views/aphorism/components/others'], resolve))
    },
    {
      path: '/footer',
      name: 'Footer',
      // component: () => import('@/components/footer/index.vue')
      component: resolve => (require(['@/components/footer/index'], resolve))
    },
    {
      path: '/footer',
      name: 'Footer',
      // component: () => import('@/components/footer/index.vue')
      component: resolve => (require(['@/components/footer/index'], resolve))
    },
    // 文言文页面
    {
      path: '/ancientArticlesDetails',
      name: 'AncientArticlesDetails',
      // component: () => import('@/components/footer/index.vue')
      component: resolve => (require(['@/views/aphorism/components/ancientArticlesDetails'], resolve))
    }
    // 无数据页面
    // {
    //   path: '/null',
    //   name: 'Null',
    //   component: resolve => (require(['@/components/NullView/index'], resolve))
    // }
  ]
})
