<script setup>
import {useProjectsStore} from "~/store/projects.js";

const route = useRoute();
const projectStore = useProjectsStore();

const projectData = projectStore.getProjectData(route?.params?.id);

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
      </div>

      <p class="project__description">{{ projectData?.description }}</p>
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
</style>