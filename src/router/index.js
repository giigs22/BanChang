import {createRouter,createWebHistory} from 'vue-router'


import store from '../store'
import route_default from './default'
import admin from './admin'


const baseRoutes = []
const routes = baseRoutes.concat(route_default,admin)

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
  if(to.meta.roles){
    const role = store.getters['user/userRole']
    if (to.meta.roles?.includes(role)) {
      next()
    } else {
      next('/error/403')
    }
  }

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
