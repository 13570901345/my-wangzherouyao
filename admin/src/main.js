import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './style/index.css'

import http from './tool/http'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
