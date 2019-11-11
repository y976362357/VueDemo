import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// About main.js
// configuring the Vue js application
// register any third-party packages that the application relies on.

new Vue({
  render: h => h(App),
}).$mount('#app')
