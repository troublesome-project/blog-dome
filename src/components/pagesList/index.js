import PagesList from './index.vue'
// 这里是重点
const Pagers = {
  install: function (Vue) {
    Vue.component('Pagers', PagesList)
  }
}

// 导出组件
export default Pagers
