<template>
  <router-view></router-view>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import Home from './components/Home';
  import Pokemon from './components/Pokemon';

  Vue.use(VueRouter);

  const routes = [
    { path: '/', component: Home },
    { path: '/pokemon/:id', component: Pokemon}
  ];

  const router = new VueRouter({ routes });

  export default {
    router,
    name: "app",
    components: {
      Home,
      Pokemon
    },
  }
</script>

<style scoped>

</style>
