<template>
  <div>
    <h3 class="mb-6">Уровень сложности</h3>
    <v-slider
      v-model="difficulty"
      min="1"
      max="3"
      :tick-labels="seasons"
      :color="getDifficultColor"
      ticks>
    </v-slider>
  </div>
</template>

<script>
export default {
  name: 'DifficultySettings',

  data () {
    return {
      colors: [
        'red lighten-3',
        'red darken-2',
        'red darken-4'
      ],
      seasons: [
        'Изян',
        'Просто',
        'Сложно'
      ]
    }
  },

  computed: {
    difficulty: {
      get () {
        return this.$store.getters.difficulty
      },

      set (value) {
        this.$store.commit('updateDifficulty', value)
      }
    },

    getDifficultColor () {
      return this.colors[this.difficulty - 1]
    }
  }
}
</script>
