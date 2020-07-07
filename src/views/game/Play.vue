<template>
  <section class="obliviate">
    <round-counter :value="round"/>
    <game-table
      :cards="cards"
      @select="select"
    />

  </section>
</template>

<script>
import RoundCounter from '@/components/RoundCounter.vue';
import GameTable from '@/components/GameTable.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    RoundCounter,
    GameTable,
  },
  computed: {
    ...mapState('game', [
      'round',
      'cards',
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

    }),
  },
};
</script>
