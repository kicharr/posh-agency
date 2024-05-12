<script setup>
const props = defineProps(['partnersList']);

</script>

<template>
  <div class="partners-list">
    <div v-for="(partner, index) in partnersList" :key="index" class="partners-item">
      <span v-if="false">{{ partner?.title }}</span>
      <img class="partners-item__preview" :src="partner?.logotype" :alt="partner?.alt">
    </div>
  </div>
</template>

<style scoped lang="scss">
.partners-list {
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    //justify-content: center;
    padding: 0 16px;
  }
}

.partners-item {
  &__preview {
    max-width: 500px;
    width: 100%;

    @include mobile-big {
      max-width: 150px;
    }
  }
}
</style>