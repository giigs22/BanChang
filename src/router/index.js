import { createRouter, createWebHistory } from 'vue-router'
import AQIMap from '../views/aqi/Map.vue'
import AQIHealthy from '../views/aqi/Healthy.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SmartLightMap from '../views/smart_light/Map.vue'
import SmartPole from '../views/smart_pole/Map.vue'
import UserRegister from '../views/user_manage/RegisterUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/user/register',
      component:UserRegister
    },
    {
      path:'/view/aqi_map',
      component:AQIMap
    },
    {
      path:'/view/aqi_healthy',
      component:AQIHealthy
    },
    {
      path:'/view/smart_light',
      component:SmartLightMap
    },
    {
      path:'/view/smart_pole',
      component:SmartPole
    }
  ]
})
 

export default router
