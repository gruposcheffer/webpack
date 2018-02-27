import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  logged: false,
  token: '',
  user: {}
}

const mutations = {
  AUTH (state, token) {
    state.token = token
  },
  LOGIN (state, userData) {
    state.logged = true
    state.user = userData
  },
  LOGOUT (state) {
    state.logged = false
    state.user = {}
    state.token = ''
    localStorage.clear()
  }
}

export default new Vuex.Store({
  state,
  mutations
})
