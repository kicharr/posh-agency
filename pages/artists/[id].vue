<script setup>
import {useArtistsStore} from "~/store/artists.js";
import {getBestFilms} from "~/lib/utilities.js";
import Breadcrumbs from "~/components/GlobalComponents/Breadcrumbs.vue";
import ArtistsPhotoView from "~/components/Artists/ArtistPhotoView.vue";

const route = useRoute();
const artistStore = useArtistsStore();

const artistData = artistStore.getArtistData(route?.params?.id);

const isAllFilmographyVissible = ref(false);

const photoViewActive = ref(false);

let currentPhotoView = ref('');
// const sortedFilmsByYear = (filmography) => {
//   let sortedFilmography = {};
//   for (let i = 0; i < filmography.length; i++) {
//     if (!sortedFilmography[filmography[i]?.year]) {
//       sortedFilmography[filmography[i]?.year] = [filmography[i]?.name];
//     } else {
//       sortedFilmography[filmography[i]?.year].push(filmography[i]?.name);
//     }
//   }
//   return sortedFilmography;
// }
const sortedFilmsByYear = (filmography) => {
  const newFilmography = new Map();

  filmography.forEach((item) => {
    if (!newFilmography.has(item?.year)) {
      newFilmography.set(item?.year, []);
      newFilmography.get(item?.year).push(item?.name)
    } else {
      newFilmography.get(item?.year).push(item?.name)
    }
  })

  return newFilmography;
}


const getArtistPhoto = (str) => {
  if (!str) return `background: center / cover no-repeat url("/static-images/artists/actor-photo-none.png");`
  return `background: center / cover no-repeat url('/static-images/artists${str}');`
}
const changeFilmographyVissible = () => isAllFilmographyVissible.value = !isAllFilmographyVissible.value;

const changePhotoView = (photo) => {
  currentPhotoView.value = artistData?.commonFeatures?.photos.indexOf(photo);
  photoViewActive.value = !photoViewActive.value;
}

function checkFilmographyLength(filmography) {
  if (filmography?.length <= 2) return filmography;

  return filmography.filter((item) => item?.type === 'best');
}

useHead({
  title: `${artistData?.commonFeatures?.name} - posh.agency`,
  meta: [
    {
      name: 'description',
      content: `Информация об артисте ${artistData?.commonFeatures?.name}, фотографии и фильмография. Звоните сейчас: + 7 (917) 545-20-84`
    }
  ]
})

definePageMeta({
  layout: "landing-layout"
})
</script>

