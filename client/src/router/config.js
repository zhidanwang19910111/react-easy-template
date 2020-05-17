import Dashboard from '../page/dashboard/index.jsx'
import Login from '../page/login/index.jsx'
import Main from '../page/main/index.jsx'

const RouterConfig = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    component: Login
  }
  
]
export default RouterConfig