<template>
<section>
  <div class="text-center presentation">
    <h1 class="presentation__title">
      Obliviate!
    </h1>
    <p class="presentation__subtitle">
      O Jogo da Memória
    </p>
    <img
      class="presentation__image"
      :src="require('@/assets/images/obliviate-card-game.svg')"
    />
    <div class="presentation__btns">
      <router-link
        :to="{ name: 'game.play' }"
        class="presentation__startgame"
      >
        Jogar Agora
      </router-link>
    </div>
  </div>
  <div class="text-center">
    <router-link :to="{ name: 'game.ranking' }" class="ranking-link">
      Hall da Fama
    </router-link>
  </div>
</section>
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

    &__btns {
      display: flex;
      justify-content: center;
    }

    &__title {
      font-size: rem(64px);
      color: colors('primary');
      font-weight: 300;
      margin-bottom: 0;
    }

    &__subtitle {
      font-size: rem(22px);
      margin-top: 0;
      text-transform: uppercase;
      color: colors('secondary');
      letter-spacing: rem(3px);
    }

    &__startgame {
      background: colors('secondary');
      color: colors('white');
      font-weight: bold;
      font-size: rem(24px);
      padding: rem(24px) rem(36px);
      text-decoration: none;
      border-radius: rem(4px);
      transition: all 0.3s ease;

      @include smAndUp {
        max-width: 300px;
        min-width: 300px;
      }

      &:hover {
        $color: colors('secondary');
        background: darken($color, 10%);
      }
    }

    &__image {
      width: 100%;
      height: auto;
      max-width: rem(500px);
      margin-bottom: rem(36px);

      @include lgAndUp {
        padding: rem(32px);
      }
    }
  }
  .ranking-link {
    margin-top: rem(24px);
    padding: rem(16px);
    text-decoration: none;
    color: colors('accent');
    font-weight: bold;
    font-size: rem(22px);
    transition: all 0.3s ease;

    &:hover {
      font-size: rem(28px);
    }
  }
</style>
