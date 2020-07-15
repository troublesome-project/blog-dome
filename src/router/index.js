import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: () => import('@/views/home/index.vue')
      component: resolve => (require(['@/views/home/index'], resolve))
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   // component: () => import('@/views/login/index.vue')
    //   component: resolve => (require(['@/views/login/index'], resolve))
    // },
    // 前端模块
    {
      path: '/class',
      name: 'Class',
      // component: () => import('@/views/class/index.vue')
      component: resolve => (require(['@/views/class/index'], resolve)),
      redirect: '/class/gits',
      children: [
        {
          path: '/class/gits', // git页
          name: 'Girs',
          component: resolve => (require(['@/views/class/components/gits'], resolve))
        },
        {
          path: '/class/domOperation', // dom节点页
          name: 'DomOperation',
          component: resolve => (require(['@/views/class/components/domOperation'], resolve))
        },
        {
          path: '/class/jsMethod', // js方法页
          name: 'JsMethod',
          component: resolve => (require(['@/views/class/components/jsMethod'], resolve))
        },
        {
          path: '/class/lifeCycle', // 生命周期页
          name: 'LifeCycle',
          component: resolve => (require(['@/views/class/components/lifeCycle'], resolve))
        },
        {
          path: '/class/projectBuild', // 项目搭建页
          name: 'ProjectBuild',
          component: resolve => (require(['@/views/class/components/projectBuild'], resolve))
        },
        {
          path: '/class/vueModifier', // vue修饰符页
          name: 'VueModifier',
          component: resolve => (require(['@/views/class/components/vueModifier'], resolve))
        },
        {
          path: '/class/winObject', // 对象方法页
          name: 'WinObject',
          component: resolve => (require(['@/views/class/components/winObject'], resolve))
        }
      ]
    },
    // 名言模块
    {
      path: '/aphorism',
      name: 'Aphorism',
      // component: () => import('@/views/aphorism/index.vue')
      component: resolve => (require(['@/views/aphorism/index'], resolve)),
      redirect: '/aphorism/poetry',
      children: [
        {
          path: '/aphorism/ancientArticles', // 文言文页
          name: 'AncientArticles',
          component: resolve => (require(['@/views/aphorism/components/ancientArticles'], resolve))
        },
        {
          path: '/aphorism/poetry', // 古诗页
          name: 'Poetry',
          component: resolve => (require(['@/views/aphorism/components/poetry'], resolve))
        },
        {
          path: '/aphorism/other', // 其他页
          name: 'Other',
          component: resolve => (require(['@/views/aphorism/components/other'], resolve))
        },
        {
          path: '/aphorism/ancientArticlesDetails', // 文言文详情页
          name: 'AncientArticlesDetails',
          component: resolve => (require(['@/views/aphorism/components/ancientArticlesDetails'], resolve))
        },
        {
          path: '/aphorism/poetryDetails', // 古诗详情页
          name: 'PoetryDetails',
          component: resolve => (require(['@/views/aphorism/components/poetryDetails'], resolve))
        }
      ]
    },
    // {
    //   path: '/poetryDetails',
    //   name: 'PoetryDetails',
    //   // component: () => import('@/views/aphorism/components/poetryDetails.vue')
    //   component: resolve => (require(['@/views/aphorism/components/poetryDetails'], resolve))
    // },
    {
      path: '/others',
      name: 'Others',
      // component: () => import('@/views/aphorism/components/others.vue')
      component: resolve => (require(['@/views/aphorism/components/others'], resolve))
    },
    // {
    //   path: '/footer',
    //   name: 'Footer',
    //   // component: () => import('@/components/footer/index.vue')
    //   component: resolve => (require(['@/components/footer/index'], resolve))
    // },
    {
      path: '/footer',
      name: 'Footer',
      // component: () => import('@/components/footer/index.vue')
      component: resolve => (require(['@/components/footer/index'], resolve))
    },
    // 文言文页面
    // {
    //   path: '/ancientArticlesDetails',
    //   name: 'AncientArticlesDetails',
    //   // component: () => import('@/components/footer/index.vue')
    //   component: resolve => (require(['@/views/aphorism/components/ancientArticlesDetails'], resolve))
    // },
    // 书籍模块
    {
      path: '/books',
      name: 'Books',
      component: resolve => (require(['@/views/books/index'], resolve)),
      redirect: '/books/other',
      children: [
        {
          path: '/books/other',
          name: 'BooksOther',
          // component: resolve => (require(['@/views/books/components/other'], resolve))
          component: import('@/views/books/components/other')
        }
      ]
    },
    // 音乐模块
    {
      path: '/musicStore',
      name: 'MusicStore',
      component: import('@/views/musicStore/index'),
      // component: resolve => (require(['@/views/musicStore/index'], resolve)),
      children: [
        {
          path: '/musicStore/musicList',
          name: 'MusicList',
          component: import('@/views/musicStore/components/musicList')
          // component: resolve => (require(['@/views/musicStore/components/musicList'], resolve))
        }
      ]
    }
    // 无数据页面
    // {
    //   path: '/null',
    //   name: 'Null',
    //   component: resolve => (require(['@/components/NullView/index'], resolve))
    // }
  ]
})
// router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   if(isChunkLoadFailed){
//       router.replace(targetPath);
//   }
// })