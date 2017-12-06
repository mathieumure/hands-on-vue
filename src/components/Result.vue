<template>
  <!-- Result set -->
  <div class="resultset">
    <div class="columns is-multiline">

      <!-- Pokemon -->
      <card v-for="pokemon of pokemons" :key="pokemon.id" :name="pokemon.name" :id="pokemon.id" v-if="filterOnPokemon(pokemon)"></card>

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
            pokemons: []
          }
      },
      methods: {
        filterOnPokemon: function(pokemon) {
          const lowerSearch = this.criteria.toLowerCase();
          const lowerPokemon = pokemon.name.toLowerCase();
          return lowerPokemon.includes(lowerSearch);
        },
      },
      mounted() {
        PokemonService.getPokemons().then(pokemons => {
          this.pokemons = pokemons;
        });
      }
    }
</script>

<style scoped>

</style>
