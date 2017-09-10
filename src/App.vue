<template>
  <div id="app">
    <div class="container">
      <div class="cover">
        <img src="./assets/zenidex.png"/>
      </div>
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
  name: "app",
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

.cover {
  background-image: url('https://ourblissfulfamilyeats.files.wordpress.com/2014/07/pokemon-logo.jpg');
  width: 100%;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 100px;
  text-align: center;
  margin-bottom: 50px;
}

.cover img {
  position: asolute;
  margin-top: 150px;
  height:70px;
}
</style>
