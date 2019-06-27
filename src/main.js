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
    { path: '/', component: Home }
];

const router = new VueRouter({
    routes,
    mode: 'history',
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
