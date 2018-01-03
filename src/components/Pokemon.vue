<template>
  <div>
    <router-link to="/"><h1>Home</h1></router-link>
    <span v-if="loading">
      <h1>Loading...</h1>
    </span>
    <card class="column is-2 has-text-centered" :pokemon="pokemon" v-else-if="pokemon" />
  </div>
</template>

<script>
    import Card from './Card';
    import PokemonService from './pokemonService'

    export default {
        name: "pokemon",
        components: {Card},
        props: [ 'id' ],
        computed: {
          pokemon () {
            console.log('computed')
            return this.$store.getters.pokemonDetail[this.id]
          },
          loading () {
            return this.$store.getters.loading
          }
        },
        mounted() {
          this.$store.dispatch('LOAD_POKEMON_DETAIL', {pokemonId: this.id})
        }
    }
</script>

<style scoped>

</style>
