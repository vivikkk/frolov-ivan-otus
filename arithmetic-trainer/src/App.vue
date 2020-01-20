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
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
