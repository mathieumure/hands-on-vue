<template>
  <div>
    <router-link to="/"><h1>Home</h1></router-link>
    <card v-if="pokemon.id" :pokemon="pokemon"/>
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
            pokemon: {}
          }
        },
        async mounted() {
          this.pokemon = await PokemonService.getPokemon(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>
