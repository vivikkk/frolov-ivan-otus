const state = {
  gameCount: 0,
  gameCorrectAnswers: 0,
  globalCount: 0,
  globalCorrectAnswers: 0,
  accuracy: 0
}

const getters = {
  gameCount (state) {
    return state.gameCount
  },

  gameCorrectAnswers (state) {
    return state.gameCorrectAnswers
  },

  globalCount (state) {
    return state.globalCount
  },

  globalCorrectAnswers (state) {
    return state.globalCorrectAnswers
  },

  accuracy (state) {
    return state.accuracy
  }
}

const actions = {
  addCurrentGameCount ({ commit }) {
    const count = this.getters.gameCount + 1

    commit('updateCurrentGameCount', count)
  },

  addCorrectAnswersCount ({ commit }) {
    const count = this.getters.gameCorrectAnswers + 1

    commit('updateCorrectAnswersCount', count)
  }
}

const mutations = {
  updateCurrentGameCount (state, num) {
    state.gameCount = num
  },

  updateCorrectAnswersCount (state, num) {
    state.gameCorrectAnswers = num
  },

  resetLastGameStat (state) {
    state.gameCount = 0
    state.gameCorrectAnswers = 0
  },

  updateGlobalStat (state) {
    state.globalCount = this.getters.globalCount + this.getters.gameCount
    state.globalCorrectAnswers = this.getters.globalCorrectAnswers + this.getters.gameCorrectAnswers
  },

  updateAccuracy (state) {
    state.accuracy = Math.floor(this.getters.globalCorrectAnswers / this.getters.globalCount * 100)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
