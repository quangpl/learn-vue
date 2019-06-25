import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './store'
import Info from './components/Info'
import Form from './components/Form'

Vue.use(VueRouter)
// Bootstrap framework
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.config.productionTip = false
//Router config
const Test ={
  template:'<div>Test</div>'
}
let router = new VueRouter({
  routes:[
  {
    path:'/info',
    component: Info
  },
  {
    path:'/form',
    component: Form
  }]
})
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
