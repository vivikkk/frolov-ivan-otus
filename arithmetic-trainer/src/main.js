import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { timeParser, declOfNum } from './filters'

Vue.config.productionTip = false

Vue.filter('timeParser', timeParser)
Vue.filter('declOfNum', declOfNum)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
