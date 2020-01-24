<template>
  <div>
    <v-card
      class="text-uppercase title d-flex justify-center align-center"
      height="42"
      outlined
      flat
      tile>
      <span>{{ currentTimer | timeParser }}</span>
    </v-card>

    <v-progress-linear
      height="10"
      striped
      :color="getColorOfTimer"
      :value="getPercentOfTimer"
    ></v-progress-linear>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Timer',

  data () {
    return {
      durationInSeconds: 0,
      currentTimer: 0,
      interval: null
    }
  },

  beforeMount () {
    this.durationInSeconds = this.duration * 60
    this.currentTimer = this.durationInSeconds
  },

  mounted () {
    this.interval = setInterval(() => {
      this.currentTimer--
    }, 1000)
  },

  computed: {
    ...mapGetters(['duration']),

    getColorOfTimer () {
      const alarmTime = 10

      return this.currentTimer > alarmTime ? 'light-blue' : 'red darken-2'
    },

    getPercentOfTimer () {
      return 100 - Math.floor(this.currentTimer / this.durationInSeconds * 100)
    }
  },

  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
