const getDefaultState = () => {
  return {
    numbers: [],
    currentValue: '',
    currentSymbol: '',
    correctAnswer: 0,
    isEnd: false,
    timer: 0
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
  },

  timer (state) {
    return state.timer
  },

  isEnd (state) {
    return state.isEnd
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
    commit('resetCurrentValue')
  },

  changeTimer ({ commit }) {
    const time = this.getters.timer - 1

    commit('updateTimer', time)
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

  updateTimer (state, time) {
    state.timer = time
  },

  resetCurrentValue (state) {
    state.currentValue = ''
  },

  resetGameState (state) {
    Object.assign(state, getDefaultState())
  },

  isEnd (state, bool = true) {
    state.isEnd = bool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
