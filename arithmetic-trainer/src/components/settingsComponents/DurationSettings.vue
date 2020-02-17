<template>
  <div>
    <h3 class="mb-6">Длительность:
      <span>{{ duration | declOfNum(['минута', 'минуты', 'минут']) }}</span>
    </h3>
    <v-slider
      v-model="duration"
      min="1"
      max="5"
    ></v-slider>
  </div>
</template>

<script>
export default {
  name: 'DurationSettings',

  computed: {
    duration: {
      get () {
        return this.$store.getters.duration
      },

      set (value) {
        this.$store.commit('updateDuration', value)
      }
    }
  }
}
</script>
