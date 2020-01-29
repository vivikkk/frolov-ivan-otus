const state = {
  gameCount: 0,
  gameCorrectAnswersCount: 0
}

const getters = {
  day (state) {
    return state.day
  },

  gameCount (state) {
    return state.gameCount
  },

  gameCorrectAnswersCount (state) {
    return state.gameCorrectAnswersCount
  }
}

const actions = {
  addCurrentGameCount ({ commit }) {
    const count = this.getters.gameCount + 1

    commit('updateCurrentGameCount', count)
  },

  addCorrectAnswersCount ({ commit }) {
    const count = this.getters.gameCorrectAnswersCount + 1

    commit('updateCorrectAnswersCount', count)
  }
}

const mutations = {
  updateCurrentGameCount (state, num) {
    state.gameCount = num
  },

  updateCorrectAnswersCount (state, num) {
    state.gameCorrectAnswersCount = num
  },

  resetLastGameStat (state) {
    state.gameCount = 0
    state.gameCorrectAnswersCount = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
