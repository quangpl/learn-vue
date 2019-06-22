<template>
  <div class="hello">
  <p>You choose:  {{$store.getters.data}}</p>
  </div>
</template>

<script>
export default {
  name: 'Display'
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
a {
  color: #42b983;
}
.name{
    color: #42b983;
    font-weight: 800;
}
</style>