<template>
  <main class="main">
    <section class="actor-hero section" :style="getArtistPhoto(artistData?.preview)">
      <div class="actor-hero-content container">
        <div class="actor-hero__information">
          <Breadcrumbs :currentPage="artistData?.commonFeatures?.name"/>
          <h1 class="actor-hero-content__title">{{ artistData?.commonFeatures?.name }}</h1>
          <div class="actor-hero-content__description">
            <span class="actor-hero-content__text actor-hero-content__text--blue">Актёр кино</span>
            <p class="actor-hero-content__text">Дата рождения — {{ artistData?.commonFeatures?.dateBirth }}</p>
            <p v-if="getBestFilms(artistData?.filmography)"
               class="actor-hero-content__text actor-hero-content__text--films">
              Лучшее: {{ getBestFilms(artistData?.filmography) }}</p>
          </div>
        </div>

        <div class="actor-hero__links">
          <a v-if="artistData?.additionalInformation?.kinoteatrLink"
             :href="artistData?.additionalInformation?.kinoteatrLink" target="_blank">
            <img class="actor-link" src="/static-images/artists/kino-teatr.svg" alt="Ссылка на страницу кинотеатра">
          </a>
          <a v-if="artistData?.additionalInformation?.kinopoiskLink"
             :href="artistData?.additionalInformation?.kinopoiskLink" target="_blank">
            <img class="actor-link" src="/static-images/artists/kinopoisk.svg" alt="Ссылка на страницу кинопоиска">
          </a>
        </div>
      </div>

    </section>

    <section class="actor-info section container">

      <h2 class="title-h2 actor-info__title">
        <span>об</span>
        <span>актёре</span>
      </h2>

      <div class="info">
        <h3 class="title-h3 info__title"><span>Физиологические</span> признаки</h3>


        <div class="info-content info-content__main">


          <div v-if="artistData?.commonFeatures?.growth" class="info-content__item">
            <span class="info-content__title">Рост</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.growth }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.weight" class="info-content__item">
            <span class="info-content__title">Вес</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.weight }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.clothingSize" class="info-content__item">
            <span class="info-content__title">Размер одежды</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.clothingSize }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.shoeSize" class="info-content__item">
            <span class="info-content__title">Размер обуви</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.shoeSize }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.eyes" class="info-content__item">
            <span class="info-content__title">Цвет глаз</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.eyes }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.voice" class="info-content__item">
            <span class="info-content__title">Тембр голоса</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.voice }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.type" class="info-content__item">
            <span class="info-content__title">Тип</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.type }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.vocal" class="info-content__item">
            <span class="info-content__title">Вокал</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.vocal.join(', ') }}</p>
          </div>


        </div>
      </div>

      <div class="info">
        <h3 class="title-h3 info__title"><span>Дополнительная</span> информация</h3>
        <div class="info-content info-content__additional">


          <div v-if="artistData?.additionalInformation?.nationality" class="info-content__item">
            <span class="info-content__title">Гражданство</span>
            <p class="info-content__text">{{ artistData?.additionalInformation?.nationality }}</p>
          </div>


          <div v-if="artistData?.additionalInformation?.city" class="info-content__item">
            <span class="info-content__title">Город</span>
            <p class="info-content__text">{{ artistData?.additionalInformation?.city }}</p>
          </div>


          <div v-if="artistData?.additionalInformation?.skills" class="info-content__item">
            <span class="info-content__title">Навыки</span>
            <p class="info-content__text">{{ artistData?.additionalInformation?.skills.join(', ') }}</p>
          </div>


          <div v-if="artistData?.additionalInformation?.driving" class="info-content__item">
            <span class="info-content__title">Вождение</span>
            <p class="info-content__text">{{ artistData?.additionalInformation?.driving }}</p>
          </div>


          <div v-if="artistData?.commonFeatures?.foreignLanguages" class="info-content__item">
            <span class="info-content__title">Иностранные языки</span>
            <p class="info-content__text">{{ artistData?.commonFeatures?.foreignLanguages.join(', ') }}</p>
          </div>


          <div v-if="artistData?.additionalInformation?.moreInfo" class="info-content__item info-content__item--fill">
            <span class="info-content__title">Дополнительная информация</span>
            <p class="info-content__text">{{ artistData?.additionalInformation?.moreInfo.join('; ') }}</p>
          </div>


          <div v-if="artistData?.additionalInformation?.tvWork" class="info-content__item info-content__item--fill">
            <span class="info-content__title">Работа на TV и Радио</span>
            <p class="info-content__text">{{ artistData?.additionalInformation?.tvWork.join('; ') }}</p>
          </div>


          <div v-if="artistData?.additionalInformation?.externalFeatures" class="info-content__item">
            <span class="info-content__title">Внешние особенности</span>
            <p class="info-content__text">{{ artistData?.additionalInformation?.externalFeatures }}</p>
          </div>


        </div>
      </div>
    </section>

    <section class="filmography section container">
      <div class="section__heading">
        <h2 class="title-h2 actor-info__title filmography__title">
          <span>
            фильмография
          </span>
        </h2>
      </div>
      <div class="info">
        <h3 class="title-h3 info__title filmography__subtitle"><span>Популярные</span></h3>
        <ul class="list-default filmography__list">

          <li v-for="(film, index) in checkFilmographyLength(artistData?.filmography)" :key="index"
              class="filmography__item">
            <p>
              {{ film?.name }}
            </p>
          </li>
        </ul>

        <div v-if="isAllFilmographyVissible" class="full-filmography">
          <hr class="full-filmography__separator">

          <div v-for="(filmsForYear, index) in sortedFilmsByYear(artistData?.filmography)" :key="index"
               class="filmography-year__wrapper">

            <button class="filmography-year__button">
              <img src="/static-images/peach-rectangle.svg" alt="•">
              {{ filmsForYear[0] }}
            </button>

            <ul class="list-default">
              <li v-for="(item, index) in filmsForYear[1]" :key="index" class="filmography-year__item">
                {{ item }}
              </li>
            </ul>

          </div>

        </div>

        <button @click="changeFilmographyVissible" class="button filmography__button">
          {{ !isAllFilmographyVissible ? 'Смотреть все проекты' : 'Скрыть' }}
        </button>
      </div>
    </section>

    <section class="photos section container">
      <div class="photos__grid">
        <div v-for="(photo, index) in artistData?.commonFeatures?.photos" :key="index" class="photos__item">
          <button @click="changePhotoView(photo)" class="photo-button">
            <img :src="`/static-images${photo}`" :alt="`Фото - ${index + 1} ${artistData?.commonFeatures?.name}`">
          </button>
        </div>
      </div>
      <ArtistsPhotoView v-if="photoViewActive" :currentPhotoIndex="currentPhotoView"
                        :allActorPhoto="artistData?.commonFeatures?.photos" @changePhotoView="changePhotoView"/>
    </section>

    <section v-if="artistData?.commonFeatures?.vizitingCard" class="visiting-card section container">
      <div class="section__heading">
        <h2 class="title-h2 actor-info__title visiting-card__title">
          <span>
            ВИЗИТКА
          </span>
        </h2>
      </div>

      <div class="viziting-card__content">
        <iframe :src="artistData?.commonFeatures?.vizitingCard"
                width="100%"
                height="600"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
        </iframe>
      </div>

    </section>
  </main>
