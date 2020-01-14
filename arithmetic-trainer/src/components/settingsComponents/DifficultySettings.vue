<template>
  <div>
    <v-row>
        <v-col cols="12">
          <h3>Сложность:
            <span v-text="difficulty"></span>
          </h3>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-slider
            v-model="difficulty"
            min="1"
            max="4"
            tick-size="4"
            :tick-labels="seasons"
            :color="getDifficultColor"
            ticks="always"
          >
          </v-slider>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'DifficultySettings',

  data: () => ({
    difficulty: 2,
    colors: [
      '#EF9A9A',
      '#EF5350',
      '#D32F2F',
      '#B71C1C'
    ],
    seasons: [
      'Изян',
      'Просто',
      'Норм',
      'Сложно'
    ]
  }),

  computed: {
    getDifficultColor () {
      return this.colors[this.difficulty - 1]
    }
  }
}
</script>
