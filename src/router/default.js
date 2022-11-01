import auth from '../middleware/auth'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgetPass from '../views/ForgetPassword.vue'
import ChangePass from '../views/ChangePassword.vue'
import Page403 from '../views/errors/403.vue'
import EditProfile from '../views/user_manage/EditProfile.vue'
import eTourism from '../views/eTourism/View.vue'
import eTourismResult from '../views/eTourism/Result.vue'
let route_default =[
    {
    path: '/',
    name:'dashboard',
    component: Dashboard,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/login',
    name:'login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path:'/forgetpass',
    component:ForgetPass,
  },
  {
    path:'/reset_password',
    component:ChangePass,
  },
  {
    path: '/user/edit/:id',
    component: EditProfile,
    meta: {
      middleware: auth,
    }
  },
  {
    path:'/error/403',
    component:Page403,
  },
  {
    path: '/view/etourism',
    component: eTourism,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/etourism/result',
    component: eTourismResult,
    meta: {
      middleware: auth
    }
  },
]
export default route_default;
