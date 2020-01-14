<template>
  <div>
    <h3 class="mt-6">Типы вычислений</h3>
    <v-checkbox
      v-for="(item, index) in test"
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
      selected: ['difference'],
      test: [
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
  }
}
</script>
