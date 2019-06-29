import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fileName: "",
    listFilm: [],
    hasSort: false
  },
  mutations: {
    change(state, filmName) {
      state.filmName = filmName;
      axios
        .get(`http://www.omdbapi.com/?apikey=41e34b17&s=${filmName}`)
        .then(response => {
          state.listFilm = response.data.Search;
          if (state.listFilm != undefined) {
            state.hasSort = true;
          } else {
            state.hasSort = false;
          }
        });
    },
    reset(state) {
      state.listFilm = [];
      state.hasSort = false;
    },
    sort(state, sort) {
      let newListFilm = [...state.listFilm];
      if (sort === true) {
        newListFilm.sort((a, b) => {
          return a.Year - b.Year;
        })
      } else {
        newListFilm.sort((a, b) => {
          return b.Year - a.Year;
        })
      }
      state.listFilm = [...newListFilm];
    }
  },
  getters: {
    listFilm: state => state.listFilm,
    filmName: state => state.filmName,
    hasSort: state => state.hasSort
  }
});
