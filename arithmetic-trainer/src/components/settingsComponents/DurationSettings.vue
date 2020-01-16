<template>
  <div>
    <h3 class="mb-6">Длительность:
      <span v-text="duration"></span> {{ declOfNum }}
    </h3>
    <v-slider
      v-model="duration"
      min="1"
      max="15"
    ></v-slider>
  </div>
</template>

<script>
export default {
  name: 'DurationSettings',

  data: () => ({
    duration: 3,
    cases: [2, 0, 1, 1, 1, 2],
    declOfMinutes: ['минута', 'минуты', 'минут']
  }),

  computed: {
    declOfNum () {
      return this.declOfMinutes[(this.duration % 100 > 4 && this.duration % 100 < 20) ? 2 : this.cases[(this.duration % 10 < 5) ? this.duration % 10 : 5]]
    }
  }
}
</script>
