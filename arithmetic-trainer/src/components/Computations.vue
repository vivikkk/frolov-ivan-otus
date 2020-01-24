<template>
  <v-col cols="1" class="d-flex flex-wrap justify-center">
    <div class="d-flex flex-column">
      <div
        v-for="(item, index) in computations"
        :key="index">
        <v-btn
          class="mx-auto mb-4"
          :color="item.value === '=' ? 'green': 'red'"
          fab
          dark>
          <span>{{ item.symbol }}</span>
        </v-btn>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'Computations',

  data () {
    return {
      computations: [
        {
          symbol: '=',
          value: '='
        },
        {
          symbol: '?',
          value: '?'
        }
      ]
    }
  }
}
</script>
