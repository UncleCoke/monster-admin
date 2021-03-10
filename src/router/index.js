import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'

Vue.use(VueRouter)

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
  },
  {
    path: '/form',
    component: () => import('@/layout'),
    meta: {
      title: '表单',
      icon: 'el-icon-cherry',
      requireAuth: true,
      activeMenu: '/form'
    },
    showChildren: true,
    children: [{
      path: 'default',
      component: () => import('@/views/form/default.vue'),
      meta: {
        title: '基础表单',
        activeMenu: '/form/default',
        roles: ['admin']
      }
    }, {
      path: 'step',
      component: () => import('@/views/form/step.vue'),
      meta: {
        title: '分步表单',
        activeMenu: '/form/step',
        roles: ['admin']
      }
    }]
  },
  {
    path: '/card',
    component: () => import('@/layout'),
    redirect: '/card/index',
    meta: {
      title: '卡片',
      icon: 'el-icon-apple',
      requireAuth: true,
      activeMenu: '/card/index'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/card/index.vue')
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