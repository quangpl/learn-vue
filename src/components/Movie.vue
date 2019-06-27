<template>
  <div>
    <b-card-group style="margin:30px;" v-for="(item,index) in $store.getters.listFilm" deck>
      <b-card
        bg-variant="dark"
        img-alt="Card Image"
        text-variant="white"
        v-bind:title="item.imdbID"
        v-bind:sub-title="item.Year"
      >
        <b-card-text>{{item.Title}}</b-card-text>
        <b-button v-bind:href="'#/detail/'+item.imdbID" variant="primary">View</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    name: String
  },
  data: function() {
    return {
      Search: []
    };
  },
  mounted() {
    //load something
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
</style>
