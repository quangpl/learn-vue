<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">CuliMovie</b-navbar-brand>
            <b-navbar-nav>
                <b-nav-item>
                    <router-link style="color:white" to="/detail">Detail</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link style="color:white" to="/">Home</router-link>
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-navbar>
        <Form/>
        <Movie name="New movie"/>
    </div>
</template>

<script>
    import Form from '../components/Form'
    import Movie from '../components/Movie'

    export default {
        name: 'Home',
        components: {
            Form,
            Movie
        },
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

    .name {
        color: #42b983;
        font-weight: 800;
    }
</style>
