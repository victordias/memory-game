import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Home from '@/views/home/Index.vue';

export default {
  path: '/',
  component: DefaultLayout,
  children: [
    {
      path: '',
      name: 'home.index',
      component: Home,
      meta: {
        title: 'Seja bem-vindo(a)',
      },
    },
    {
      path: 'sobre',
      name: 'home.about',
      meta: {
        title: 'Sobre o jogo',
      },
      component: () => import(/* webpackChunkName: "about" */ '@/views/home/About.vue'),
    },
  ],
};
