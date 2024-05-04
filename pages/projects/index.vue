<script setup>
import ProjectCard from "~/components/Projects/ProjectCard.vue";
import {useProjectsStore} from "~/store/projects/projects.js";

const projectsStore = useProjectsStore();

const projectsList = projectsStore?.projectsList;

const projectName = ref('');

const filtredProjectsList = computed(() => {
  return projectsList?.filter((project) => project?.name.match(new RegExp(projectName.value, 'gi')))
});

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
          <h1 class="title-h1 projects-heading__title">Все работы</h1>
        </div>
      </div>

      <div class="search-elements container">

        <div class="search-item">
          <input v-model="projectName" placeholder="Название проекта" class="search-item__input">
        </div>
      </div>

      <div class="projects-content">
        <p v-if="!filtredProjectsList?.length" class="projects__error-message">
          Упс.. Не получилось найти проект.
        </p>
        <div class="projects__list container">
          <transition-group name="list">
            <ProjectCard
                v-for="(project, index) in filtredProjectsList"
                :key="index"
                :projectData="project"
            />
          </transition-group>
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

    @media (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__error-message {
    text-align: center;
    font-size: .9rem;
    padding: 5rem 0;

    @include tablet {
      font-size: .8rem;
    }

    @include mobile-small {
      font-size: .7rem;
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

.search-elements {
  margin: 2rem auto;
}

.search-item {
  &__input {
    width: 100%;
    border: 1px solid #000;
    border-radius: 1.6rem;
    padding: .8rem 1.6rem;

    font-size: 0.9rem;
    color: #6d6d6d;

    @include mobile-big {
      padding: .4rem .7rem;
      font-size: .8rem;
    }
  }

}
</style>