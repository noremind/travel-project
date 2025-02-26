<template>
  <header class="header">
    <div class="header__wrapper">
      <nuxt-link class="header__link" to="/">
        <img class="header__logo" src="" alt="Logo" />
      </nuxt-link>

      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-item" v-for="list in navList" :key="list">
            <nuxt-link :to="list.link" class="header__list-link"
              ><p class="header__list-text">{{ list.name }}</p></nuxt-link
            >
          </li>
        </ul>
      </nav>

      <div></div>
    </div>
  </header>
</template>

<script setup>
const navList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Tour Packages",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
];
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    height: 100px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    margin: auto 0;
  }
  &__list {
    display: flex;
    gap: 24px;
    align-items: center;
    &-item {
      cursor: pointer;
      font-size: 14px;
    }
    &-link {
      color: white;
    }
  }
}
</style>
