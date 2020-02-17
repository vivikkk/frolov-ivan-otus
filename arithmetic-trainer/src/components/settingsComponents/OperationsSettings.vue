<template>
  <div>
    <h3>Типы вычислений</h3>
    <v-checkbox
      v-for="(item, index) in operations"
      :key="index"
      class="mb-n6"
      color="primary"
      v-model="selected"
      :label="item.label"
      :value="item.value">
    </v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'Operations',

  data () {
    return {
      operations: [
        { label: 'Суммирование', value: '+' },
        { label: 'Умножение', value: '*' },
        { label: 'Разность', value: '-' },
        { label: 'Деление', value: '/' }
      ]
    }
  },

  computed: {
    selected: {
      get () {
        return this.$store.getters.operations
      },

      set (value) {
        this.$store.commit('updateOperations', value)
      }
    }
  }
}
</script>
