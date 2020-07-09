<template>
  <div class="game-table">

    <div
      v-for="(card, idx) of cards"
      class="game-table__item"
      :class="isE2E? `card-value__${card.value}`: ''"
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
  computed: {
    /**
     * check if is end-to-end runtime
     */
    isE2E: () => !!process.env.VUE_APP_IS_E2E,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main';

  @mixin cardSize ($size, $pa: 8px) {
    width: rem($size);
    height: rem($size);
    flex-basis: rem($size);
    padding: rem($pa);
  }

 .game-table {
   display: flex;
   flex-flow: row wrap;
   box-sizing: border-box;
   justify-content: center;
   margin: 0 auto;

  &__item {
    @include xsOnly {
      @include cardSize(105px, 6px);
    }

    @include smAndUp {
      @include cardSize(120px);
    }

    @include mdAndUp {
      @include cardSize(125px);
    }

    @include lgAndUp {
      @include cardSize(150px);
    }

    @include xlOnly {
      @include cardSize(220px);
    }
  }

 }
</style>
