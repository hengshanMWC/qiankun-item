import Vue from 'vue'
import App from './App.vue'

import "zone.js"
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// 注册微应用
registerMicroApps([
  {
    name: 'qiankun-vue3', // 微应用的名称
    entry: '//localhost:8001', // 微应用入口
    container: '#app', // 微应用的容器
    activeRule: '/vue3' // url匹配微应用规则
  },
  {
    name: 'qiankun-react', // 微应用的名称
    entry: '//localhost:8002', // 微应用入口
    container: '#app', // 微应用的容器
    activeRule: '/react' // url匹配微应用规则
  },
  {
    name: 'qiankun-angular', // 微应用的名称
    entry: '//localhost:8003', // 微应用入口
    container: '#app', // 微应用的容器
    activeRule: '/angular' // url匹配微应用规则
  },
  {
    name: 'qiankun-svelte', // 微应用的名称
    entry: '//localhost:8004', // 微应用入口
    container: '#app', // 微应用的容器
    activeRule: '/svelte' // url匹配微应用规则
  }
])
start()