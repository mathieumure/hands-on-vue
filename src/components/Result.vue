<template>
  <!-- Result set -->
  <div class="resultset">
    <div class="columns is-multiline">

      <!-- Pokemon -->
      <card :name="'Bulbasaur'" :id="1"></card>

      <!-- Pokemon -->
      <card :name="'Ivysaur'" :id="2"></card>

      <!-- Pokemon -->
      <card :name="'Venusaur'" :id="3"></card>

      <!-- Pokemon -->
      <card :name="'Charmander'" :id="4"></card>

      <!-- Pokemon -->
      <card :name="'Charmeleon'" :id="5"></card>

      <!-- Pokemon -->
      <card :name="'Charizard'" :id="6"></card>

      <!-- Pokemon -->
      <card :name="'Squirtle'" :id="7"></card>

      <!-- Pokemon -->
      <card :name="'Wartortle'" :id="8"></card>

      <!-- Pokemon -->
      <card :name="'Blastoise'" :id="9"></card>

      <!-- Pokemon -->
      <card :name="'Caterpie'" :id="10"></card>

    </div>
  </div>
</template>

<script>
    import Card from './Card';

    export default {
        name: "result",
        components: {
          Card
        }
    }
</script>

<style scoped>

</style>
