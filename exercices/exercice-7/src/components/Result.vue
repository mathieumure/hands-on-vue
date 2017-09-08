<template>
  <div class="resultset">
    <div class="columns is-multiline">
      <div
          class="column is-2 has-text-centered"
          v-for="pokemon of computedPokemons"
          v-if="filterOnPokemon(pokemon)"
        >
        <Card :name="pokemon.name" :image="pokemon.image" 
          :favorite="$store.getters.isFavorite(pokemon)" 
          @addToFavorites="$store.commit('ADD_TO_FAVORITES', pokemon)"
          @removeFromFavorites="$store.commit('REMOVE_FROM_FAVORITES', pokemon)"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from './Card.vue';
export default {
  name: 'result',
  components : {
    Card,
  },
  props: [
    'criteria'
  ],
  methods: {
    filterOnPokemon: function(pokemon) {
      const lowerSearch = this.criteria.toLowerCase();
      const lowerPokemon = pokemon.name.toLowerCase();
      return lowerPokemon.includes(lowerSearch);
    },
  },
  computed: {
    // a computed getter
    computedPokemons: function () {
      return this.pokemons.map(pokemon => {
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        pokemon.image = pokemonImage;
        return pokemon;
      });
    },
  },
  data() {
    return {
      pokemons: [],
    };
  },
  mounted() {
    axios
      .get('http://pokeapi.co/api/v2/pokedex/1/')
      .then(res => res.data)
      .then(({ pokemon_entries }) => {
        this.pokemons = pokemon_entries.map(pokemon => ({
          id: pokemon.entry_number,
          name: pokemon.pokemon_species.name,
        }));
      });
  },
}
</script>

<style>

</style>
