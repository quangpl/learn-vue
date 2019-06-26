<template>
    <div class="form">
        <b-form-group v-loading="true"
                      :label-cols="0"
                label="Enter movie's name"
        >
            <b-form-input v-model.trim="filmName" v-on:input="handleChange"></b-form-input>
        </b-form-group>
        <b-button variant="primary" size="lg">Search</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        props: {},
        data: function () {
            return {
                filmName: '',
                loading: true,
                color: '#000000'
            }
        },
        methods: {
            handleChange: function () {
                this.$store.commit('change', this.filmName)
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

    .name {
        color: #42b983;
        font-weight: 800;
    }

    .form {
        margin: 50px;
    }
</style>
