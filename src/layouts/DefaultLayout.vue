<template>
  <div>
    <navbar
      v-bind="nav"
    />
    <main class="app__content">
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
      title: 'Obliviate',
      image,
      links: [
        { title: 'Jogo da Memória', to: { name: 'game.play' } },
        { title: 'Hall da Fama', to: { name: 'game.ranking' } },
      ],
    },
  }),
};
</script>

<style lang="scss">
@import '../assets/scss/main';

  .app {
    &__content {
      width: 100%;
      box-sizing: border-box;
      position: relative;
      padding: 8px;
      padding-top: rem($navbar-height) + rem(16px);

      @include mdAndUp {
        padding: rem($navbar-height) rem($gutter);
      }
    }
  }
</style>
