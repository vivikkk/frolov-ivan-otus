<template>
  <v-container>
    <Splash/>

    <v-container class="blue-grey lighten-5 elevation-5">
      <v-row>
        <v-col cols="12">
          <h2>Настройки</h2>
        </v-col>
      </v-row>

      <DurationSettings/>
      <v-divider></v-divider>

      <DifficultySettings/>
      <v-divider></v-divider>
      <Computations/>
    </v-container>
    <v-btn class="mt-8 mb-6" block color="primary">Play!</v-btn>
  </v-container>
</template>

<script>
import Splash from '../components/Splash'
import DurationSettings from '../components/settingsComponents/DurationSettings'
import DifficultySettings from '../components/settingsComponents/DifficultySettings'
import Computations from '../components/settingsComponents/Computations'

export default {
  name: 'Welcome',

  components: {
    Splash,
    DurationSettings,
    DifficultySettings,
    Computations
  }
}
</script>
