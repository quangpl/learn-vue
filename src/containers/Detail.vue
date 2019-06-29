<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">CuliMovie</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item>
        <router-link style="color:white" to="/">Home</router-link>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>

  <div v-if="!isLoading">

    <div class="header"><span style="font-size:31px; color:#fff;">{{this.film.Title}} <span style="margin-left:10px;font-size:23px">{{this.film.imdbRating}}
          <font-awesome-icon style="font-size:23px;color:yellow; margin:5px;" icon="star" /></span></span>
      <p style="color:silver; font-size:14px;">
        {{this.film.Runtime}}| {{this.film.Genre}} | {{this.film.Released}}</p>
    </div>
    <b-row>
      <b-col md="3" sm="4" xs="12">
        <b-img class="image" v-bind:src="this.film.Poster" fluid></b-img>
      </b-col>
      <b-col md="9" sm="8" xs="12">
        <div style="margin-top:20px; font-size:17px;">
          <p> <b>Writer:</b> {{this.film.Writer}}</p>
          <p> <b>Actors:</b> {{this.film.Actors}}</p>
          <p> <b>Plot:</b> {{this.film.Plot}}</p>
          <p> <b>Language:</b> {{this.film.Language}}</p>
          <p> <b>Country:</b> {{this.film.Country}}</p>
          <p> <b>Awards:</b> {{this.film.Awards}}</p>
          <p> <b>Type:</b> {{this.film.Type}}</p>
        </div>
      </b-col>
    </b-row>
  </div>
  <h1 style="font-size:30px; text-align:center; margin:30px;" v-else>Loading...<br></br>
    <b-img src="https://i.imgur.com/4PnQE6P.gif"></b-img>
  </h1>
</div>
</template>

<script>
import axios from 'axios'
import {
  setTimeout
} from 'timers';
export default {
  name: "Detail",
  props: {
    name: String
  },
  data: function() {
    return {
      film: {},
      isLoading: true
    };
  },
  mounted() {
    let id = this.$route.params.id;
    axios
      .get(`http://www.omdbapi.com/?apikey=41e34b17&i=${id}`)
      .then(response => {
        this.film = {
          ...response.data
        };
        this.isLoading = false;
      })

  }
};
</script>

<style scoped>
.item {
  border-radius: 0;
}

.header {
  height: 90px;
  padding: 10px;
  background: #333333;
  color: #000;
  font-size: 28px;
}

.image {
  margin: 30px;
}
</style>
