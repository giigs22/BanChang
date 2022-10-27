import auth from '../middleware/auth'

import AQIView from '../views/aqi/View.vue'
import AQIResult from '../views/aqi/Result.vue'
import AQIHealthy from '../views/aqi/Healthy.vue'
import SmartLight from '../views/smart_light/View.vue'
import SmartLightResult from '../views/smart_light/Result.vue'
import SmartPole from '../views/smart_pole/View.vue'
import SmartPoleResult from '../views/smart_pole/Result.vue'
import UserRegister from '../views/user_manage/RegisterUser.vue'
import UserList from '../views/user_manage/ListUser.vue'
import Permission from '../views/user_manage/Permissions.vue'
import SOS from '../views/sos/View.vue'
import SOSResult from '../views/sos/Result.vue'
import Maintenance from '../views/maintenance/View.vue'
import MaintenanceResult from '../views/maintenance/Result.vue'
import Complaint from '../views/complaint/View.vue'
import ComplaintReply from '../views/complaint/Reply.vue'
import ManageTemplate from '../views/manage_widget/Template.vue'
import CreateDashboard from '../views/manage_widget/CreateDashboard.vue'
import CCTV from '../views/cctv/View.vue'
import CCTVResult from '../views/cctv/Result.vue'
import FreeWiFi from '../views/wifi/View.vue'
import FreeWiFiResult from '../views/wifi/Result.vue'
import DigitalSignage from '../views/signage/View.vue'
import DigitalSignageResult from '../views/signage/Result.vue'
import EditDashboard from '../views/manage_widget/EditDashboard.vue'
import GroupUser from '../views/user_manage/GroupUser.vue'
import GroupTemplate from '../views/manage_widget/GroupTemplate.vue'
import UserTemplate from '../views/manage_widget/UserTemplate.vue'
import WidgetsCategory from '../views/manage_widget/WidgetsCategory.vue'
import WidgetList from '../views/manage_widget/WidgetList.vue'
import WidgetCreate from '../views/manage_widget/CreateWidget.vue'
import WidgetEdit from '../views/manage_widget/EditWidget.vue'
import WidgetDetail from '../views/manage_widget/WidgetDetail.vue'

let admin = [
 
    {
      path: '/user/register',
      component: UserRegister,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/user/list',
      component: UserList,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/user/group',
      component: GroupUser,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/user/permission',
      component: Permission,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/view/aqi',
      component: AQIView,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/aqi/result',
      component: AQIResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/aqi_healthy',
      component: AQIHealthy,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/smart_light',
      component: SmartLight,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/smart_light/result',
      component: SmartLightResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/smart_pole',
      component: SmartPole,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/smart_pole/result',
      component: SmartPoleResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/cctv',
      component: CCTV,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/cctv/result',
      component: CCTVResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/sos',
      component: SOS,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/sos/result',
      component: SOSResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/maintenance',
      component: Maintenance,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/maintenance/result',
      component: MaintenanceResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/complaint',
      component: Complaint,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/complaint/reply/:id',
      component: ComplaintReply,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/template',
      component: ManageTemplate,
      meta: {
        middleware: auth,
        roles:['administrator']
      },
    },
    {
      path: '/template/create',
      component: CreateDashboard,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/template/edit/:id',
      component: EditDashboard,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/template/group',
      component: GroupTemplate,
      meta: {
        middleware: auth,
        roles:['administrator']
      },
    },
    {
      path: '/template/user',
      component: UserTemplate,
      meta: {
        middleware: auth,
        roles:['administrator']
      },
    },
    {
      path: '/view/freewifi',
      component: FreeWiFi,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/freewifi/result',
      component: FreeWiFiResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/digital_signage',
      component: DigitalSignage,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/view/digital_signage/result',
      component: DigitalSignageResult,
      meta: {
        middleware: auth,
        roles:['administrator','staff']
      }
    },
    {
      path: '/widgets/cate',
      component: WidgetsCategory,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/widgets/list',
      component: WidgetList,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/widgets/create',
      component: WidgetCreate,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/widgets/edit/:id',
      component: WidgetEdit,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    },
    {
      path: '/widgets/cate/:id',
      component: WidgetDetail,
      meta: {
        middleware: auth,
        roles:['administrator']
      }
    }
    
  ]
  export default admin