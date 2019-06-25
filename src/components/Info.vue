<template>
  <div class="hello">

   <ul>
<div v-show="isShow">
<b-button v-on:click="handleClick" variant="outline-success">Click me</b-button>
<b-button v-on:click="handleSubmit" variant="outline-info">Submit</b-button>
<p>Your value : {{count}}</p>
<p>Your subCount : {{sub_count}}</p>
<b-button v-on:click="handleSubmit" variant="outline-info">Bus Event</b-button>
       </div>
<b-button v-on:click="handleShow" variant="outline-danger">Show/Hide</b-button>
    </ul>
<b-button v-on:click="handleBus('new var')" variant="outline-danger">Bus Event</b-button>

  <div>
      <input v-model="name"/>
   <p style="margin-top:20px;"> Your name : {{name}} </p>
   <p>Hello {{school|fb('VNUHCM')}}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: ['gmail','facebook'],
  filters:{
  fb:function(sc,pre){
     return `${sc} ${pre}`
}
  },
  methods:{
      handleClick:function (){
       this.count=this.count+1;
      },
      handleShow: function(){
          this.isShow=!this.isShow
      },
      handleSubmit: function(){
          alert(this.count)
      },
      handleBus: function(val){
        this.$root.$emit('newClick',val);
      }
  },
  data:()=>{
     return {
         items:['oto','moto','car','bike','foot'],
         count:0,
         name:'quang',
         school:'UIT',
         isShow:false,
         color:'red'
     }
  },
  computed:{
    sub_count: function(){
      return this.count+4;
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
