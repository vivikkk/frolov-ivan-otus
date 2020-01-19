<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex">
        <div class="headline">Игра «Тренер мозга»</div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <component :is="dynamicComponent"></component>
      <v-container>
        <v-btn class="mt-8 mb-6" x-large color="primary" @click="switchComponent">
          <v-avatar class="mr-2" size="32px">
            <img src="https://94info.com/upload/images/users/small/20190222172656957.jpg">
          </v-avatar>
          <span>Ю вана плей? летс плей!</span>
        </v-btn>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './views/Welcome'
import Game from './views/Game'

export default {
  name: 'App',

  components: {
    Welcome,
    Game
  },

  data: () => ({
    value: true
  }),

  methods: {
    switchComponent () {
      this.value = !this.value
    }
  },

  computed: {
    dynamicComponent () {
      if (this.value) {
        return 'Welcome'
      } else {
        return 'Game'
      }
    }
  }
}
</script>
