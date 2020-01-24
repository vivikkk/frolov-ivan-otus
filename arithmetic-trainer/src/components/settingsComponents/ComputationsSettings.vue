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
          value: 'amount'
        },
        {
          label: 'Умножение',
          value: 'multiplication'
        },
        {
          label: 'Разность',
          value: 'difference'
        },
        {
          label: 'Деление',
          value: 'division'
        },
        {
          label: 'Возведение в степень',
          value: 'elevation'
        }
      ]
    }
  },

  methods: {
    isDisable (val) {
      const activeArr = ['amount', 'multiplication']

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
