<script setup>
const props = defineProps(['projectData']);

</script>

<template>
  <NuxtLink :to="`projects/${projectData?.id}`" class="project-card">
    <div class="project-card__content">
      <div class="project-card__preview">
        <img :src="`/static-images/projects/${projectData?.preview}`" :alt="projectData?.name">
      </div>
      <div class="project-card__name">
        <p>{{ projectData?.name }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.project-card {
  max-width: 19.6rem;
  width: 100%;
  overflow: hidden;
  border-radius: 1.6rem;
  padding: .8rem .8rem 1.2rem .8rem;
  background: rgb(242,223,118);
  background: radial-gradient(circle, rgba(242,223,118,.2) 0%, rgba(255,190,152,.2) 100%);

  position: relative;
  z-index: 0;

  text-align: center;
  transition: all .2s ease-in-out;

  @include tablet {
    border-radius: 1.2rem;
    max-width: unset;
  }

  @include mobile-big {
    border-radius: .8rem;
  }

  &__content {
    overflow: hidden;
  }

  //&::before {
  //  content: "";
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  z-index: -1;
  //  opacity: .9;
  //  width: 100%;
  //  height: 100%;
  //  background: radial-gradient(168% 142.37% at -16.45% -25.91%,
  //      rgb(255, 190, 152) 0%,
  //      rgb(255, 255, 255) 68%);
  //}

  //&::after {
  //  content: "";
  //  position: absolute;
  //  bottom: 0;
  //  right: 0;
  //  z-index: -1;
  //  opacity: .5;
  //  width: 100%;
  //  height: 100%;
  //  background: radial-gradient(121.79% 92.62% at 107.14% 107.1%,
  //      rgb(242, 223, 118) 0%,
  //      rgb(255, 255, 255) 100%);
  //}

  &__preview {
    border-radius: 1.25rem;
    margin-bottom: .4rem;
    width: 18rem;
    height: 11rem;
    overflow: hidden;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 650px) {
      height: unset;
      border-radius: .6rem;
    }

    img {
      transition: $transitionTransform;
      height: 100%;
      width: 100%;

      @include mobile-big {
        max-width: unset;
      }
    }

    @include mobile-big {
      border-radius: .8rem;
    }
  }

  &__name {
    font-style: italic;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;

    @include tablet {
      font-size: .8rem;
    }
  }

  &:hover {
    box-shadow: 0 3px 3px $pink;

    @include tablet {
      box-shadow: none;
    }

    img {
      transform: scale(1.1);
    }
  }
}
</style>