<template>
  <div>
    <router-link to="/"><h1>Home</h1></router-link>
    <span v-if="loading">
      <h1>Loading...</h1>
    </span>
    <card class="column is-2 has-text-centered" :pokemon="pokemon" v-else-if="pokemon" />
  </div>
</template>

<script>
  import Card from '~/components/Card'

  export default {
    name: 'pokemon',
    components: {Card},
    computed: {
      pokemonId () {
        return this.$route.params.id
      },
      pokemon () {
        return this.$store.getters.pokemonDetail[this.pokemonId]
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    mounted () {
      this.$store.dispatch('LOAD_POKEMON_DETAIL', {pokemonId: this.pokemonId})
    }
  }
</script>

<style scoped>

</style>
