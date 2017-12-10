import Vue from 'vue'
import Bourgeon from 'bourgeon'
import App from './App'
import Header from './Header'

Vue.use(Bourgeon, {
  locales: ['en', 'fr']
})

// Filters
Vue.filter('two_digits', (value) => {
  if (value < 0) {
    return '00'
  }
  if (value.toString().length <= 1) {
    return `0${value}`
  }
  return value
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')

new Vue({
  render: h => h(Header)
}).$mount('header')
