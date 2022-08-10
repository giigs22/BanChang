import {
  createRouter,
  createWebHistory
} from 'vue-router'
import auth from '../middleware/auth'
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
import Complaint from '../views/Complaint.vue'
import ManageTemplate from '../views/manage_widget/Template.vue'
import CreateDashboard from '../views/manage_widget/CreateDashboard.vue'
import CCTV from '../views/cctv/Map.vue'
import FreeWiFi from '../views/wifi/Map.vue'
import DigitalSignage from '../views/signage/Map.vue'
import EditDashboard from '../views/manage_widget/EditDashboard.vue'
import GroupUser from '../views/user_manage/GroupUser.vue'

const routes = [{
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
    path: '/user/register',
    component: UserRegister,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/user/list',
    component: UserList,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/user/edit/:id',
    component: EditProfile,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/user/group',
    component: GroupUser,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/user/permission',
    component: Permission,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/aqi_map',
    component: AQIMap,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/aqi_healthy',
    component: AQIHealthy,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/smart_light',
    component: SmartLightMap,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/smart_pole',
    component: SmartPole,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/cctv',
    component: CCTV,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/sos',
    component: SOS,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/maintenance',
    component: Maintenance,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/complaint',
    component: Complaint,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/template',
    component: ManageTemplate,
    meta: {
      middleware: auth
    },
  },
  {
    path: '/view/template/create',
    component: CreateDashboard,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/template/edit/:id',
    component: EditDashboard,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/freewifi',
    component: FreeWiFi,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/view/digital_signage',
    component: DigitalSignage,
    meta: {
      middleware: auth
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];

  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {

    context.next(...parameters);

    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({
      ...context,
      next: nextMiddleware
    });
  };
}
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ?
      to.meta.middleware :
      [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({
      ...context,
      next: nextMiddleware
    });
  }

  return next();
})

export default router