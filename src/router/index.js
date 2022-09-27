import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../login/index.vue';
import Layout from '../layout/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: login,
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: Layout,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
