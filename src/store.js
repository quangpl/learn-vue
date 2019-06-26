import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        fileName: '',
        listFilm: []
    },
    mutations: {
        change(state, filmName) {
            state.filmName = filmName;
            axios
                .get(`http://www.omdbapi.com/?apikey=41e34b17&s=${filmName}`)
                .then(response => {
                    state.listFilm = response.data.Search
                })
        }
    },
    getters: {
        listFilm: state => state.listFilm,
        filmName: state => state.filmName
    }
})