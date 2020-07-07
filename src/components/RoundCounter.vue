<template>
<div class="round-counter">
  <div class="round-counter__inner">
    <h2 class="round-counter__label"> Rodada </h2>
    <p  class="round-counter__value">
      {{ value | padCounter }}
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: () => 0,
    },
  },
  filters: {
    padCounter(value) {
      return String(value).padStart(3, '0');
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main';

.round-counter {
  display: flex;
  justify-content: center;

  &__inner {
    margin: rem(24px);
    text-align: center;
    border-radius: rem(6px);
    background: colors('grey');
    max-width: rem(120px);
    min-width: rem(100px);
    padding: rem(16px);
    color: colors('white');
    box-shadow: 3px 3px 5px 6px #ccc;
    z-index: 1;
  }

  &__label {
    color: colors('white');
    margin: 0 0 rem(8px) 0;
    font-size: rem(12px);
    letter-spacing: rem(6px);
    font-weight: bold;
    text-transform: uppercase;
  }
  &__value {
    font-size: rem(48px);
    font-weight: bold;
    margin: 0;
  }
}
</style>
