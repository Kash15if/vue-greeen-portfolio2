import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'

Vue.config.productionTip = false

import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
