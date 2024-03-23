<script setup>
const props = defineProps({
  currentPage: {type: String},
  neededLink: {type: Object}
});
</script>

<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <NuxtLink to="/" class="link-default breadcrumbs__link">Главная</NuxtLink>
      </li>
      <img class="breadcrumbs__image" src="/static-images/icons/breadcrumbs-arrow.svg" alt="-">
      <li class="breadcrumbs__item">
        <NuxtLink to="/artists" class="link-default breadcrumbs__link">
          Артисты
        </NuxtLink>
      </li>
      <img class="breadcrumbs__image" src="/static-images/icons/breadcrumbs-arrow.svg" alt="-">
      <li class="breadcrumbs__item">
        <p class="breadcrumbs__link  breadcrumbs__link--gray">{{ currentPage }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs {
  font-size: .8rem;
  color: $bright;
  margin-bottom: 1rem;

  @include tablet {
    font-size: .7rem;
  }

  &__list {
    display: flex;
    align-items: center;
  }

  &__link {
    &--gray {
      color: #b3b3b3;
      cursor: default;
    }
  }

  &__image {
    margin: 0 .5rem;

    max-width: .3rem;
    width: 100%;
  }
}
</style>