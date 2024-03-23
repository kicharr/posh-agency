<script setup>
import {useArtistsStore} from "~/store/artists.js";
import ArtistCardFullView from "~/components/Artists/ArtistCardFullView.vue";

const artistsStore = useArtistsStore();

const artistsList = artistsStore.artistsList;

const currentFilter = ref('all')

const filterArtistsList = computed(() => {
  return artistsList?.filter(artist => currentFilter.value !== 'all' ? artist?.category === currentFilter.value : true);
})

definePageMeta({
  layout: "project-layout"
})
</script>

<template>
  <main class="main">
    <section class="artists section">
      <div class="artists-heading">
        <div class="section__heading container">
          <h1 class="title-h1 artists-heading__title">Артисты</h1>
        </div>
      </div>

      <div class="search-elements container">
        <div class="search-item">
          <input placeholder="Введите имя артиста" class="search-item__input">
        </div>
        <div class="search-item">
          <ul class="search-item__buttons">
            <li>
              <button
                  @click="currentFilter = 'all'"
                  class="button button--tab"
                  :class="{'button--tab-active': currentFilter === 'all'}"
              >
                Все
              </button>
            </li>
            <li>
              <button
                  @click="currentFilter = 'actor'"
                  class="button button--tab"
                  :class="{'button--tab-active': currentFilter === 'actor'}"
              >
                Актеры
              </button>
            </li>
            <li>
              <button
                  @click="currentFilter = 'actresses'"
                  class="button button--tab"
                  :class="{'button--tab-active': currentFilter === 'actresses'}"
              >
                Актрисы
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="artists__content container">
        <div class="artists__list">
          <ArtistCardFullView
              v-for="(artist, index) in filterArtistsList"
              :key="index"
              :artistData="artist"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.artists {

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1rem;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem .5rem;
    }

    @include mobile-big {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem .5rem;
    }
  }
}

.artists-heading {
  background: center / cover no-repeat url("/static-images/hero-bg.png");
  margin-top: 4rem;

  &__title {
    color: $bright;
    padding: 4rem 0;
  }
}

.search-elements {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto 4rem;

  @include tablet {
    flex-direction: column;
    gap: 1rem;
  }

  @include mobile-big {
    margin: 2rem auto;
  }
}

.search-item {

  &__buttons {
    display: flex;
    gap: 1.25rem;
  }

  &__input {
    width: 20rem;
    border: 1px solid #000;
    border-radius: 1.6rem;
    padding: .8rem 1.6rem;

    font-size: 0.9rem;
    color: #6d6d6d;

    @include tablet {
      width: 100%;
    }

    @include mobile-big {
      padding: .4rem .7rem;
      font-size: .8rem;
    }
  }

  @include tablet {
    width: 100%;
  }
}


</style>