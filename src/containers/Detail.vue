<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">CuliMovie</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item><router-link style="color:white" to="/detail">Detail</router-link></b-nav-item>
            <b-nav-item><router-link style="color:white" to="/">Home</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
    <b-container className="bv-example-row">
        <b-row>
            <b-col <b-img src="https://picsum.photos/1024/400/?image=42" fluid alt="Responsive image"></b-img></b-col>
            <b-col><b-img src="https://picsum.photos/1024/400/?image=42" fluid alt="Responsive image"></b-img></b-col>
        </b-row>
        <h2>{{$route.params.id}}</h2>
    </b-container>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        name: String
    },
    data: function () {
        return {
        }

    },
    mounted() {
    }

}
</script>

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
