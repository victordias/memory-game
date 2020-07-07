<template>
  <modal
    v-model="value"
    v-bind="settings"
  >
    <form @submit.prevent="submit">
      <label for="player">
        Qual seu nome?
      </label>
      <input
         v-model="player"
         type="text"
         name="player"
      />
      <p v-if="message" class="error-message">
        {{ message }}
      </p>

    </form>
  </modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal,
  },
  props: {
    value: Boolean,
  },
  data: () => ({
    player: null,
    message: null,
  }),
  computed: {
    settings() {
      return {
        title: 'Vamos começar?',
        subtitle: 'Para isso, preciso conhecer um pouco mais sobre você!',
        actions: [
          { label: 'Voltar', to: { name: 'home.index' }, closable: true },
          { label: 'Ranking', to: { name: 'game.ranking' } },
          { label: 'Continuar', click: this.submit },
        ],
      };
    },
  },
  methods: {
    submit() {
      if (!this.player) {
        this.message = 'Nome é obrigatório';
      } else {
        this.$emit('submit', this.player);
        this.$emit('input', false);
      }
    },
  },
};
</script>

<style>
  .error-message {
    color: red;
    margin: 0;
  }
</style>
