const getDefaultState = () => {
  return {
    numbers: [],
    currentValue: '',
    currentSymbol: '',
    correctAnswer: 0
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
  },

  correctAnswer (state) {
    return state.correctAnswer
  }
}

const actions = {
  shuffleArray ({ commit }, arr) {
    const shuffledArray = arr.sort(() => Math.random() - 0.5)

    commit('updateNumbers', shuffledArray)
  },

  counting ({ commit }) {
    let result = 0

    switch (this.getters.symbol) {
      case '+':
        result = this.getters.numbers.reduce((a, b) => a + b)
        break
      case '*':
        result = this.getters.numbers.reduce((a, b) => a * b)
        break
    }

    commit('updateCorrectAnswer', result)
  }
}

const mutations = {
  updateValue (state, num) {
    state.currentValue = this.getters.value + String(num)
  },

  updateNumbers (state, arr) {
    state.numbers = arr
  },

  updateCorrectAnswer (state, num) {
    state.correctAnswer = num
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
