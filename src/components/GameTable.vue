<template>
  <div class="game-table">

    <div
      v-for="(card, idx) of cards"
      class="game-table__item"
      :key="card.id"
    >
      <card-game
        @click="$emit('select', card, idx)"
        v-bind="card"
      />
    </div>

  </div>
</template>
<script>
import CardGame from './CardGame.vue';

export default {
  components: {
    CardGame,
  },
  props: {
    cards: Array,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main';

 .game-table {
   display: flex;
   flex-flow: row wrap;
   width: 100%;
   box-sizing: border-box;
   padding: 0 rem(8px);
   justify-content: center;

   &__item {
     width: 15%;
     flex-basis: 15;
     padding: rem(8px);
     height: 200px;
   }
 }
</style>
