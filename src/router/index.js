import { createRouter, createWebHistory } from 'vue-router'
import AQIMap from '../views/aqi/Map.vue'
import AQIHealthy from '../views/aqi/Healthy.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SmartLightMap from '../views/smart_light/Map.vue'
import SmartPole from '../views/smart_pole/Map.vue'
import UserRegister from '../views/user_manage/RegisterUser.vue'
import UserList from '../views/user_manage/ListUser.vue'
import EditProfile from '../views/user_manage/EditProfile.vue'
import Permission from '../views/user_manage/Permissions.vue'
import SOS from '../views/sos/Map.vue'
import Maintenance from '../views/maintenance/Map.vue'
import Complaint  from '../views/Complaint.vue'
import ManageTemplate from '../views/manage_widget/Template.vue'
import CreateDashboard from '../views/manage_widget/CreateDashboard.vue'
import CCTV from '../views/cctv/Map.vue'

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
      path:'/user/list',
      component:UserList
    },
    {
      path:'/user/edit/:id',
      component:EditProfile
    },
    {
      path:'/user/permission',
      component:Permission
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
    },
    {
      path:'/view/cctv',
      component:CCTV
    },
    {
      path:'/view/sos',
      component:SOS
    },
    {
      path:'/view/maintenance',
      component:Maintenance
    },
    {
      path:'/view/complaint',
      component:Complaint
    },
    {
      path:'/view/manage_widget',
      component:ManageTemplate
    },
    {
      path:'/view/create_dashboard',
      component:CreateDashboard
    },
  ]
})
 

export default router
