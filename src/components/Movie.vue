<template>
    <div>
        <b-card-group  style="margin:10px;" v-for="(item,index) in Search" deck>
            <b-card
                    border-variant="primary"
                    v-bind:header="item.imdbID"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center"
                    v-bind:footer="item.Year"
            >
                <b-card-text>{{item.Title}}</b-card-text>

            </b-card>

        </b-card-group>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Movie',
        props: {
            name: String
        },
        data: function () {
            return {
                Search:[]
            }
        },
        mounted () {
            axios
                .get('http://www.omdbapi.com/?apikey=41e34b17&s=hat')
                .then(response => {
                    console.log(response);
                    this.Search = response.data.Search
                })
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

    .movie {
        margin: 10px;
    }

</style>
