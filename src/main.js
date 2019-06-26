import Vue from 'vue'
import App from './App.vue'
import Home from './containers/Home'
import VueRouter from 'vue-router'
import {store} from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import formLoading from 'vue2-form-loading'
import Detail from './containers/Detail'

const routes = [
    { path: '/detail/:id', component: Detail },
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
];

const router = new VueRouter({
    routes
});


Vue.use(Vuetify)
Vue.use(formLoading)
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

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
