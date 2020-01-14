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
      <Welcome/>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './views/Welcome'

export default {
  name: 'App',

  components: {
    Welcome
  },

  data: () => ({
    //
  })
}
</script>
