import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.bus=this;
  }
}).$mount('#app')


// nextTick
// 某个函数里改变数据但是没有改变DOM，希望下一次而不是这一次改变DOM的时候进行某些操作