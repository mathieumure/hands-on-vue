import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import storeConfig from './store'
Vue.use(Vuex)
const store = new Vuex.Store(storeConfig)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
