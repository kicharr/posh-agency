<script setup lang="ts">
const props = defineProps(['videoId']);
const emits = defineEmits(['changeTrailerViewVissible']);

const changeTrailerViewVissible = () => emits('changeTrailerViewVissible');

onBeforeMount(() => {
  document.body.classList.add('body-fixed');
})

onBeforeUnmount(() => {
  document.body.classList.remove('body-fixed');
})
</script>

<template>
  <div class="trailer" @click="changeTrailerViewVissible">

    <iframe :src="`https://www.youtube.com/embed/${videoId}`"
            width="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>

  </div>
</template>

<style scoped lang="scss">
.trailer {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background: rgba(0, 0, 0, .5);
}

iframe {
  max-width: 50vw;
  aspect-ratio: 16 / 9;
  outline: none;
  border: none;

  @include laptop {
    max-width: 90vw;
  }
}
</style>