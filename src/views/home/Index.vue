<template>
  <div class="text-center presentation">
    <h1 class="presentation__title">
      Bem-vindo ao Obliviate!
    </h1>
    <p class="presentation__subtitle">
      O Jogo da Memória
    </p>
    <img
      class="presentation__image"
      :src="require('@/assets/images/obliviate-card-game.svg')"
    />
    <div class="presentation__btn-container">
      <router-link
        :to="{ name: 'game.play' }"
        class="presentation__btn"
      >
        Jogar Agora
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
@import '../../assets/scss/main';

  .presentation {
    max-width: rem(700px);
    margin: rem(12px) auto;

    &__title {
      font-size: rem(64px);
      color: colors('secondary');
      font-weight: 300;
      margin-bottom: 0;
    }

    &__subtitle {
      font-size: rem(32px);
      margin-top: 0;
      color: colors('grey');
    }

    &__btn {
      background: colors('success');
      color: colors('white');
      font-weight: bold;
      font-size: rem(24px);
      padding: rem(24px) rem(36px);
      text-decoration: none;
      border-radius: rem(4px);
      display: block;
      max-width: 300px;
      min-width: 300px;

      &:hover {
        $color: colors('success');
        background: lighten($color, 10%);
      }

      &-container {
        display: flex;
        justify-content: center;
      }
    }

    &__image {
      padding: rem(32px);
      width: 100%;
      height: auto;
      max-width: rem(500px);
      margin-bottom: rem(36px);
    }
  }
</style>
