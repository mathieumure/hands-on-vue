<template>
  <div class="resultset">
    <div class="columns is-multiline">
      <div
          class="column is-2 has-text-centered"
          v-for="pokemon of favoritesPokemons"
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
import { mapGetters } from 'vuex'
import Card from './components/Card.vue'
export default {
  name: 'favorites',
  components: { Card },
  computed: {
    ...mapGetters({
      favoritesPokemons: 'favorites'
    })
  }
};
</script>

<style>
</style>
