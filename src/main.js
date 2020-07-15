// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'

// 公用组件
import Header from './components/header'
import Pagers from './components/pagesList'

Vue.use(ElementUI)
Vue.use(Header)
Vue.use(Pagers)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

document.body.style.overflow = 'hidden'
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0]
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  if (htmlWidth >= 750) {
    htmlWidth = 750
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`
}
window.onresize = setHtmlFontSize

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
