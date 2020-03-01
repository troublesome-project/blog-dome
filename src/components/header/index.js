import header from './index.vue'
// 这里是重点
const Header = {
  install: function(Vue) {
    Vue.component('Header', header)
  }
}

// 导出组件
export default Header
