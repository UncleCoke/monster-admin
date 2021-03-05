import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import settingModule from './modules/setting'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user:userModule,
    setting:settingModule
  },
  plugins: debug ? [createLogger()] : []
})
