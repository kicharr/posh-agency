<script setup>
import {useActorsStore} from "~/store/actors.js";
import {getBestFilms} from "~/lib/utilities.js";
import ActorPhotoView from "~/components/Actors/ActorPhotoView.vue";

const route = useRoute();
const actorStore = useActorsStore();

const actorData = actorStore.getActorData(route?.params?.id);

const isAllFilmographyVissible = ref(false);

const photoViewActive = ref(false);

let currentPhotoView = ref('');
const sortedFilmsByYear = (filmography) => {
  let sortedFilmography = {};

  for (let i = 0; i < filmography.length; i++) {
    if (!sortedFilmography[filmography[i]?.year]) {
      sortedFilmography[filmography[i]?.year] = [filmography[i]?.name];
    } else {
      sortedFilmography[filmography[i]?.year].push(filmography[i]?.name);
    }
  }

  return sortedFilmography;
}
const getActorPhoto = (str) => {
  if (!str) return `background: center / cover no-repeat url("/static-images/actors/actor-photo-none.png");`
  return `background: center / cover no-repeat url('/static-images/actors/${str}');`
}
const changeFilmographyVissible = () => {
  isAllFilmographyVissible.value = !isAllFilmographyVissible.value;
}

const changePhotoView = (photo) => {
  currentPhotoView.value = photo;
  photoViewActive.value = !photoViewActive.value;
}

definePageMeta({
  layout: "landing-layout"
})
</script>

<template>
  <main class="main">
    <section class="actor-hero section" :style="getActorPhoto(actorData?.commonFeatures?.photo)">
      <div class="actor-hero-content container">

        <div class="actor-hero__information">
          <Breadcrumbs :currentPage="actorData?.commonFeatures?.name" :neededLink="{link: '/', title: 'Актёры'}"/>
          <h1 class="actor-hero-content__title">{{ actorData?.commonFeatures?.name }}</h1>
          <div class="actor-hero-content__description">
            <span class="actor-hero-content__text actor-hero-content__text--blue">Актёр кино</span>
            <p class="actor-hero-content__text">Дата рождения — {{ actorData?.commonFeatures?.dateBirth }}</p>
            <p class="actor-hero-content__text actor-hero-content__text--films">{{
                getBestFilms(actorData?.filmography)
              }}</p>
          </div>
        </div>

        <div class="actor-hero__links">
          <a :href="actorData?.additionalInformation?.kinoteatrLink" target="_blank">
            <img class="actor-link" src="/static-images/actors/kino-teatr.svg" alt="Ссылка на страницу кинотеатра">
          </a>
          <a :href="actorData?.additionalInformation?.kinopoiskLink" target="_blank">
            <img class="actor-link" src="/static-images/actors/kinopoisk.svg" alt="Ссылка на страницу кинопоиска">
          </a>
        </div>
      </div>

    </section>

    <section class="actor-info section container">
      <h2 class="title-h2 actor-info__title">
          <span>
            об
          </span>
        <span>
            актёре
          </span>
      </h2>

      <div class="info">
        <h3 class="title-h3 info__title"><span>Физиологические</span> признаки</h3>
        <div class="info-content info-content__main">
          <div class="info-content__item">
            <span class="info-content__title">
              Рост
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.growth }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Вес
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.weight }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Размер одежды
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.clothingSize }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Размер обуви
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.shoeSize }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Цвет глаз
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.eyes }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Иностранные языки
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.foreignLanguages }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Тембр голоса
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.voice }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Тип
            </span>
            <p class="info-content__text">
              {{ actorData?.commonFeatures?.type }}
            </p>
          </div>
        </div>
      </div>

      <div class="info">
        <h3 class="title-h3 info__title"><span>Дополнительная</span> информация</h3>
        <div class="info-content info-content__additional">
          <div class="info-content__item">
            <span class="info-content__title">
              Гражданство
            </span>
            <p class="info-content__text">
              {{ actorData?.additionalInformation?.nationality }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Город
            </span>
            <p class="info-content__text">
              {{ actorData?.additionalInformation?.city }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Вождение
            </span>
            <p class="info-content__text">
              {{ actorData?.additionalInformation?.driving }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Дополнительная информация
            </span>
            <p class="info-content__text">
              {{ actorData?.additionalInformation?.moreInfo.join('; ') }}
            </p>
          </div>
          <div class="info-content__item">
            <span class="info-content__title">
              Город
            </span>
            <p class="info-content__text">
              {{ actorData?.additionalInformation?.city }}
            </p>
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

          <li v-for="(film, index) in actorData?.filmography.filter((item) => item?.type === 'best')"
              class="filmography__item">
            <p>
              {{ film?.name }}
            </p>
          </li>
        </ul>

        <div v-if="isAllFilmographyVissible" class="full-filmography">
          <hr class="full-filmography__separator">

          <div v-for="(filmsForYear, year, index) in sortedFilmsByYear(actorData?.filmography)" :key="index"
               class="filmography-year__wrapper">

            <button class="filmography-year__button">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L22 10.78L0 22V0Z" fill="#FFBE98"/>
              </svg>
              {{ year }}
            </button>

            <ul class="list-default">
              <li v-for="(item, index) in filmsForYear" :key="index" class="filmography-year__item">
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
        <div v-for="(photo, index) in actorData?.commonFeatures?.photos" :key="index" class="photos__item">
          <button @click="changePhotoView(photo)" class="photo-button">
            <img :src="`/static-images/actors/${photo}`" alt="Слава Копейкин">
          </button>
        </div>
      </div>
      <ActorPhotoView v-if="photoViewActive" :photo="currentPhotoView"
                      :allActorPhoto="actorData?.commonFeatures?.photos" @changePhotoView="changePhotoView"/>
    </section>

    <section v-if="actorData?.commonFeatures?.vizitingCard" class="visiting-card section container">
      <div class="section__heading">
        <h2 class="title-h2 actor-info__title visiting-card__title">
          <span>
            ВИЗИТКА
          </span>
        </h2>
      </div>

      <div class="viziting-card__content">
        <iframe :src="actorData?.commonFeatures?.vizitingCard"
                frameborder="0"
                width="100%"
                height="500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
        </iframe>
      </div>

    </section>
  </main>
</template>

<style scoped lang="scss">
.actor-hero-content {
  padding: 24rem .5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

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
}

.visiting-card {
}
</style>