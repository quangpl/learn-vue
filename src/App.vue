
<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form'
import Display from './components/Display'


export default {
  name: 'app',
  components: {
    Display,
    Form,
    HelloWorld
  }
}
</script>
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="A pet project for learning VueJS :D" name="Quang"/>
     <router-link to="/info">Go to Info</router-link>
    <router-link to="/form">Go to Form</router-link>
    <router-view></router-view>
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
