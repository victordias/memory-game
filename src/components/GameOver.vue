<template>
  <modal
    :value="value"
    v-bind="settings"
    styleClass="game-over__modal"
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
        title: `Parabéns, ${this.player || 'Sem nome'}!`,
        actions: [
          { label: 'Nova Partida', click: this.submit, id: 'game__restart' },
          { label: 'Hall da Fama', to: { name: 'game.ranking' }, id: 'game__ranking-link' },
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