</template>

<style scoped lang="scss">
.actor-hero {
  position: relative;
  background: rgba(0, 0, 0, .5);

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
}

.actor-hero-content {
  padding: 24rem .5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 5;

  @include mobile-big {
    padding-top: 10rem;
  }

  &__title {
    font-style: italic;
    font-weight: 600;
    font-size: 4.2rem;
    color: $bright;
    margin-bottom: 1.5rem;

    @include laptop {
      font-size: 3.2rem;
    }

    @include tablet {
      font-size: 2.8rem;
    }

    @include mobile-big {
      font-size: 1.8rem;
    }
  }

  &__text {
    color: $bright;
    margin-bottom: .5rem;

    @include mobile-big {
      font-size: .8rem;
    }

    &--blue {
      display: inline-block;
      color: #4e8aff;
    }

    &--films {
      max-width: 30rem;
      font-size: 0.9rem;

      @include mobile-big {
        font-size: .7rem;
      }
    }
  }

  @include tablet {
    flex-direction: column;
    align-items: unset;
  }
}

.actor-hero {
  &__links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include tablet {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__information {
    @include tablet {
      margin-bottom: 2.5rem;
    }
  }
}

.actor-link {
  max-width: 13.75rem;
  width: 100%;

  @include laptop {
    max-width: 11.2rem;
  }

  @include tablet {
    max-width: 10rem;
  }

  @include mobile-big {
    max-width: 7.5rem;
  }
}

.actor-info {

  &__title {
    text-transform: uppercase;

    span {
      &:first-child::before {
        content: none;
      }

      &:last-child {
        font-weight: 400;
        font-style: normal;
        position: relative;

        &::before {
          @include title-bg-yellow;
          top: -0.3rem;
          right: -2rem;
          width: 8.15rem;

          @include laptop {
            width: 6.15rem;
            right: -0.8rem;
          }

          @include tablet {
            height: 2rem;
            top: -0.2rem;
          }
        }
      }
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @include mobile-big {
    margin-bottom: 1.5rem;
  }

  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 2.5rem;

    @include mobile-big {
      margin-bottom: 1rem;
    }

    span {
      color: $pink;
      font-style: italic;
      font-weight: 600;
    }

    @include tablet {
      font-size: 1.2rem;
    }

    @include mobile-big {
      font-size: 1rem;
    }
  }
}

.info-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;

  @include mobile-big {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
  }

  &__item {
    &--fill {
      grid-column: 1 / span 2;
    }
  }

  &__title {
    display: inline-block;
    font-size: 1rem;
    color: #6d6d6d;
    margin-bottom: .5rem;

    @include tablet {
      font-size: .8rem;
    }
  }

  &__text {
    font-size: 1.2rem;

    @include tablet {
      font-size: .9rem;
    }
  }

  &__additional {
    grid-template-columns: repeat(3, 1fr);

    @include mobile-big {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.25rem;
    }
  }
}

.filmography {
  &__title {
    span::before {
      left: -.6rem;
      right: unset;
    }
  }

  &__subtitle {
    margin-bottom: 1.75rem;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    margin-bottom: 1.75rem;

    @include tablet {
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
    }
  }

  &__item {
    font-size: 0.9rem;

    @include mobile-big {
      font-size: 0.8rem;
    }
  }

  &__button {
    color: $dark;
    margin: 0 auto;
  }
}

.full-filmography {
  @include defaultShowAnimation;

  &__separator {
    width: 100%;
    border: 1px solid #b8b8b8;
    margin: 0 0 1.75rem;
  }
}

.filmography-year {
  &__wrapper {
    margin-bottom: 1.5rem;
  }

  &__button {
    display: flex;
    align-items: center;
    gap: .75rem;
    font-style: italic;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0;
    color: $dark;
    font-family: inherit;
    margin-bottom: 1rem;

    @include mobile-big {
      font-size: 1rem;
    }
  }

  &__item {
    font-weight: 400;
    font-size: 0.9rem;
    margin-bottom: 1rem;

    @include mobile-big {
      font-size: .8rem;
    }
  }
}

.photos {
  position: relative;

  &__grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

  }
}

@media (max-width: 1024px) {
  .photos {
    &__grid {
      gap: 1rem;
      justify-content: center;
    }
  }
}

.photo-button {
  padding: 0;

  img {
    max-width: 19.35rem;
    width: 100%;

    height: 25rem;

    @include tablet {
      height: 100%;
    }
  }
}

.visiting-card {
}
</style>