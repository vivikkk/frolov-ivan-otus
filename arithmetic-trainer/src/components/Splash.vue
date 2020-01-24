<template>
  <v-row>
    <v-col cols="12">
      <h1 class="display-2 font-weight-bold mb-8 mt-4">{{ helloMessage }}</h1>
      <p>Ваш последний результат - решено {число} из {число}.</p>
      <p>Общая точность {число}%.</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Splash',

  data () {
    return {
      helloMessage: 'Дороу!1!!!'
    }
  }
}
</script>
