const getDefaultState = () => {
  return {
    currentValue: '',
    numbers: [],
    currentSymbol: ''
  }
}

const state = getDefaultState()

const getters = {
  value (state) {
    return state.currentValue
  },

  numbers (state) {
    return state.numbers
  },

  symbol (state) {
    return state.currentSymbol
  }
}

const actions = {
  shuffleArray ({ commit }, arr) {
    const shuffledArray = arr.sort(() => Math.random() - 0.5)

    commit('updateNumbers', shuffledArray)
  }
}

const mutations = {
  updateValue (state, num) {
    state.currentValue = this.getters.value + String(num)
  },

  updateNumbers (state, arr) {
    state.numbers = arr
  },

  removeLastDigit (state) {
    state.currentValue = this.getters.value.slice(0, -1)
  },

  updateSymbol (state, symbol) {
    state.currentSymbol = symbol
  },

  resetState (state) {
    Object.assign(state, getDefaultState())
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
