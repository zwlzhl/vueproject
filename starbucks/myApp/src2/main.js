// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/flexble'
import './static/common.scss'
import Header from './components/Header'
import List from './components/todolist'
import store from './store/index'
import popUp from './components/popUp'
// Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.prototype.$store=store
Vue.component('Header',Header)
Vue.component('List',List)
Vue.component('popUp',popUp)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
