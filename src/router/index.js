import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/table',
  component: () => import('@/views/table/index.vue')
}, {
  path: '/form',
  component: () => import('@/views/form/index.vue'),
  children: [{
    path: 'default',
    component: () => import('@/views/form/Default.vue')
  }, {
    path: 'step',
    component: () => import('@/views/form/Step.vue')
  }]
}, {
  path: '/card',
  component: () => import('@/views/card/index.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router