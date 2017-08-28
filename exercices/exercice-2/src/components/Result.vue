<template>
  <div class="resultset">
    <div class="columns is-multiline">
      <div class="column is-2 has-text-centered">
        <Card name="Bulbuzar" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
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
}
</script>

<style>

</style>
