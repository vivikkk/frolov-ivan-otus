import Vue from 'vue'
import Vuex from 'vuex'
import configurations from './modules/configurations'
import game from './modules/game'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],

  modules: {
    configurations,
    game
  }
})
