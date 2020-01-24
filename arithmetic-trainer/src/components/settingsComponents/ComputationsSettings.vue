<template>
  <div>
    <h3>Типы вычислений</h3>
    <v-checkbox
      v-for="(item, index) in computations"
      :key="index"
      class="mb-n6"
      color="primary"
      v-model="selected"
      :disabled="isDisable(item.value)"
      :label="item.label"
      :value="item.value">
    </v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'Computations',

  data () {
    return {
      computations: [
        {
          label: 'Суммирование',
          value: '+'
        },
        {
          label: 'Умножение',
          value: '*'
        },
        {
          label: 'Разность',
          value: '-'
        },
        {
          label: 'Деление',
          value: '/'
        },
        {
          label: 'Возведение в степень',
          value: 'ˆ'
        }
      ]
    }
  },

  methods: {
    isDisable (val) {
      const activeArr = ['+', '*']

      return !activeArr.some(item => item === val)
    }
  },

  computed: {
    selected: {
      get () {
        return this.$store.getters.computations
      },

      set (value) {
        this.$store.commit('updateComputations', value)
      }
    }
  }
}
</script>
