import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
registerMicroApps([
  {
    name: 'qiankun-vue3',
    entry: '//localhost:8001',
    container: '#app',
    activeRule: '/vue3'
  }
])
start()