import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Ideeen from './views/Ideeen.vue';
import Uploaden from './views/Uploaden.vue';
import Ideeenbus from './views/Ideeenbus.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/ideeen', component: Ideeen },
    { path: '/uploaden', component: Uploaden },
    { path: '/ideeenbus', component: Ideeenbus },
    // andere routes hier
  ],
});

createApp(App)
  .use(router)
  .mount('#app');
