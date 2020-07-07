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
        title: 'Jogo da Memória',
      },
    },
  ],
};
