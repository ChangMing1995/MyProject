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
    children: [
      {
        path: '/Demo1',
        name: 'Demo1',
        component: () => import('@/views/demo/demo1.vue'),
      },
      {
        path: '/Demo2',
        name: 'Demo2',
        component: () => import('@/views/demo/demo2.vue'),
      },
    ],
  },
];

// const viewRoutes = [
//   {
//     path: '/Demo1',
//     name: 'Demo1',
//     component: () => import('@/views/demo/demo1.vue'),
//   },
//   {
//     path: '/Demo2',
//     name: 'Demo2',
//     component: () => import('@/views/demo/demo2.vue'),
//   },
// ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes],
});

export default router;
