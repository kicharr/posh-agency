<script setup>

</script>

<template>
  <div class="loader">
    <div class="loader__content">
      <img class="logotype" src="/static-images/posh-agency-logotype-white.svg" alt="Posh Agency">
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  width: 100%;
  height: 100dvh;

  background-color: $pink;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .5s ease-in-out;
}

.logotype {
  width: 500px;
}
</style>