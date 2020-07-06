import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Guards from './guards';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

Guards(router);

export default router;
