<template>
  <div class="content">
    <navbar
      v-bind="nav"
    />
    <main>
      <router-view />
    </main>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';

const image = require('@/assets/images/logo.svg');

export default {
  components: {
    Navbar,
  },
  data: () => ({
    nav: {
      title: 'Jogo da Memória',
      image,
      links: [
        { title: 'Sobre', to: { name: 'home.about' } },
        { title: 'Ranking', to: { name: 'game.ranking' } },
        { title: 'Jogar', to: { name: 'game.play' }, styleClass: 'navbar--play' },
      ],
    },
  }),
};
</script>
