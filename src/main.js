import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

// Iconic Icons import as global
import AlertIcon from 'vue-ionicons/dist/ios-alert.vue'
Vue.component('alert-icon', AlertIcon)
require('vue-ionicons/ionicons.css')

// vue-awesome-swiper for carousel   not working


//Main CSS prepossed by SCSS
import './assets/css/main.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')