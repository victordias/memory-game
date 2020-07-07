<template>
  <modal
    :value="value"
    v-bind="settings"
  >
    <div class="game-over text-center">
      <p class="game-over__title">Rodadas</p>
      <h1 class="game-over__rounds"> {{ rounds || 0 }} </h1>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal,
  },
  props: {
    rounds: Number,
    value: Boolean,
    player: String,
  },
  computed: {
    settings() {
      return {
        title: `Parabéns, ${this.player || 'Sem nome'}! \\o/`,
        actions: [
          { label: 'Nova Partida', click: this.submit },
          { label: 'Hall da Fama', to: { name: 'game.ranking' } },
        ],
      };
    },
  },
  methods: {
    submit() {
      this.$emit('submit');
      this.$emit('input', false);
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/scss/main';

  .game-over {
    color: green;
    margin: 0;

    &__title {
      margin: 0;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: rem(2px);
    }

    &__rounds {
      font-size: rem(60px);
      margin: 0;
    }
  }
</style>
