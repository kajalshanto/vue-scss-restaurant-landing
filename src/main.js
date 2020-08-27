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
// VueSilentbox like lightbox
import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

// Vue data time picker
import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)

//Vue scrool to Plugin
var VueScrollTo = require('vue-scrollto');
// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


import BackToTop from 'vue-backtotop'
Vue.use(BackToTop)


//Main CSS prepossed by SCSS
import './assets/css/main.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')