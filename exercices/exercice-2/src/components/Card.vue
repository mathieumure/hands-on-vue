<template>
  <div class="card">
    <div class="card-content">
      <img :src="image"/>
      <p>
        {{name}}
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
}
</script>

<style>

</style>
