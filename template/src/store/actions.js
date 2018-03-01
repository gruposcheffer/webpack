import axios from '@/plugins/axios'

const actions = {
  login: (context, form) => new Promise((resolve, reject) => {
    context.commit('CHECK')
    axios.post(context.state.auth.urlLogin, form)
      .then(
        response => {
          context.commit('AUTH', context.state.auth.usingJwt ? response.data.token : response.data.key)
          context.dispatch('check').then(
            data => resolve(data),
            error => reject(error)
          )
        })
      .catch(
        error => {
          context.dispatch('logout')
          reject(error.response.data)
        }
      )
  }),
  logout: ({commit}) => {
    commit('LOGOUT')
  },
  check: (context) => new Promise((resolve, reject) => {
    context.commit('CHECK')
    let token = context.state.auth.token
    if (token !== null) {
      $.ajaxSetup({
        headers: {
          'Authorization': context.state.auth.authorization
        },
        beforeSend (xhr, options) {
          options.url = 'http://localhost:8000/' + options.url
        }
      })

      axios.defaults.headers.common['Authorization'] = context.state.auth.authorization
      axios.get('api/core/user/')
        .then(
          res => {
            context.commit('LOGIN', res.data)
            resolve(res.data)
          },
          error => {
            context.dispatch('logout')
            reject(error)
          }
        )
        .catch(
          error => {
            context.dispatch('logout')
            reject(error)
          }
        )
    } else {
      context.dispatch('logout')
      reject(new Error('Autenticação não encontrada'))
    }
  })
}

export default actions
