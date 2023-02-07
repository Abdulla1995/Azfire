import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'


import './assets/scss/styles.scss'
// import 'bootstrap-icons/font/bootstrap-icons.css'
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCekiCqAf55_yDtQ5ajlKMzj_yCf2nWKpo',
    region: 'en',
    language: 'en',
  },

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
