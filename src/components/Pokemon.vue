<template>
  <div>
    <router-link to="/"><h1>Home</h1></router-link>
    <card :id="1" :name="'Bulbazor'"/>
  </div>
</template>

<script>
    import Card from './Card';

    export default {
        name: "pokemon",
        components: {Card}
    }
</script>

<style scoped>

</style>
