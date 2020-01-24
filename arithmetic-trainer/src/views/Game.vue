<template>
  <v-container>
    <v-row class="justify-space-between">
      <v-col cols="3">
        <v-btn to="/" large color="primary">
          <v-icon dark>mdi-close</v-icon>
          <span>Отмена</span>
        </v-btn>
      </v-col>
      <v-col cols="2">
        <Timer/>
      </v-col>
    </v-row>

    <v-row class="display-3 mt-8 justify-center">
      <v-col cols="10" class="d-flex justify-center">
        <Calculations
          :numbers="numbers"
          :symbol="randomSymbol"
        />
      </v-col>
    </v-row>

    <v-row class="mt-8 justify-center">
      <Digits/>
      <Computations/>
    </v-row>
  </v-container>
</template>

<script>
import Timer from '../components/Timer'
import Calculations from '../components/Calculations'
import Computations from '../components/Computations'
import Digits from '../components/Digits'
import { mapGetters } from 'vuex'

export default {
  name: 'Game',

  components: {
    Timer,
    Calculations,
    Digits,
    Computations
  },

  data () {
    return {
      numbers: {
        a: this.random(),
        b: this.random()
      }
    }
  },

  mounted () {
    switch (this.difficulty) {
      case 2:
        this.numbers.a = this.random(1, 100)
        this.numbers.b = this.numbers.a > 10 ? this.random() : this.random(1, 100)
        break
      case 3:
        this.numbers.a = this.random(1, 100)
        this.numbers.b = this.random(1, 100)
        break
    }
  },

  computed: {
    ...mapGetters(['difficulty', 'computations']),

    randomSymbol () {
      return this.computations[this.random(1, (this.computations.length + 1)) - 1]
    }
  },

  methods: {
    random (min = 1, max = 10) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
