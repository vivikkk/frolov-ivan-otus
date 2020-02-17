const state = {
  duration: 1,
  difficulty: 1,
  operations: []
}

const getters = {
  duration (state) {
    return state.duration
  },

  difficulty (state) {
    return state.difficulty
  },

  operations (state) {
    return state.operations
  },

  operationsLength (state) {
    return state.operations.length
  },

  isNotEmptyOperations (state) {
    return !!state.operations.length
  }
}

const mutations = {
  updateDuration (state, value) {
    state.duration = value
  },

  updateDifficulty (state, value) {
    state.difficulty = value
  },

  updateOperations (state, value) {
    state.operations = value
  }
}

export default {
  state,
  getters,
  mutations
}
