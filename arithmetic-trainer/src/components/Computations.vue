<template>
  <v-col sm="3" lg="3">
    <v-btn
      @click="$emit('remove-symbol')"
      class="mx-auto mb-4"
      color="primary"
      block
      dark>
      <span>ᐊ Стереть</span>
    </v-btn>

    <v-btn
      @click="$emit('check-answer', true)"
      class="mx-auto mb-4"
      color="green"
      block
      dark>
      <span>= Равно</span>
    </v-btn>

    <v-btn
      @click="$emit('check-answer', false)"
      class="mx-auto mb-4"
      color="red"
      block
      dark>
      <span>? Не знаю</span>
    </v-btn>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Computations',

  computed: mapGetters(['value'])
}
</script>
