import Vue from 'vue'
import Vuex from 'vuex'
import configurations from './modules/configurations'
import game from './modules/game'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  modules: {
    configurations,
    game
  }
})
