import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import configurations from './modules/configurations'
import game from './modules/game'
import stats from './modules/stats'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],

  modules: {
    configurations,
    game,
    stats
  }
})
