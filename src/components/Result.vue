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
            pokemons: [
              {
                name: "Bulbasaur",
                id: 1
              },
              {
                name: "Ivysaur",
                id: 2
              },
              {
                name: "Venusaur",
                id: 3
              },
              {
                name: "Charmander",
                id: 4
              },
              {
                name: "Charmeleon",
                id: 5
              },
              {
                name: "Charizard",
                id: 6
              },
              {
                name: "Squirtle",
                id: 7
              },
              {
                name: "Wartortle",
                id: 8
              },
              {
                name: "Blastoise",
                id: 9
              },
              {
                name: "Caterpie",
                id: 10
              }
            ]
          }
      },
      methods: {
        filterOnPokemon: function(pokemon) {
          const lowerSearch = this.criteria.toLowerCase();
          const lowerPokemon = pokemon.name.toLowerCase();
          return lowerPokemon.includes(lowerSearch);
        },
      },
    }
</script>

<style scoped>

</style>
