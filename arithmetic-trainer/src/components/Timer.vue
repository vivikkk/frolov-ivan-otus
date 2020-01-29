<template>
  <div>
    <v-card
      class="text-uppercase title d-flex justify-center align-center"
      height="42"
      outlined
      flat
      tile>
      <span>{{ timer | timeParser }}</span>
    </v-card>

    <v-progress-linear
      height="10"
      striped
      :color="getColorOfTimer"
      :value="getPercentOfTimer">
    </v-progress-linear>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Timer',

  computed: {
    ...mapGetters([
      'duration',
      'timer'
    ]),

    getColorOfTimer () {
      const alarmTime = 10

      return this.timer > alarmTime ? 'light-blue' : 'red darken-2'
    },

    getPercentOfTimer () {
      return 100 - Math.floor(this.timer / (this.duration * 60) * 100)
    }
  }
}
</script>
