<template>
  <div class="modal-container" v-if="value">

    <div class="modal" :class="styleClass">
      <h1 class="modal__title">{{ title }} </h1>
      <p class="modal__subtitle text-center" v-if="subtitle">{{ subtitle }} </p>
      <div class="modal__content">
        <slot />
      </div>
      <div class="modal__actions">
        <template v-for="(action, idx) of actions">
          <router-link
            v-if="action.to"
            class="modal__btn"
            :class="[
              {'modal__btn--close': action.closable }
            ]"
            :to="action.to"
            :key="idx"
          >
            {{ action.label }}
          </router-link>
          <button
            v-if="action.click"
            class="modal__btn"
            :id="action.id"
            :class="[
              {'modal__btn--close': action.closable },
              action.styleClass
            ]"
            @click="action.click"
            :key="idx"
          >
            {{ action.label }}
          </button>

        </template>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    submitText: {
      type: String,
      default: 'Continuar',
    },
    closeText: {
      type: String,
      default: 'Sair',
    },
    value: {
      type: Boolean,
      default: () => false,
    },
    styleClass: [String, Object, Array],
    actions: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main';

  @mixin button ($color) {
    border: 1px solid colors($color);
    color: colors($color);
    font-weight: bold;

    &:hover {
      background: colors($color);
      color: white;
    }
  }

  .modal-container {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    background: rgba(64, 64, 64, 0.603);
    justify-content: baseline;
    align-items: center;
    z-index: 3;
  }

  .modal {
    background: colors('white');
    max-width: rem(400px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    padding: rem(24px);
    border-radius: rem(8px);
    box-shadow: 0 0 rem(8px) rem(-5px) rgba(0,0,0,0.75);

    @include xsOnly {
      max-width: rem(280px);
    }

    &__title {
      margin: 0 0 rem(8px) 0;
      text-align: center;
      color: colors('grey')
    }

    &__content {
      margin: rem(24px) 0;
      color: colors('grey');

      form {
        display: flex;
        flex-flow: column nowrap;

        input {
          padding: rem(8px);
        }
      }
      label, input {
        margin-bottom: rem(8px);
      }
    }

    &__actions {
      margin-top: auto;
      padding-top: rem(24px);
      border-top: rem(1px) solid lighten(colors('grey'), 60%);
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      @include mdAndUp {
        flex-direction: row;
      }
    }

    &__btn {
      padding: rem(8px) rem(32px);
      border-radius: rem(4px);
      background: transparent;
      text-decoration: none;
      text-align: center;
      margin: rem(4px);

      @include button('primary');

      &--close {
        @include button('error');
      }
    }
  }
</style>
