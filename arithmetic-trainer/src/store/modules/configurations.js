const state = {
  duration: 1,
  difficulty: 1,
  computations: ['+', '*']
}

const getters = {
  duration (state) {
    return state.duration
  },

  difficulty (state) {
    return state.difficulty
  },

  computations (state) {
    return state.computations
  },

  isNotEmptyComputations (state) {
    return !!state.computations.length
  },

  computationsLength (state) {
    return state.computations.length
  }
}

const mutations = {
  updateDuration (state, value) {
    state.duration = value
  },

  updateDifficulty (state, value) {
    state.difficulty = value
  },

  updateComputations (state, value) {
    state.computations = value
  }
}

export default {
  state,
  getters,
  mutations
}
