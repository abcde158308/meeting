// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import './assets/styles/reset.css'
// import './assets/styles/iconfont.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
