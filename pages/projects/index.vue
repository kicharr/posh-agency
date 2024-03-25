<script setup>
import ProjectCard from "~/components/Projects/ProjectCard.vue";
import {useProjectsStore} from "~/store/projects.js";

const projectsStore = useProjectsStore();

const projectsList = projectsStore?.projectsList;

useHead({
  title: `Проекты - posh.agency`,
  meta: [
    {
      name: 'description',
      content: `Рекламные и кино проекты реализованные posh-agency. Звоните сейчас: + 7 (917) 545-20-84`
    }
  ]
})

definePageMeta({
  layout: "project-layout"
})
</script>

<template>
  <main class="main">
    <section class="projects section">
      <div class="projects-heading">
        <div class="section__heading container">
          <h1 class="title-h1 projects-heading__title">Проекты</h1>
        </div>
      </div>

      <div class="projects-content ">
        <div class="projects__list container">
          <ProjectCard
              v-for="(project, index) in projectsList"
              :key="index"
              :projectData="project"
          />
        </div>
      </div>

    </section>
  </main>
</template>

<style scoped lang="scss">
.projects {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem .47rem;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile-big {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

.projects-heading {
  background: center / cover no-repeat url("/static-images/hero-bg.png");
  margin-top: 4rem;

  &__title {
    color: $bright;
    padding: 4rem 0;
  }
}

</style>