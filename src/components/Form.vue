<template>
  <div class="hello">
  <label for="flavor"> Your favourite dream </label>
  <input name="flavor" v-on:input="handleChange"/>
  </div>

</template>

<script>
export default {
  name: 'Form',
  methods:{
    handleChange:function (event){
        this.$store.commit('change',event.target.value)
    }
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
