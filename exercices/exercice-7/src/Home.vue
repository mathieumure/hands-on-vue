<template>
  <div>
    <div class="container">
      <div class="m-t">
        <search @onSearchChange="onSearchChange"/>
      </div>
      <div class="m-t">
        <result :criteria="searchCriteria"/>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";
export default {
  name: 'home',
  components: {
    Result,
    Search
  },
  data() {
    return {
      searchCriteria: ""
    };
  },
  methods: {
    onSearchChange(newSearchValue) {
      this.searchCriteria = newSearchValue;
    }
  }
};
</script>

<style>
.m-t {
  margin-top: 10px;
}
</style>
