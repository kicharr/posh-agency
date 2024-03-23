<script setup>
import {getBestFilms} from "~/lib/utilities.js";

const props = defineProps(['artistData']);
</script>

<template>
  <NuxtLink :to="`/artists/${artistData?.id}`" class="artist-card">
    <div class="artist-card__preview">
      <img :src="`/static-images/${artistData?.commonFeatures?.photo}`" :alt="`${artistData?.commonFeatures?.name}`">
    </div>

    <div class="artist-card__info">
      <div class="artist-info artist-info--desktop">
        <h3 class="artist-card__title">{{ artistData?.commonFeatures?.name }}</h3>
        <span class="artist-card__text artist-card__text--blue">Актёр кино</span>
      </div>

      <p class="artist-card__text artist-card__text">{{ getBestFilms(artistData?.filmography) }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.artist-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  animation: defaultShowAnimation;

  max-width: 33.55rem;
  width: 100%;

  &__preview {
    max-width: 19.35rem;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }

  &__info {
    width: 100%;
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 0.75rem;
    padding: 0.5rem;
    width: 100%;
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
    .artist-card {
      &__link {
        background-color: $pink;
      }
    }
  }

  img {
    transition: $transitionTransform;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

</style>