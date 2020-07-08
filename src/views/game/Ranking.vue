<template>
  <div class="container">
    <div class="text-center">
      <img
        class="ranking__image"
        :src="require('@/assets/images/winners.svg')"
      />
      <h1 class="ranking__title"> Hall da Fama </h1>
      <p>
          Seja bem-vindo aos melhores jogadores de <strong> Obliviate</strong>! <br>
          Aqui estão os mestres dos feitiços da memória.
      </p>
    </div>
    <div class="ranking">
      <ol v-if="topPlayers.length > 0" class="ranking__list">
        <li v-for="(player, idx) of topPlayers" :key="idx" class="ranking__item">
          <span> {{ player.player | 'Sem nome'}} </span>
          <small> ({{ player.rounds | 0 }}) </small>
        </li>
      </ol>
      <p v-else class="info-message">
        Não existe partidas realizadas até o momento!
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('ranking', [
      'topPlayers',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';

  .container {
    display: flex;
    margin:  auto;
    max-width: rem(1280px);

    @include xsOnly {
      flex-flow: column wrap;
    }

    & div {
      @include smAndUp {
        width: 50%;
      }
      padding: rem(16px);
    }
  }

  .info-message {
    border: rem(1px) solid colors('secondary');
    background: colors('secondary');
    color: colors('white');
    border-radius: rem(8px);
    padding: rem(32px);
    text-align: center;
    font-weight: bold;
  }
</style>

<style lang="scss">
@import '../../assets/scss/main';

  @mixin topPlayer ($bgcolor, $textcolor) {
    background: $bgcolor;
    span {
      color: $textcolor;
      font-weight: bold;
    }
  }
  .ranking {
    padding: rem(24px);

    &__image {
      height: auto;
      width: 100%;
    }

    &__title {
      color: colors('primary');
      font-size: rem(36px);
      letter-spacing: rem(4px);
      margin-bottom: rem(24px);
    }

    &__list {
      font-size: rem(32px);
    }
    &__item {
      font-weight: bold;
      margin-bottom: rem(16px);
      padding: rem(8px);
      border-radius: rem(8px);

      span, small {
        font-weight: lighter;
      }

      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          background-color: lighten(colors('accent'), $i * 10%);
          span {
            color: colors('primary');
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
