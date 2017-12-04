<template>
  <div class="container">
    <!-- Cover -->
    <div class="cover">
      <img src="/src/assets/images/zenidex.png"/>
    </div>

    <!-- Searchbar -->
    <div class="field m-t">
      <search />
    </div>

    <result />

  </div>
</template>

<script>
import Search from './components/Search';
import Result from './components/Result';

export default {
  name: 'app',
  components: {
    Search,
    Result
  }
}
</script>

<style>

</style>
