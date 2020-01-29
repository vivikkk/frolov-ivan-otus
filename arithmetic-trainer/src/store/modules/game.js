const getDefaultState = () => {
  return {
    numbers: [],
    currentValue: '',
    symbol: '',
    correctAnswer: 0,
    showModal: false,
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
    return state.symbol
  },

  correctAnswer (state) {
    return state.correctAnswer
  },

  timer (state) {
    return state.timer
  },

  showModal (state) {
    return state.showModal
  }
}

const actions = {
  counting ({ commit }, { shuffledArray: numbers, randomSymbol: symbol }) {
    let result = 0

    switch (symbol) {
      case '+':
        result = numbers.reduce((a, b) => a + b)
        break
      case '*':
        result = numbers.reduce((a, b) => a * b)
        break
      case '-':
        numbers = [numbers.reduce((a, b) => a + b), numbers[0]]
        result = numbers.reduce((a, b) => a - b)
        break
      case '/':
        numbers = [numbers.reduce((a, b) => a * b), numbers[0]]
        result = numbers.reduce((a, b) => a / b)
        break
    }

    commit('updateData', { numbers, symbol })
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

  updateData (state, { numbers, symbol }) {
    state.numbers = numbers
    state.symbol = symbol
  },

  updateCorrectAnswer (state, num) {
    state.correctAnswer = num
  },

  removeLastDigit (state) {
    state.currentValue = this.getters.value.slice(0, -1)
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

  showModal (state, bool = true) {
    state.showModal = bool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
