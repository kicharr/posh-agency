<script setup>
import {useArtistsStore} from "~/store/artists.js";

const artistsStore = useArtistsStore();

const artistsList = artistsStore.artistsList;

definePageMeta({
  layout: "project-layout"
})
</script>

<template>
  <main class="main">
    <section class="artists section container">
      <div class="section__heading">
        <h1 class="title-h1">Артисты</h1>
      </div>
      <div class="artists__content">
        <div class="artists__list">
          <ArtistCard
              v-for="(artist, index) in artistsList"
              :key="index"
              :artistData="artist"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">

</style>