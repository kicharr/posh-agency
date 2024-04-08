<script setup>
const props = defineProps(['currentPhotoIndex', 'allActorPhoto']);
const emits = defineEmits(['changePhotoView']);

let currentSlide = ref(props.currentPhotoIndex);

const changePhotoView = () => emits('changePhotoView');

function checkCurrentClick(e) {
  if (e.target.localName !== 'img' && e?.target?.localName !== 'button') {
    changePhotoView();
  }
}

const changeCurrentSlide = (flag) => {
  if (flag === 'prev') {
    currentSlide.value = (currentSlide.value - 1 < 0 ? props.allActorPhoto.length - 1 : currentSlide.value - 1)
  } else {
    currentSlide.value = (currentSlide.value + 1 >= props.allActorPhoto.length ? 0 : currentSlide.value + 1)
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
    <button @click="changeCurrentSlide('prev')" class="photo-view__button photo-view__button--prev">
      <img src="/static-images/other/slider-prev.svg" alt="Назад">
    </button>

    <div class="photo-view__image">
      <img :src="`/static-images${allActorPhoto[currentSlide]}`">
    </div>

    <button @click="changeCurrentSlide('next')" class="photo-view__button photo-view__button--next">
      <img src="/static-images/other/slider-next.png" alt="Вперёд">
    </button>
  </div>


</template>

<style scoped lang="scss">
.photo-view {
  display: flex;
  background: rgba(20, 20, 20, .8);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  animation: defaultShowAnimation;

  &__image {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 38vw;
      aspect-ratio: 16 / 21;

      @media (max-width: 1024px) {
        max-width: 60vw;
      }

      @include tablet {
        max-width: unset;
      }
    }
  }

  &__button {
    transition: $transitionOpacity;
    max-width: 1.5rem;
    width: 100%;

    @include mobile-big {
      max-width: 1.5rem;
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