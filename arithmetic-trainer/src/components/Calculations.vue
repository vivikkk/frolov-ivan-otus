<template>
  <div class="d-flex">
    <span class="font-weight-bold">{{ numbers.a }}</span>
    <span class="pl-5 pr-5">{{ symbol }}</span>
    <span class="placeholder d-inline-flex font-weight-bold justify-center">{{ numbers.b }}</span>
    <span class="pl-5 pr-5">=</span>
    <span class="placeholder placeholder_border d-inline-flex justify-center"></span>
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
.placeholder {
  min-width: 50px
}

.placeholder_border {
  border-bottom: 1px solid #bdbdbd;
}
</style>
