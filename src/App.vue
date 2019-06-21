
<script>
import HelloWorld from './components/HelloWorld.vue'
import Info from './components/Info'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Info
  }
}
</script>
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="A pet project for learning VueJS :D" name="Quang"/>
    <Info/>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin:25px;
}
</style>
