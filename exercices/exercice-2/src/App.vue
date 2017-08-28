<template>
  <div id="app">
    <div class="container">
      <div class="cover">
        <img src="./assets/zenidex.png"/>
      </div>
    </div>
    <search />
    <result />
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Result from './components/Result.vue';
export default {
  name: 'app',
  components: {
    Result,
    Search,
  },
}
</script>

<style>
</style>
