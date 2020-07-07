import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Play from '@/views/game/Play.vue';

export default {
  path: '/jogo-da-memoria',
  component: DefaultLayout,
  children: [
    {
      path: 'jogar',
      name: 'game.play',
      meta: {
        title: 'Jogar',
      },
      component: Play,
    },
    {
      path: 'hall-da-fama',
      name: 'game.ranking',
      meta: {
        title: 'Hall da Fama',
      },
      component: () => import(/* webpackChunkName: "ranking" */ '@/views/game/Ranking.vue'),
    },
  ],
};
