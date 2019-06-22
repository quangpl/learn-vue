<template>
  <div class="hello">

   <ul>
       <div v-show="isShow">
<b-button v-on:click="handleClick" variant="outline-success">Click me</b-button>
<b-button v-on:click="handleSubmit" variant="outline-info">Submit</b-button>
<p>Your value : {{count}}</p>
       </div>
<b-button v-on:click="handleShow" variant="outline-danger">Show/Hide</b-button>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'Info',
  props: {
    gmail: String,
    facebook: String
  },
  methods:{
      handleClick:function (){
       this.count=this.count+1;
       console.log(val);
      },
      handleShow: function(){
          this.isShow=!this.isShow
      },
      handleSubmit: function(){
          alert(this.count)
      }
  },
  data:()=>{
     return{
         items:['oto','moto','car','bike','foot'],
         count:0,
         isShow:false
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
  display: inline-block;
}
li {
    margin:10px;
}
a {
  color: #42b983;
}
.info{
    color: #3399FF;
   font-size: 18px;
}
</style>
