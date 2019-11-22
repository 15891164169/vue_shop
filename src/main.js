import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import FastClick from 'fastclick'

import Toast from '@/components/common/toast/index.js'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

Vue.use(Toast)

Vue.use(VueLazyLoad, {
  // error: '@/assets/images/common/placeholder.png',
  loading: require('@/assets/images/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
