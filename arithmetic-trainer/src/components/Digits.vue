<template>
  <v-col cols="4" class="d-flex flex-wrap justify-center">
    <div
      class="digit d-inline-flex align-center mb-4 mt-4"
      :class="{'order-10': n === 1}"
      v-for="n in 10"
      :key="n"
    >
      <v-btn
        class="mx-auto"
        color="primary"
        fab
        dark
      >
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
