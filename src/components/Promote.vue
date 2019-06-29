<template>
<div>
  <div>
    <b-carousel class="slide" id="carousel-fade" style="text-shadow: 0px 0px 2px #000" no-animation indicators>
      <div v-for="item in listFilm">
        <b-carousel-slide v-bind:caption="item.Title" class="img-slide" img-src="https://www.tigerfeetdirect.com/csi/1376256/i/pzi/72070.jpg"></b-carousel-slide>
      </div>
    </b-carousel>
  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Promote',
  data: function() {
    return {
      listFilm: []
    };
  },
  mounted() {
    axios.get(`http://www.omdbapi.com/?apikey=41e34b17&s=marvel`) //An temporary solution
      .then(response => {
        this.listFilm = response.data.Search;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide {
  background: #000;
  width: 50%;
  border: 5px dashed #000;
  margin-left: auto;
  margin-right: auto;
  display: absolute;
}
</style>
