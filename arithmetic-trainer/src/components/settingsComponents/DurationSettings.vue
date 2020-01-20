<template>
  <div>
    <h3 class="mb-6">Длительность:
      <span>{{ duration | declOfNum(['минута', 'минуты', 'минут']) }}</span>
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
    cases: [2, 0, 1, 1, 1, 2]
  }),

  filters: {
    declOfNum: (value, declOfNum) => {
      const cases = [2, 0, 1, 1, 1, 2]

      return `${value} ${declOfNum[(value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]]}`
    }
  }
}
</script>
