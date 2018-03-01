import Home from '@/components/Home'
import Login from '@/components/auth/Login'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Login }
]

export default routes
