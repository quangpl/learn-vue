import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

 export const store = new Vuex.Store({
    state:{
      data:''
    },
    mutations:{
        change(state,data){
            state.data = data
        }
    },
    getters:{
        data: state=>state.data
    }
})