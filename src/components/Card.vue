<template>
  <div class="card">
    <div class="card-content">
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
  ],
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
