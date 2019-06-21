<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
    To learning new <b>Framework</b>, I will make pet project. It's a short way to success with me. Now, go VueJS.
    </p>
    <p>I'm <b class="name">{{name}}</b></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
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
a {
  color: #42b983;
}
.name{
    color: #42b983;
    font-weight: 800;
}
</style>
