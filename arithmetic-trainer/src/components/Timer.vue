<template>
  <div>
    <v-card
      class="text-uppercase title d-flex justify-center align-center"
      height="42"
      outlined
      flat
      tile
    >
      <span>{{ currentTimer | timeParser }}</span>
    </v-card>

    <!-- <v-progress-linear
      background-color="primary lighten-4"
      color="primary"
      stream
      :value="getPercentOfTimer"
    ></v-progress-linear> -->
    <v-progress-linear
      color="light-blue"
      height="10"
      :value="getPercentOfTimer"
      striped
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: 'Timer',

  data () {
    return {
      initialTimer: 222,
      currentTimer: 0,
      interval: null
    }
  },

  beforeMount () {
    this.currentTimer = this.initialTimer
  },

  mounted () {
    this.interval = setInterval(() => {
      this.currentTimer--
    }, 1000)
  },

  computed: {
    getPercentOfTimer () {
      return 100 - Math.floor(this.currentTimer / this.initialTimer * 100)
    }
  },

  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
