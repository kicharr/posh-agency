<script setup>
const props = defineProps(['currentPhotoIndex', 'allActorPhoto']);
const emits = defineEmits(['changePhotoView']);

let currentSlide = ref(props.currentPhotoIndex);

const changePhotoView = () => emits('changePhotoView');

function checkCurrentClick(e) {
  if (e.target.localName !== 'img') {
    changePhotoView();
  }
}

const goPrevSlide = () => {
  currentSlide.value > 0 ? currentSlide.value-- : currentSlide.value = props.allActorPhoto.length - 1
}

const goNextSlide = () => {
  currentSlide.value < props.allActorPhoto.length - 1 ? currentSlide.value++ : currentSlide.value = 0
}


onMounted(() => {
  document.addEventListener('click', checkCurrentClick);
  document.body.classList.add('body-fixed');
})


onUnmounted(() => {
  document.removeEventListener('click', checkCurrentClick);
  document.body.classList.remove('body-fixed');
})

</script>

<template>
  <div class="photo-view">
    <button @click="goPrevSlide" class="photo-view__button photo-view__button--prev">
      <img src="/static-images/other/slider-prev.svg" alt="Назад">
    </button>

    <div class="photo-view__image">
      <img :src="`/static-images/${allActorPhoto[currentSlide]}`">
    </div>

    <button @click="goNextSlide" class="photo-view__button photo-view__button--next">
      <img src="/static-images/other/slider-next.png" alt="Вперёд">
    </button>
  </div>


</template>

<style scoped lang="scss">
.photo-view {
  background: rgba(20, 20, 20, .8);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  animation: defaultShowAnimation;

  &__image {
    max-width: 35vw;
    width: 100%;
    position: relative;
    top: calc(50% - 32vh);
    left: calc(50% - 20vw);

    @include laptop {
      max-width: 50vw;
      top: calc(50% - 34vw);
      left: calc(50% - 25vw);
    }

    @include tablet {
      max-width: 70vw;
      top: calc(50% - 45vw);
      left: calc(50% - 33vw);
    }

    @include mobile-big {
      max-width: 100%;
      top: calc(50% - 16vh);
      left: 0;
    }
  }

  &__button {
    position: absolute;
    top: calc(50% - 1.5rem);
    z-index: 10;
    transition: $transitionOpacity;

    @include mobile-big {
      max-width: 1.5rem;
    }

    &--prev {
      left: 2.5rem;

      @include tablet {
        left: 0.5rem;
      }

      @include mobile-small {
        left: 0.1rem;
      }
    }

    &--next {
      right: 2.5rem;

      @include tablet {
        right: 0.5rem;
      }

      @include mobile-small {
        right: 0.1rem;
      }
    }

    &:hover {
      opacity: .5;

      @include tablet {
        opacity: 1;
      }
    }

    &:active {
      opacity: .5;
    }
  }
}
</style>