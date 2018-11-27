import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);

import Mint from 'mint-ui'
Vue.use(Mint);
import router from './assets/js/router.js'
import './assets/css/public.css'
import '../node_modules/mint-ui/lib/style.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
