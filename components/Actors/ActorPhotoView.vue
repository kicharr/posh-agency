<script setup>
const props = defineProps(['photo', 'allActorPhoto']);
const emits = defineEmits(['changePhotoView']);

let currentSlide = ref(props.photo);
const changePhotoView = () => emits('changePhotoView');

function checkCurrentClick(e) {
  if (e.target.localName !== 'img') {
    changePhotoView();
  }
}

const changeSlide = (flag) => {
  let index = props.allActorPhoto.indexOf(currentSlide.value);

  if (flag === 'next') {
    currentSlide.value = props.allActorPhoto[index + 1] ?? currentSlide.value;
  } else {
    currentSlide.value = props.allActorPhoto[index - 1] ?? currentSlide.value;
  }
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
    <button @click="changeSlide('back')" class="photo-view__button photo-view__button--prev">
      <img src="/static-images/other/slider-prev.svg" alt="Назад">
    </button>

    <div class="photo-view__image">
      <img :src="`/static-images/actors/${currentSlide}`">
    </div>

    <button @click="changeSlide('next')" class="photo-view__button photo-view__button--next">
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
    max-width: 40vw;
    width: 100%;
    position: relative;
    top: calc(50% - 25vw);
    left: calc(50% - 20vw);


    @include mobile-big {
      max-width: 80vw;
      top: calc(50% - 55vw);
      left: calc(50% - 40vw);
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