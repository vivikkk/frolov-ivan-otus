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
  })
}
</script>
