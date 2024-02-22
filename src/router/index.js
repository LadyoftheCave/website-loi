import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Uploaden from '../views/Uploaden.vue';
import Ideeen from '../views/Ideeen.vue';
import Ideeenbus from '../views/Ideeenbus.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ideeen',
    name: 'Ideeen',
    component: Ideeen
  },
  {
    path: '/uploaden',
    name: 'Uploaden',
    component: Uploaden
  },
  {
    path: '/ideeenbus',
    name: 'Ideeenbus',
    component: Ideeenbus
  }
];

console.log("Routes:", routes);

const router = new VueRouter({
  routes
});

export default router;
