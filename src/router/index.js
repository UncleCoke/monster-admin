import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'

Vue.use(VueRouter)

/**
 * hidden:是否显示在导航栏
 * showChildren:是否在导航栏显示子路由，默认没有该属性（false）
 * meta：{
 *  title：导航栏的路由标签
 *  icon： 导航栏的路由图标
 *  activeMenu: 导航栏高亮时的响应路径（index）
 *  roles：权限数组，默认没有该属性（适配所有权限）
 * }
 */
const routes = [{
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/layout'),
    meta: {
      requireAuth: true
    },
    hidden: true
  },
  {
    path: '/table',
    component: () => import('@/layout'),
    redirect: '/table/index',
    meta: {
      title: '表格',
      icon: 'el-icon-watermelon',
      requireAuth: true,
      activeMenu: '/table/index'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/table/index.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


if (window.sessionStorage.getItem('token')) {
  store.commit('user/setToken', window.sessionStorage.getItem('token'))
}
if (window.sessionStorage.getItem('user')) {
  store.commit('user/setUser', window.sessionStorage.getItem('user'))
}

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    window.sessionStorage.clear();
    store.commit('user/setToken', '');
    store.commit('user/setUser', {});
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.user.token) {
      next();
    } else {
      next({
        path: '/login',
      })
    }
  } else {
    next();
  }
});


export default router