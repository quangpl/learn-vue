<template>
<div>
  <b-card bg-variant="dark" text-variant="white" title={name} class="movie">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="success">More</b-button>
</b-card>
</div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    name: String
  }
}
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
.movie{
margin-left:40px;
margin-right:40px;
}

</style>
