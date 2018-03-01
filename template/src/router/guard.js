import store from '../store'

const authGuard = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('check').then(
      success => {
        if (from.path === 'login') {
          next('/')
        } else {
          next()
        }
      },
      () => {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }
    )
  } else {
    if (from.path === 'login') {
      next('/')
    } else {
      next()
    }
  }
}

export default authGuard
