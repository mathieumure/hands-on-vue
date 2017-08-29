<template>
  <div class="resultset">
    <div class="columns is-multiline">
      <div class="column is-2 has-text-centered" v-for="pokemon in pokemons">
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
  data() {
    return {
      pokemons: [{
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      }, {
        name: 'Ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      }, {
        name: 'Venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      }, {
        name: 'Charmander',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      }, {
        name: 'Charmeleon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      }, {
        name: 'Charizard',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      }, {
        name: 'Squirtle',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      }, {
        name: 'Wartortle',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      }, {
        name: 'Blastoise',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      }, {
        name: 'Caterpie',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      }],
    };
  },
}
</script>

<style>

</style>
