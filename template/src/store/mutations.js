const mutations = {
    AUTH (state, token) {
      localStorage.setItem('api_token', token)
      state.auth.token = token
    },
    CHECK (state) {
      state.auth.token = localStorage.getItem('api_token')
      state.auth.urlLogin = state.auth.usingJwt ? 'api-token-auth/' : 'rest-auth/login/'
      state.auth.authorization = `${state.auth.usingJwt ? 'JWT ' : 'Token '} ${state.auth.token}`
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
  
  export default mutations
  