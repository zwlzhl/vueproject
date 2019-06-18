// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flex from './uitls/flexble'
import scss from './uitls/scss/common.scss'
import store from './store/index'
import {DatePicker, TimePicker} from 'element-ui'
/* eslint-disable no-new */
Vue.use(DatePicker)
Vue.use(TimePicker)
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App />'
})
