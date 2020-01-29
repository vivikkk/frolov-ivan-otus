<template>
  <v-row>
    <v-col cols="12">
      <h1 class="display-2 font-weight-bold mb-8 mt-4">{{ helloMessage }}</h1>
      <template v-if="accuracy">
        <p>Общая точность {{ accuracy }}%.</p>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Splash',

  data () {
    return {
      helloMessage: 'Дороу!1!!!'
    }
  },

  computed: mapGetters(['accuracy'])
}
</script>
