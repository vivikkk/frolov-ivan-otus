<template>
  <v-container>
    <Splash/>

    <v-container class="blue-grey lighten-5 elevation-5">
      <v-row>
        <v-col cols="12">
          <h2>Настройки</h2>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="7">
          <DurationSettings/>
          <DifficultySettings/>
        </v-col>
        <v-col cols="5">
          <ComputationsSettings/>
        </v-col>
      </v-row>

    </v-container>

    <v-container>
        <v-btn
          to="/game"
          :disabled="!computations.length"
          class="mt-8 mb-6"
          x-large
          color="primary">
          <v-avatar
            class="mr-2"
            :class="{'avatar_disabled': !computations.length}"
            size="32px">
            <img src="https://94info.com/upload/images/users/small/20190222172656957.jpg">
          </v-avatar>
          <span>Ю вана плей? летс плей!</span>
        </v-btn>
      </v-container>
  </v-container>
</template>

<script>
import Splash from '../components/Splash'
import DurationSettings from '../components/settingsComponents/DurationSettings'
import DifficultySettings from '../components/settingsComponents/DifficultySettings'
import ComputationsSettings from '../components/settingsComponents/ComputationsSettings'
import { mapGetters } from 'vuex'

export default {
  name: 'Welcome',

  components: {
    Splash,
    DurationSettings,
    DifficultySettings,
    ComputationsSettings
  },

  computed: mapGetters(['computations'])
}
</script>

<style scoped>
.avatar_disabled {
  opacity: .5;
}
</style>
