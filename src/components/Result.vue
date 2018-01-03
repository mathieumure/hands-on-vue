<template>
  <!-- Result set -->
  <div class="resultset">
    <div class="columns is-multiline">

      <div v-if="loading">
        <h1>Loading...</h1>
      </div>

      <router-link class="column is-2 has-text-centered" v-for="pokemon of pokemons" :to="`/pokemon/${pokemon.id}`" :key="pokemon.id" v-if="filterOnPokemon(pokemon)">
        <!-- Pokemon -->
        <card  :pokemon="pokemon" v-if="!loading"></card>
      </router-link>

    </div>
  </div>
</template>

<script>
    import Card from './Card';
    import PokemonService from './pokemonService'

    export default {
        name: "result",
        components: {
          Card
        },
      props: [
        'criteria'
      ],
      data() {
          return {
            pokemons: [],
            loading: true,
          }
      },
      methods: {
        filterOnPokemon: function(pokemon) {
          const lowerSearch = this.criteria.toLowerCase();
          const lowerPokemon = pokemon.name.toLowerCase();
          return lowerPokemon.includes(lowerSearch);
        },
      },
      async mounted() {
        this.pokemons = await PokemonService.getPokemons();
        this.loading = false;
      }
    }
</script>

<style scoped>

</style>
