<template>
  <div class="mt-5 d-flex flex-column mt-4">
    <v-btn
      class="mx-auto mb-8"
      color="red"
      v-for="(item, index) in computations"
      :key="index"
      fab
      dark
    >
      <span>{{ item.symbol }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Computations',

  data () {
    return {
      computations: [
        {
          symbol: '<',
          value: '<'
        },
        {
          symbol: '>',
          value: '>'
        },
        {
          symbol: '?',
          value: '?'
        },
        {
          symbol: '=',
          value: '='
        }
      ]
    }
  }
}
</script>
