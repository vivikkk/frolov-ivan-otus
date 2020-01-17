<template>
  <div class="d-flex flex-column justify-space-between">
    <div
      v-for="(item, index) in computations"
      :key="index"
    >
      <v-btn
        class="mx-auto"
        color="red"
        fab
        dark
      >
        <span>{{ item.symbol }}</span>
      </v-btn>
    </div>
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
