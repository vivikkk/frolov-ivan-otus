<template>
  <v-container v-if="isNotEmptyOperations">
    <v-row class="justify-space-between">
      <v-col cols="3">
        <v-btn to='/' large color="primary">
          <v-icon dark>mdi-close</v-icon>
          <span>Отмена</span>
        </v-btn>
      </v-col>

      <v-col cols="2">
        <Timer/>
      </v-col>
    </v-row>

    <v-row class="display-3 mt-8">
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
      <Computations
        @remove-symbol="removeSymbol"
        @check-answer="checkAnswer"
      />
    </v-row>

    <v-snackbar
      v-model="showSnackbar"
      :timeout="timeout"
      :color="isTrueAnswer ? 'success' : 'error'"
      center
      bottom>
      <span>{{ getMessage }}</span>
    </v-snackbar>
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
      showSnackbar: false,
      isTrueAnswer: false,
      timeout: 1500
    }
  },

  created () {
    this.resetGameState()
    this.resetGameCount()
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
    ]),

    getMessage () {
      return this.isTrueAnswer ? '+1 Правильный ответ' : 'Очень жаль =('
    }
  },

  methods: {
    ...mapMutations([
      'updateValue',
      'removeLastDigit',
      'updateSymbol',
      'resetGameState',
      'resetGameCount'
    ]),

    ...mapActions([
      'shuffleArray',
      'counting',
      'addCurrentGameCount',
      'addCorrectAnswersCount'
    ]),

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
          this.shuffleArray([this.random(2, 100), this.random()])
          break
        case 3:
          this.shuffleArray([this.random(2, 50), this.random(2, 50)])
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

    checkAnswer (bool) {
      if ((this.correctAnswer === Number(this.value)) && bool) {
        this.showSnackbar = true
        this.isTrueAnswer = true
        this.addCorrectAnswersCount()
      } else {
        this.showSnackbar = true
        this.isTrueAnswer = false
      }

      this.resetGameState()
      this.addCurrentGameCount()
      this.randomDigits()
      this.randomSymbol()
      this.counting()
    },

    random (min = 2, max = 10) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
