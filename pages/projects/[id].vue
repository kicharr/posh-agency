<script setup>
import {useProjectsStore} from "~/store/projects/projects.js";
import TrailerView from "~/components/Projects/TrailerView.vue";

const route = useRoute();

const projectStore = useProjectsStore();

const trailerIsVissible = ref(false);

const projectData = projectStore.getProjectData(route?.params?.id);

function changeTrailerViewVissible() {
  trailerIsVissible.value = !trailerIsVissible.value;
}

definePageMeta({
  layout: "project-layout"
})
</script>

<template>
  <main class="main">
    <section class="project section container">
      <h1 class="project__title title-h1">{{ projectData?.name }}</h1>

      <div class="project-video">

        <img class="project__preview" :src="`/static-images/projects/${projectData?.preview}`"
             :alt="`Превью для проекта - ${projectData?.name}`">

        <button v-if="projectData?.videoPath" class="project-video__play" @click="changeTrailerViewVissible">
          <img src="/static-images/other/play-button.svg" alt="Play button">
        </button>

        <TrailerView v-if="trailerIsVissible" :video-id="projectData?.videoPath"
                     @changeTrailerViewVissible="changeTrailerViewVissible"/>
      </div>

      <a v-if="projectData?.kinopoisk" class="link project-video__link" :href="projectData?.kinopoisk">
        подробнее
      </a>
    </section>
  </main>
</template>

<style scoped lang="scss">
.project {
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  margin: 3rem auto;

  @include mobile-big {
    gap: 1.5rem;
  }

  &__preview {
    max-width: 40rem;
    width: 100%;
    margin: 0 auto;
    border-radius: 0.8rem;
    overflow: hidden;

    &--play {
      position: absolute;
      top: 0;
      left: 0;

      max-width: 5rem;
      width: 100%;
    }
  }

  &__title {
    text-align: center;
    font-style: italic;
    font-weight: 600;
    font-size: 1.6rem;
    text-transform: uppercase;

    @include tablet {
      font-size: 1.4rem;
    }
  }

  &__description {
    font-size: .9rem;
    text-align: center;

    @include tablet {
      font-size: .8rem;
    }
  }
}

.project-video {
  position: relative;

  &__play {
    position: absolute;

    top: calc(50% - 2rem);
    left: calc(50% - 2rem);

    max-width: 4rem;
    width: 100%;
    cursor: pointer;

    transition: opacity .5s ease-in-out;
    padding: 0;

    @include mobile-big {
      max-width: 3rem;

      top: calc(50% - 1.5rem);
      left: calc(50% - 1.5rem);
    }

    &:hover {
      opacity: .6;
    }
  }

  &__link {
    display: inline-block;
    text-align: center;
    text-decoration: underline;
  }
}
</style>