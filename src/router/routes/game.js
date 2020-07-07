import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Play from '@/views/game/Play.vue';

export default {
  path: '/game',
  component: DefaultLayout,
  children: [
    {
      path: 'play',
      name: 'game.play',
      meta: {
        title: 'Jogar',
      },
      component: Play,
    },
    {
      path: 'ranking',
      name: 'game.ranking',
      meta: {
        title: 'Top Player',
      },
      component: () => import(/* webpackChunkName: "ranking" */ '@/views/game/Ranking.vue'),
    },
  ],
};
