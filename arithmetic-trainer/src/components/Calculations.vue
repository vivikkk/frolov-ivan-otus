<template>
  <div class="d-flex font-weight-bold font-family-mono display-3">
    <span>{{ numbers.a }}</span>
    <span class="pl-5 pr-5">{{ symbol }}</span>
    <span class="placeholder d-inline-flex justify-center">{{ numbers.b }}</span>
    <span class="pl-5 pr-5">=</span>
    <span class="placeholder placeholder_border d-inline-flex justify-center">{{ result }}</span>
  </div>
</template>

<script>
export default {
  name: 'Calculations',

  props: {
    numbers: {
      type: Object,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    result: {
      type: String,
      required: true
    }
  },

  computed: {
    getResult () {
      let result = null

      switch (this.symbol) {
        case '+':
          result = this.numbers.a + this.numbers.b
          break
        case '*':
          result = this.numbers.a * this.numbers.b
          break
      }

      return result
    }
  }
}
</script>

<style scoped>
.font-family-mono {
  font-family: monospace
}

.placeholder {
  min-width: 50px
}

.placeholder_border {
  border-bottom: 1px solid #bdbdbd;
}
</style>
