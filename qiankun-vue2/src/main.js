import Vue from 'vue'
import App from './App.vue'
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
  }
])
start()