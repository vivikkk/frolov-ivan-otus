export default {
  state: {
    currentValue: ''
  },
  getters: {
    value (state) {
      return state.currentValue
    }
  },
  mutations: {
    updateValue (state, num) {
      state.currentValue = this.getters.value + String(num)
    },

    removeLastSymbol (state) {
      state.currentValue = this.getters.value.slice(0, -1)
    }
  }
}
