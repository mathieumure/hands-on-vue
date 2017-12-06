<template>
  <router-view></router-view>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import Home from './components/Home';

  Vue.use(VueRouter);

  const routes = [
    { path: '/', component: Home },
  ];

  const router = new VueRouter({ routes });

  export default {
    router,
    name: "app",
    components: {
      Home,
    },
  }
</script>

<style scoped>

</style>
