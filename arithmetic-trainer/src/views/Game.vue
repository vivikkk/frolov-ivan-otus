<template>
  <v-container v-if="isNotEmptyOperations">
    <v-row class="justify-space-between">
      <v-col cols="3">
        <v-btn @click="endGame()" large color="primary">
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
        v-model="snackbar">
        <span>+1</span>
      </v-snackbar>
    </v-row>

    <v-row class="display-3 mt-8 justify-center">
      <v-col cols="10" class="d-flex justify-center">
        <Calculations
          :numbers="numbers"
          :symbol="symbol"
          :result="value"
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
import { mapGetters, mapMutations, mapActions } from 'vuex'

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
      timeout: 2000
    }
  },

  created () {
    this.resetState()
  },

  mounted () {
    if (!this.isNotEmptyOperations) {
      this.$router.push('/')
    } else {
      this.randomDigits()
      this.randomSymbol()
      this.counting()
    }
  },

  computed: {
    ...mapGetters([
      'difficulty',
      'operations',
      'operationsLength',
      'isNotEmptyOperations',
      'value',
      'symbol',
      'numbers',
      'correctAnswer'
    ])
  },

  methods: {
    ...mapMutations([
      'updateValue',
      'removeLastDigit',
      'updateSymbol',
      'resetState'
    ]),

    ...mapActions(['shuffleArray', 'counting']),

    randomSymbol () {
      const randomSymbol = this.operations[this.random(1, (this.operationsLength + 1)) - 1]

      this.updateSymbol(randomSymbol)
    },

    randomDigits () {
      switch (this.difficulty) {
        case 1:
          this.shuffleArray([this.random(), this.random()])
          break
        case 2:
          this.shuffleArray([this.random(1, 100), this.random()])
          break
        case 3:
          this.shuffleArray([this.random(1, 50), this.random(1, 50)])
          break
      }
    },

    digitsInput (num) {
      if (this.value.length < 4) this.updateValue(num)
    },

    removeSymbol () {
      if (this.value) {
        this.removeLastDigit()
      }
    },

    random (min = 2, max = 10) {
      return Math.floor(Math.random() * (max - min)) + min
    },

    endGame () {
      this.$router.push({ name: 'Welcome' })
      this.resetState()
    }
  }
}
</script>
