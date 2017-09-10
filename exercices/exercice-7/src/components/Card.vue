<template>
  <div class="card">
    <div class="card-content">
      <a class="tags has-addons is-pulled-right" @click="toggleFavorite">
        <span class="tag">Favorite</span>
        <span class="tag is-success" v-if="favorite" >Yes</span>
        <span class="tag is-danger" v-else>No</span>
      </a>
      <img :src="image"/>
      <p>
        {{name | capitalize}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [
    'name',
    'image',
    'favorite'
  ],
  methods: {
    toggleFavorite () {
      this.$emit(this.favorite ? 'removeFromFavorites' : 'addToFavorites')
    }
  },
  filters: {
    capitalize: function (value) {
      const capitalizedLetter = value.charAt(0).toUpperCase();
      const queueLetters = value.slice(1);
      return `${capitalizedLetter}${queueLetters}`;
    }
  }
}
</script>

<style>

</style>
