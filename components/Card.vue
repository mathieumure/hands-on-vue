<template>
  <div class="card">
    <div class="card-content">
      <img :src="`/sprites/${pokemon.id}.png`"/>
      <p>
        {{pokemon.name}}
      </p>
      <p v-if="pokemon.height"> Height: {{pokemon.height}}</p>
      <p v-if="pokemon.weight"> Weight: {{pokemon.weight}}</p>
      <p v-if="pokemon.types">
        Type: <span v-for="type of pokemon.types">{{type.type.name}}&nbsp;</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: [
      'pokemon'
    ]
  }
</script>

<style scoped>
  .card img{
    min-width: 100px;
  }
</style>
