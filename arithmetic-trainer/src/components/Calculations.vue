<template>
  <div>
    <span>13</span>
    <span class="pl-5 pr-5 grey--text text--lighten-1">*</span>
    <span class="placeholder d-inline-flex"></span>
    <span class="pl-5 pr-5 grey--text text--lighten-1">*</span>
    <span class="placeholder d-inline-flex"></span>
    <span class="pl-5 pr-5 grey--text text--lighten-1">=</span>
    <span class="placeholder d-inline-flex"></span>
  </div>
</template>

<script>
export default {
  name: 'Calculations'
}
</script>

<style scoped>
.placeholder {
  border-bottom: 1px solid #bdbdbd;
  min-width: 50px
}
</style>
