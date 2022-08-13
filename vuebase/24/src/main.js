import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {chajian} from './components/chajian'
Vue.use(chajian);
new Vue({
  render: h => h(App),

  // render(CreateElement){
  //   return CreateElement('h1','你好啊')
  // }
}).$mount('#app')
