<template>
  <div>
    <router-link to="/"><h1>Home</h1></router-link>
    <span v-if="loading">
      <h1>Loading...</h1>
    </span>
    <card class="column is-2 has-text-centered" :pokemon="pokemon" v-else />
  </div>
</template>

<script>
    import Card from './Card';
    import PokemonService from './pokemonService'

    export default {
        name: "pokemon",
        components: {Card},
        data() {
          return {
            loading: true,
            pokemon: {}
          }
        },
        async mounted() {
          this.loading = true
          this.pokemon = await PokemonService.getPokemon(this.$route.params.id);
          this.loading = false
        }
    }
</script>

<style scoped>

</style>
