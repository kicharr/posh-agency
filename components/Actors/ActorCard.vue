<script setup>
import {getBestFilms} from "~/lib/utilities.js";

const props = defineProps(['actorData']);


</script>

<template>
  <div class="actor-card">
    <div class="actor-card__preview">
      <img src="/static-images/actors/actor-circle-test.png" alt="Слава Копейкин">
      <div class="actor-info actor-info--mobile">
        <h3 class="actor-card__title">{{ actorData?.commonFeatures?.name }}</h3>
        <span class="actor-card__text actor-card__text--blue">Актёр кино</span>
      </div>
    </div>

    <div class="actor-card__info">

      <div class="actor-info actor-info--desktop">
        <h3 class="actor-card__title">{{ actorData?.commonFeatures?.name }}</h3>
        <span class="actor-card__text actor-card__text--blue">Актёр кино</span>
      </div>

      <p class="actor-card__text actor-card__text">{{ getBestFilms(actorData?.filmography) }}</p>
      <NuxtLink :to="`actors/${actorData?.id}`" class="actor-card__link">
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

    @include laptop {
      max-width: 7.5rem;
    }

    @include tablet {
      max-width: 6rem;
    }

    @include mobile-big {
      display: flex;
      gap: 1rem;
      align-items: center;
      max-width: unset;

      img {
        max-width: 5rem;
      }
    }

    @include mobile-small {
      max-width: 100%;
    }

    &--mobile {
      display: none;

      @include tablet {
        display: flex;
      }
    }
  }

  &__title {
    font-style: italic;
    font-weight: 600;
    font-size: 1.1rem;

    margin-bottom: 0.75rem;

    @include laptop {
      font-size: 1rem;
    }

    @include tablet {
      font-size: .9rem;
    }
  }

  &__text {
    color: $dark;
    margin-bottom: 1rem;
    font-size: .8rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    &--blue {
      display: inline-block;
      color: #4e8aff;
      margin-bottom: .25rem;
    }

    @include mobile-big {
      font-size: 0.7rem;
    }
  }

  &__link {
    display: inline-block;
    border-radius: 0.75rem;
    padding: 0.5rem;
    font-size: .9rem;
    background-color: $peach;

    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: #fa9962;
    }

    @include laptop {
      font-size: .8rem;
    }

    @include mobile-big {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.7rem;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
    margin-left: auto;

    a {
      background-color: $pink;

      &:hover {
        background-color: #ec6494;
      }
    }

    @include mobile-big {
      flex-direction: column;
    }

    .actor-card__preview {
      flex-direction: row-reverse;
    }
  }

  @include mobile-big {
    flex-direction: column;
    align-items: stretch;
  }
}


.actor-info {
  &--desktop {
    display: block;

    @include mobile-big {
      display: none;
    }
  }

  &--mobile {
    display: none;
    @include mobile-big {
      display: block;
    }
  }
}
</style>