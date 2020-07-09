<template>
<div class="round-counter">
  <div class="round-counter__player">
    <h5> JOGADOR </h5>
    <h2>
      {{ player || 'Sem nome'}}
    </h2>
  </div>

  <div class="round-counter__inner">
    <h2 class="round-counter__label"> Rodada </h2>
    <p  class="round-counter__value">
      {{ round | padCounter }}
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    round: {
      type: Number,
      default: () => 0,
    },
    player: String,
  },
  filters: {
    padCounter(value) {
      return String(value).padStart(2, '0');
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main';

.round-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include mdAndUp {
    flex-direction: row;
  }

  &__inner {
    margin: rem(24px);
    text-align: center;
    border-radius: rem(6px);
    background: colors('grey');
    padding: rem(16px);
    color: colors('white');
    box-shadow: 3px 3px 5px 6px #ccc;
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    @include xsOnly {
      display: flex;
      flex-flow: column;
    }
  }

  &__label {
    color: colors('white');
    font-size: rem(18px);
    letter-spacing: rem(6px);
    font-weight: bold;
    text-transform: uppercase;
    margin-right: rem(8px);
  }
  &__value {
    font-size: rem(48px);
    font-weight: bold;
    margin: 0;
  }

  &__player {
    h2, h5 {
      margin: rem(4px);
    }
    h2 {
      color: colors('primary')
    }
  }
}
</style>
