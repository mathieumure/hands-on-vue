<template>
  <div class="resultset">
    <div class="columns is-multiline">
      <div class="column is-2 has-text-centered">
        <Card :name="pokemons[0].name" :image="pokemons[0].image"/>
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
      }],
    };
  },
}
</script>

<style>

</style>
