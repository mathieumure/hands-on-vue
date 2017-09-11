<template>
  <div id="app">
    <div>
      <span class="m-r">
        <router-link to="/">Pokedex</router-link>
      </span>
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <div class="cover">
      <img src="./assets/zenidex.png"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./Home.vue";
import Favorites from './Favorites.vue';

Vue.use(VueRouter);


// Defining the routes
const routes = [
  { path: '/', component: Home },
  { path: '/Favorites', component: Favorites }
];

// Creating the router
const router = new VueRouter({ routes });

export default {
  router,
  name: 'app',
  components: {
    Home,
    Favorites,
  },
};
</script>

<style>
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

.m-r {
  margin-right: 10px;
}
</style>
