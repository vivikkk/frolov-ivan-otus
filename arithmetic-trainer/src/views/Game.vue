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
    <Modal @restart-game="restartGame()"/>
  </v-container>
</template>

<script>
import Timer from '../components/Timer'
import Calculations from '../components/Calculations'
import Computations from '../components/Computations'
import Digits from '../components/Digits'
import Modal from '../components/Modal'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Game',

  components: {
    Timer,
    Calculations,
    Digits,
    Computations,
    Modal
  },

  data () {
    return {
      showSnackbar: false,
      isTrueAnswer: false,
      interval: null,
      timeout: 1500
    }
  },

  beforeMount () {
    this.restartGame()
  },

  mounted () {
    if (!this.isNotEmptyOperations) {
      this.$router.push({ name: 'Welcome' })
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
      'correctAnswer',
      'duration',
      'timer'
    ]),

    getMessage () {
      return this.isTrueAnswer ? '+1 Правильный ответ' : 'Очень жаль =('
    }
  },

  methods: {
    ...mapMutations([
      'updateValue',
      'removeLastDigit',
      'resetGameState',
      'resetLastGameStat',
      'updateTimer',
      'showModal',
      'updateGlobalStat',
      'updateAccuracy',
      'updateData'
    ]),

    ...mapActions([
      'counting',
      'addCurrentGameCount',
      'addCorrectAnswersCount',
      'changeTimer'
    ]),

    playGame () {
      let randomSymbol = this.operations[this.random(1, (this.operationsLength + 1)) - 1]
      let shuffledArray = []

      switch (this.difficulty) {
        case 1:
          shuffledArray = [this.random(), this.random()].sort(() => Math.random() - 0.5)
          break
        case 2:
          shuffledArray = [this.random(10, 21), this.random()].sort(() => Math.random() - 0.5)
          break
        case 3:
          shuffledArray = [this.random(2, 51), this.random(2, 21)].sort(() => Math.random() - 0.5)
          break
      }

      this.counting({ shuffledArray, randomSymbol })
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

      this.addCurrentGameCount()
      this.playGame()
    },

    restartGame () {
      const durationInSeconds = this.duration * 60

      this.updateTimer(durationInSeconds)
      this.showModal(false)
      this.resetLastGameStat()
      this.playGame()
      this.startTimer()
    },

    startTimer () {
      this.interval = setInterval(() => {
        if (this.timer > 0) {
          this.changeTimer()
        } else {
          this.stopGame()
          this.updateGlobalStat()
          this.updateAccuracy()
        }
      }, 1000)
    },

    stopGame () {
      this.showModal()
      clearInterval(this.interval)
    },

    random (min = 2, max = 10) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  },

  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
