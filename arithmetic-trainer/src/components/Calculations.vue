<template>
  <div class="d-flex font-weight-bold font-family-mono display-3">
    <span>{{ numbers[0] }}</span>
    <span class="pl-5 pr-5">{{ symbol }}</span>
    <span class="placeholder d-inline-flex justify-center">{{ numbers[1] }}</span>
    <span class="pl-5 pr-5">=</span>
    <span class="placeholder placeholder_border d-inline-flex justify-center">{{ result }}</span>
  </div>
</template>

<script>
export default {
  name: 'Calculations',

  props: {
    numbers: {
      type: Array,
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
