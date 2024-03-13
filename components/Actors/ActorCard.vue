<script setup lang="ts">
const props = defineProps(['actorData']);

</script>

<template>
  <div class="actor-card">
    <div class="actor-card__preview">
      <img src="/static-images/actors/actor-circle-test.png" alt="Слава Копейкин">
    </div>
    <div class="actor-card__info">
      <h3 class="actor-card__title">Слава Копейкин</h3>
      <span class="actor-card__text actor-card__text--blue">Актёр кино</span>
      <p class="actor-card__text actor-card__text">Лучшие фильмы: Слово пацана. Кровь на асфальте, Трудные подростки,
        Стрим.</p>
      <NuxtLink class="actor-card__link">
        Посмотреть подробную инфомарцию
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#141414"/>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.actor-card {
  display: flex;
  gap: 1rem;
  align-items: center;

  max-width: 33.55rem;
  width: 100%;

  &__preview {
    max-width: 8.7rem;
    width: 100%;
    border-radius: 50%;
  }

  &__title {
    font-style: italic;
    font-weight: 600;
    font-size: 1.1rem;

    margin-bottom: 0.75rem;
  }

  &__text {
    color: $dark;
    margin-bottom: 1rem;
    font-size: .8rem;

    &--blue {
      display: inline-block;
      color: #4e8aff;
      margin-bottom: .25rem;
    }
  }

  &__link {
    display: inline-block;
    border-radius: 0.75rem;
    padding: 0.5rem;
    font-size: .9rem;
    background-color: $peach;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
    margin-left: auto;
  }
}
</style>