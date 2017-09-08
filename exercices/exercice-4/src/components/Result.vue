<template>
  <div class="resultset">
    <div class="columns is-multiline">
      <div
          class="column is-2 has-text-centered"
          v-for="pokemon of computedPokemons"
          v-if="filterOnPokemon(pokemon)"
        >
        <Card :name="pokemon.name" :image="pokemon.image"/>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      pokemons: [{
          id: 1,
          name: 'bulbasaur',
        }, {
          id: 2,
          name: 'ivysaur',
        }, {
          id: 3,
          name: 'venusaur',
        }, {
          id: 4,
          name: 'charmander',
        }, {
          id: 5,
          name: 'charmeleon',
        }, {
          id: 6,
          name: 'charizard',
        }, {
          id: 8,
          name: 'squirtle',
        }, {
          id: 9,
          name: 'wartortle',
        }, {
          id: 10,
          name: 'blastoise',
        }, {
          id: 11,
          name: 'caterpie',
      }],
    };
  },
}
</script>

<style>

</style>
