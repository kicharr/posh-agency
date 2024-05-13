<script setup>

</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li>
        <NuxtLink to="/admin/artists/" class="link navigation__button navigation__button--active">К артистам</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin/projects" class="link navigation__button">К проектам</NuxtLink>
      </li>
    </ul>

    <button class="link navigation__button">Выйти</button>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: $pink;
  height: 100vh;
  max-width: 300px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  padding: 1rem 0;

  &__list {
    display: flex;
    gap: .25rem;
    flex-direction: column;
  }

  &__button {
    text-align: left;
    width: 100%;
    font-family: inherit;
    font-size: 16px;
    padding: 1rem 2rem;

    transition: all .5s linear;

    &:hover {
      background: pink;
    }

    &--active {
      background: $peach;
    }
  }
}
</style>