<template>
  <v-col
    sm="4"
    lg="4"
    class="d-flex flex-wrap justify-center">
    <div
      v-for="n in 10"
      :key="n"
      class="digit d-inline-flex align-center"
      :class="{'order-10': n === 1, 'mb-4': n !== 1}">
      <v-btn
        class="mx-auto"
        color="primary"
        @click="$emit('click-digits', n - 1)"
        fab
        dark>
        <span>{{ n - 1 }}</span>
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'Digits'
}
</script>

<style scoped>
.digit {
  flex: 0 0 33%;
}
</style>
