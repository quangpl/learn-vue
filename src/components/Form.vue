<template>
<div class="form">
  <b-form-group v-loading="true" :label-cols="0" label="Enter movie's name">
    <b-form-input v-model.trim="filmName" v-on:input="handleChange"></b-form-input>
  </b-form-group>
  <b-button variant="primary" v-on:click="handleReset()" size="lg">Reset</b-button>
  <b-dropdown v-if="this.$store.getters.hasSort" id="dropdown-left" text="Sort" size="lg" variant="primary" style="float:right;" class="m-2">
    <b-dropdown-item v-on:click="sortFilm(true)">Year Smalest</b-dropdown-item>
    <b-dropdown-item v-on:click="sortFilm(false)">Year Largest</b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>
export default {
  name: "Form",
  props: {},
  data: function() {
    return {
      filmName: "",
      hasLoad: false,
      loading: true
    };
  },
  methods: {
    handleChange: function() {
      this.$store.commit("change", this.filmName);
    },
    handleReset: function() {
      this.$store.commit('reset');
      this.filmName = '';
    },
    sortFilm: function(sort) {
      this.$store.commit('sort', sort)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.name {
  color: #42b983;
  font-weight: 800;
}

.form {
  margin: 50px;
}
</style>
