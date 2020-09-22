import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {
    userToken: sessionStorage.getItem('token') || ''
  },
  getters,
  actions,
  mutations
})

export default store
