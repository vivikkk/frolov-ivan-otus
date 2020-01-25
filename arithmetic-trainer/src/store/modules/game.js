export default {
  state: {
    currentValue: '',
    numbers: [],
    currentSymbol: ''
  },
  getters: {
    value (state) {
      return state.currentValue
    },

    numbers (state) {
      return state.numbers
    },

    symbol (state) {
      return state.currentSymbol
    }
  },
  actions: {
    shuffleArray ({ commit }, arr) {
      const shuffledArray = arr.sort(() => Math.random() - 0.5)

      commit('updateNumbers', shuffledArray)
    }
  },
  mutations: {
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
    }
  }
}
