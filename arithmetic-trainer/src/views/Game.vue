<template>
  <v-container v-if="isNotEmptyComputations">
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
      <v-snackbar
        :timeout="timeout"
        color="success"
        right
        bottom
        v-model="snackbar">+1</v-snackbar>
    </v-row>

    <v-row class="display-3 mt-8 justify-center">
      <v-col cols="10" class="d-flex justify-center">
        <Calculations
          :numbers="numbers"
          :symbol="randomSymbol"
          :result="this.value"
        />
      </v-col>
    </v-row>

    <v-row class="mt-8 justify-center">
      <Digits @click-digits="digitsInput"/>
      <Computations @remove-symbol="removeSymbol"/>
    </v-row>
  </v-container>
</template>

<script>
import Timer from '../components/Timer'
import Calculations from '../components/Calculations'
import Computations from '../components/Computations'
import Digits from '../components/Digits'
import { mapGetters, mapMutations } from 'vuex'

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
      snackbar: false,
      timeout: 2000,
      numbers: {
        a: this.random(),
        b: this.random()
      }
    }
  },

  mounted () {
    if (!this.isNotEmptyComputations) this.$router.push('/')

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
    ...mapGetters(['difficulty', 'computations', 'computationsLength', 'isNotEmptyComputations', 'value']),

    randomSymbol () {
      return this.computations[this.random(1, (this.computationsLength + 1)) - 1]
    }
  },

  methods: {
    ...mapMutations(['updateValue', 'removeLastSymbol']),

    digitsInput (num) {
      this.updateValue(num)
    },

    removeSymbol () {
      if (this.value) {
        this.removeLastSymbol()
      }
    },

    random (min = 1, max = 10) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
