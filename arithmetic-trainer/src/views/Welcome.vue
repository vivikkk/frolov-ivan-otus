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
  </v-container>
</template>

<script>
import Splash from '../components/Splash'
import DurationSettings from '../components/settingsComponents/DurationSettings'
import DifficultySettings from '../components/settingsComponents/DifficultySettings'
import ComputationsSettings from '../components/settingsComponents/ComputationsSettings'

export default {
  name: 'Welcome',

  components: {
    Splash,
    DurationSettings,
    DifficultySettings,
    ComputationsSettings
  }
}
</script>
