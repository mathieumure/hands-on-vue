import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Home },
  { path: '/pokemon/:id', component: Pokemon, props: true}
];

export const router = new VueRouter({ routes });

export default router;
