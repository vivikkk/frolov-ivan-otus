<template>
  <div>
    <h3>Типы вычислений</h3>
    <v-checkbox
      v-for="(item, index) in computations"
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
  name: 'Computations',

  data () {
    return {
      computations: [
        {
          label: 'Суммирование',
          value: 'amount'
        },
        {
          label: 'Разность',
          value: 'difference'
        },
        {
          label: 'Умножение',
          value: 'multiplication'
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
