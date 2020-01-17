<template>
  <v-container>
    <v-row class="justify-space-between">
      <v-col cols="3">
        <v-btn x-large color="primary">
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
        <Calculations/>
      </v-col>
    </v-row>

    <v-row class="mt-8 justify-center">
      <Digits/>

      <v-col cols="2" class="d-flex flex-wrap justify-center">
        <Computations/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Timer from '../components/Timer'
import Calculations from '../components/Calculations'
import Computations from '../components/Computations'
import Digits from '../components/Digits'

export default {
  name: 'Game',

  components: {
    Timer,
    Calculations,
    Digits,
    Computations
  }
}
</script>
