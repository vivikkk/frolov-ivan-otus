import Vue from 'vue'
import Vuex from 'vuex'
import configurations from './modules/configurations'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  modules: {
    configurations
  }
})
