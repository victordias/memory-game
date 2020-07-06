<template>
  <div class="navbar">
    <a href="/" class="navbar__brand">
      <img
        v-if="image"
      :src="image"
      class="navbar__image"
      />

      <h1
        v-if="title"
        class="navbar__title"
      >
        {{ title }}
      </h1>
    </a>

    <nav class="navbar__links">
      <ul>
        <li v-for="(link, idx) of links" :key="idx">
          <router-link
            class="navbar__link"
            :class="link.styleClass"
            v-text="link.title"
            :to="link.to"
            exact-active-class="navbar__link--active"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables';
@import '../../assets//scss//utils';

  .navbar {
    display: inline-flex;
    padding: rem(12px) rem(24px);
    background: $primary-color;
    width: 100%;
    height: $navbar-height;
    align-items: center;
    box-sizing: border-box;

    &__brand {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      &:visited {
        color: $info-color;
      }
    }

    &__title {
      font-size: $navbar-height / 3;
      color: $info-color;
      font-weight: bold;
      margin: 0 rem(12px);
    }

    &__image {
      height: $navbar-height/1.2;
      background-size: contain;
    }

    &__links {
      margin-left: auto;
      ul {
        list-style: none;
        margin: 0;

         li {
           display: inline-block;
           margin: 0 rem(2px);
         }
      }
    }

    &__link {
      text-decoration: none;
      color: #ffffff;
      padding: rem(12px) rem(24px);
      border-radius: rem(4px);

      &:visited {
        color: #ffffff;
      }
      &--active {
        font-weight: bold;
        background: $info-color;
      }
    }
  }
</style>
