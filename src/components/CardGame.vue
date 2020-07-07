<template>
  <div class="card" :class="{ 'card--active': active }" @click="$emit('click')">
    <div class="card__inner">

      <div class="card__front">
        <div class="card__container">
          <img
            class="card__image"
            :src="require('../assets/images/logo-muted.svg')"
          />
          <h2> Obliviate </h2>
          <p> Jogo da  Memória </p>
        </div>
      </div>

      <div class="card__back">
        <img
          :src="image"
          alt="Paris"
          style="width:100%;height:auto;background-size: contain;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: () => false,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main';

.card {
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: rem(1000px);
  overflow: hidden;
  border-radius: rem(8px);
  box-shadow: 0 0 rem(8px) rem(-5px) rgba(0,0,0,0.75);
  cursor: pointer;

  &--active {
    cursor: not-allowed;
    .card__inner {
      transform: rotateY(180deg);
    }
  }

   &__inner {
    border: rem(1px) solid #f1f1f1;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

    /* Position the front and back side */
  &__front, &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  &__container {
      padding: rem(16px);
      h2 {
        font-size: rem(18px);
        letter-spacing: rem(4px);
        text-transform: uppercase;
      }
      h2, image, p {
        margin: 0 0 rem(4px) 0;
      }
  }
  &__image {
    padding: rem(8px);
    width: rem(80px);
  }

  /* Style the front side */
  &__front {
    background-color: #e9e9e9;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style the back side */
  &__back {
    background-color: white;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
