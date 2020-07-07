<template>
  <section class="obliviate">
    <div class="obliviate__game">
      <round-stats
        :value="round"
        :player="player"
      />
      <game-table
        :cards="cards"
        @select="select"
      />
    </div>

  <new-player-form
    v-model="newPlayerModal"
    @submit="setPlayer"
  />

  <game-over
    @submit="newGame"
    :rounds="round"
    :player="player"
    :value="endGame"
  />
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import GameTable from '@/components/GameTable.vue';
import NewPlayerForm from '@/components/NewPlayerForm.vue';
import GameOver from '@/components/GameOver.vue';
import RoundStats from '@/components/RoundStats.vue';

export default {
  components: {
    RoundStats,
    GameTable,
    NewPlayerForm,
    GameOver,
  },
  data: () => ({
    newPlayerModal: false,
  }),
  computed: {
    ...mapState('game', [
      'round',
      'cards',
      'player',
    ]),
    endGame() {
      return this.cards.every((card) => card.hit);
    },
  },
  methods: {
    select(card, idx) {
      this.addToSelection(idx);
    },
    ...mapMutations('game', {
      increaseRoundCounter: 'INCREASE_ROUND',
      addToSelection: 'ADD_CARD_TO_SELECTIONS',
      setPlayer: 'SET_PLAYER_NAME',
      newGame: 'RESET',
    }),
    ...mapMutations('ranking', {
      addToHall: 'SAVE_STATS',
    }),
  },
  watch: {
    player: {
      immediate: true,
      handler(name) {
        if (!name) {
          this.newPlayerModal = true;
        }
      },
    },
    endGame(finish) {
      if (finish) {
        this.addToHall({
          player: this.player,
          rounds: this.round,
        });
      }
    },
  },
};
</script>
