import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'

import Element from 'element-ui'
Vue.use(Element)

import {
  errorNotify,
  warningNotify,
  infoNotify,
  successNotify
} from './utils/notify'
Vue.prototype.$error = errorNotify;
Vue.prototype.$warning = warningNotify;
Vue.prototype.$info = infoNotify;
Vue.prototype.$success = successNotify;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')