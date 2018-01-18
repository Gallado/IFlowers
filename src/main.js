// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

var infiniteScroll =  require('vue-infinite-scroll')
Vue.use(infiniteScroll)
var VueDND = require('awe-dnd')
Vue.use(VueDND)

Vue.config.productionTip = false

/* eslint-disable no-new */
document.addEventListener('deviceready', function(){
  new Vue({
    el: '#app',
    router,
    infiniteScroll,
    VueDND,
    template: '<App/>',
    components: { App }
  })
  window.navigator.splashscreen.hide()
}, false)

/*
new Vue({
  el: '#app',
  router,
  infiniteScroll,
  VueDND,
  template: '<App/>',
  components: { App }
})
*/
