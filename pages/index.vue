<script setup>
import {useArtistsStore} from "~/store/artists.js";
import {useProjectsStore} from "~/store/projects";
import ProjectCard from "~/components/Projects/ProjectCard.vue";
import ArtistCard from "~/components/Artists/ArtistCard.vue";

const artistsStore = useArtistsStore();
const projectsStore = useProjectsStore();

const artistsList = artistsStore.artistsList;
const projectList = projectsStore.projectsList;


definePageMeta({
  layout: "landing-layout"
})
</script>

<template>
  <main class="main">
    <section class="hero section">
      <div class="hero-content container">
        <div class="hero-content__left">
          <a class="anchor-tool" href="#">
            37+ кейсов в портфолио
            <span class="anchor-tool__dot">
            <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="3" r="2.5" fill="#F58AB2"/>
            </svg>
          </span>
            Посмотреть их
            <span class="anchor-tool__arrow">
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L1 9" stroke="#F58AB2" stroke-width="2"/>
            </svg>
          </span>
          </a>
          <div class="hero-content__description">
            <h1 class="title-h1">
              <span>POSH.AGENCY</span> - Создайте незабываемые образы с профессиональным продюсером актёров
            </h1>
            <p>
              <span>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Nam semper odio nisi, et eleifend
              leo pulvinar
              ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia
              eget
              vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed
              tincidunt eleifend ullamcorper. Nullam at commodo ipsum.
            </p>
          </div>
          <button class="button button--gradient hero-content__button">Связаться сейчас</button>
        </div>
        <div class="hero-content__right">
          <a href="#" class="link-default link-default--bordered">telegram</a>
          <a href="#" class="link-default link-default--bordered">instagram</a>
        </div>
      </div>
    </section>

    <section id="artists" class="artists section container">
      <div class="section__heading">
        <h2 class="title-h2 artists__title"><span>работа</span> с актёрами</h2>
        <p class="artists__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut.
          Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget
          vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt
          eleifend ullamcorper. Nullam at commodo ipsum.
        </p>
      </div>
      <div class="artists__list">
        <ArtistCard
            v-for="(artist, index) in artistsList.slice(0, 6)"
            :key="index"
            :artistData="artist"
        />
      </div>
      <NuxtLink to="/artists/" class="button artists__button">Смотерть всех</NuxtLink>
    </section>

    <section class="projects section container">
      <div class="section__heading">
        <h2 class="title-h2 projects__title">
          <span>
            Проекты
          </span>
          <span>
            КИНОПРОЕКТЫ
          </span>
        </h2>
        <div class="projects__info">
          <p class="projects__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut.
            Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget
            vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt
            eleifend ullamcorper. Nullam at commodo ipsum.
          </p>
          <p class="projects__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut.
            Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante.
          </p>
        </div>

      </div>

      <div class="projects__list">
        <ProjectCard
            v-for="(project, index) in projectList"
            :key="index"
            :projectData="project"
        />
      </div>
    </section>

    <section class="company section container">
      <div class="company-banner">
        <div class="company-banner__logo">
          <img src="/static-images/posh-agency-logotype.svg" alt="POSH.AGENCY LOGO">
        </div>

        <div class="company-banner__content">
          <h2 class="company-banner__title title-h2">Реализовали рекламные проекты для крупных компаний и брендов:
            Эффективные стратегии и креативные
            решения,
            которые привели к заметному успеху!</h2>

          <div class="company-list">
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/sberbank-logo.svg"
                   alt="СБЕРБАНК">
            </NuxtLink>
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/mts-logo.svg"
                   alt="Смотреть бэкстейдж для компании МТС">
            </NuxtLink>
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/yasno-logo.svg"
                   alt="Сервис ЯСНО">
            </NuxtLink>
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/sportmaster.svg"
                   alt="Спортмастер">
            </NuxtLink>
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/monochrome.svg"
                   alt="monochrome">
            </NuxtLink>
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/nextup.svg"
                   alt="nextup">
            </NuxtLink>
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/yandex.svg"
                   alt="yandex">
            </NuxtLink>
            <NuxtLink class="company-list__link">
              <img class="company-list__image" src="/static-images/backstage/nuum.svg"
                   alt="nuum">
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="company-backstage">
        <h2 class="title-h2 company-backstage__title">
          <span>
            Посмотри наши
          </span>
          <span>
            бэкстейджи
          </span>
        </h2>
        <div class="company-backstage__content">
          <div class="company-backstage__col company-backstage__col--left">
            <NuxtLink class="backstage-card backstage-card--vertical">
              <img class="backstage-card__preview" src="/static-images/backstage/backstage-card-preview-test.png"
                   alt="">
              <div class="backstage-card__content">
                <h3 class="title-h3 backstage-card__title">
                  Название
                </h3>
                <p class="backstage-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span class="backstage-card__date">27.02.2023</span>
              </div>
            </NuxtLink>
            <NuxtLink class="backstage-card backstage-card--vertical">
              <div class="backstage-card__content">
                <h3 class="title-h3 backstage-card__title">
                  Название
                </h3>
                <p class="backstage-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span class="backstage-card__date">27.02.2023</span>
              </div>
              <img class="backstage-card__preview" src="/static-images/backstage/backstage-card-preview-test.png"
                   alt="">
            </NuxtLink>
          </div>
          <div class="company-backstage__col company-backstage__col--right">
            <NuxtLink class="backstage-card backstage-card--horizontal">
              <img class="backstage-card__preview" src="/static-images/backstage/backstage-card-preview-test.png"
                   alt="">
              <div class="backstage-card__content">
                <h3 class="title-h3 backstage-card__title">
                  Название
                </h3>
                <p class="backstage-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span class="backstage-card__date">27.02.2023</span>
              </div>
            </NuxtLink>
            <NuxtLink class="backstage-card backstage-card--horizontal">
              <div class="backstage-card__content">
                <h3 class="title-h3 backstage-card__title">
                  Название
                </h3>
                <p class="backstage-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span class="backstage-card__date">27.02.2023</span>
              </div>
              <img class="backstage-card__preview" src="/static-images/backstage/backstage-card-preview-test.png"
                   alt="">
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>


</template>

<style scoped lang="scss">
.main {
  overflow-x: hidden;
}

// HERO
.hero {
  color: $bright;
  background: rgba(0, 0, 0, .5);
  background: center / cover no-repeat url("/static-images/hero-bg.png");
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 17.5rem .5rem 10rem;

  animation: showElement 1.5s linear alternate;

  @include tablet {
    flex-direction: column;
    align-items: center;
    padding: 13rem 10px;
  }

  &__left {
    max-width: 34.6rem;
    width: 100%;

    @include tablet {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 4rem;
    }

    @include mobile-big {
      margin-bottom: 2rem;
    }
  }

  &__right {
    display: flex;
    gap: 1rem;
  }

  &__description {

    h1 {
      margin-bottom: 2.5rem;

      span {
        font-weight: 800;
      }

      @include tablet {
        margin-bottom: 1.6rem;
      }

      @include mobile-big {
        font-size: 1.4rem;
      }
    }

    p {
      font-size: .8rem;

      span {
        font-weight: 600;
      }

      @include mobile-big {
        font-size: .7rem;
      }
    }
  }

  &__button {
    margin-top: 2.5rem;

    @include tablet {
      margin-top: 2rem;
    }

    @include mobile-big {
      margin-top: 1rem;
    }
  }
}

.anchor-tool {
  display: inline-flex;
  gap: .5rem;
  align-items: center;

  border-radius: 1.25rem;
  padding: .5rem;
  background-color: $peach;

  color: $dark;
  font-weight: 400;
  font-size: .7rem;
  margin-bottom: 2.5rem;

  transition: background-color .2s ease-in-out;

  &:hover {
    background-color: #fa9962;
  }

  @include tablet {
    margin-bottom: 2rem;
  }

  @include mobile-small {
    margin-bottom: 1rem;
    font-size: .6rem;
  }
}

// COMPANY
.company-banner {
  border-radius: 1.6rem;
  padding: 1.25rem;
  background: center / cover no-repeat url("/static-images/backstage/companies-banner-bg.png");
  margin-bottom: 3rem;

  @include tablet {
    margin-bottom: 2rem;
  }

  @include mobile-big {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__logo {
    max-width: 12.5rem;
    width: 100%;
    margin-bottom: 1rem;
  }

  &__content {
    display: flex;
    justify-content: space-between;

    @include tablet {
      flex-direction: column;
      gap: 2rem;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 1.35rem;
    letter-spacing: -0.01em;
    max-width: 31.25rem;
    width: 100%;
    margin-bottom: 0;
    display: inline-block;

    @include mobile-big {
      font-size: .9rem;
      text-align: center;
    }
  }
}

.company-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @include tablet {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @include mobile-big {
    justify-content: center;
  }

  &__image {
    max-width: 8rem;
    width: 100%;

    &--big {
      max-width: 14.15rem;
    }

    @include tablet {
      max-width: 6rem;
    }

    @include mobile-big {
      max-width: 5rem;
    }

  }

  &__link {
    transition: $transitionTransform;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__nda {
    background-color: $pink;
    border-radius: 1.25rem;
    padding: .5rem 1.25rem;
    color: $bright;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    grid-column: span 2;

    @include mobile-big {
      font-size: .8rem;
    }
  }
}

.company-backstage {

  &__title {
    display: inline-flex;
    gap: 3.5rem;
    position: relative;
    text-transform: uppercase;

    @include mobile-big {
      display: flex;
      gap: .75rem;
    }

    span:first-child {
      font-style: normal;
      font-weight: 400;

      @include mobile-big {
        &::before {
          left: 13.5rem;
          right: 0;
        }
      }

      @include mobile-small {
        &::before {
          left: 11.5rem;
          right: 0;
        }
      }
    }

    span:last-child {
      text-align: right;
    }
  }

  &__content {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 1.2rem;
    }
  }

  &__col {
    display: flex;
    gap: .95rem;

    &--left {
      flex-basis: 50%;

      @include tablet {
        flex-basis: unset;
        flex-direction: column;
      }
    }

    &--right {
      flex-direction: column;
      flex-basis: 50%;

      @include mobile-big {
        flex-basis: unset;
      }
    }
  }
}

.backstage-card {
  padding: .8rem;
  border-radius: 1.6rem;
  font-size: .7rem;
  color: #5b5b5b;

  display: flex;
  gap: .8rem;

  transition: all .2s ease-in-out;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }


  &__preview {
    max-width: 251px;
    aspect-ratio: 1 / 1;

    @include mobile-big {
      max-width: unset;
    }
  }

  &:hover {
    box-shadow: 0 .2rem .2rem 0 $dark;
  }

  &__title {
    font-style: italic;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }

  &__description {
    margin-bottom: auto;

    @include mobile-big {
      margin-bottom: 3.5rem;
    }
  }

  &--vertical {
    flex-direction: column;
    background: linear-gradient(141deg, rgba(245, 138, 178, .3) 0%, rgba(242, 223, 118, .3) 100%);
    max-height: 30.85rem;
    height: 100%;

    @include tablet {
      flex-direction: row;
    }

    @include mobile-big {
      flex-direction: column;
    }

    &:last-child {
      @include mobile-big {
        flex-direction: column-reverse;
      }
    }
  }

  &--horizontal {
    background: linear-gradient(141deg, rgb(255, 190, 152, .5) 0%, rgba(242, 223, 118, .3) 100%);
    max-height: 14.7rem;
    height: 100%;

    @include mobile-big {
      flex-direction: column;
      max-height: unset;
    }

    &:last-child {
      @include mobile-big {
        flex-direction: column-reverse;
      }
    }
  }
}

// artists
.artists {
  display: flex;
  flex-direction: column;

  &__title {
    display: inline-block;
    text-transform: uppercase;
    position: relative;
    z-index: 5;
  }

  span {
    &::before {
      @include title-bg-yellow;
      left: -2.5rem;

      @include laptop {
        left: -1.8rem;
        width: 7.4rem;
      }

      @include tablet {
        width: 7.5rem;
        height: 2rem;
        left: -1.8rem;
      }

      @include mobile-big {
        width: 7rem;
        height: 2rem;
        left: -1.5rem;
      }

      @include mobile-small {
        width: 5.5rem;
        height: 2rem;
        left: -0.8rem;
      }
    }
  }

  &__description {
    max-width: 46.5rem;
    width: 100%;

    font-size: .8rem;
  }

  &__list {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }

  &__button {
    color: $dark;
    margin: 3rem auto 2rem;

    @include mobile-big {
      width: 100%;
      font-size: .9rem;
      padding: 0.6rem 1.2rem;
      margin: 2rem auto 1rem;
    }
  }
}

// PROJECTS
.projects {

  &__title {
    text-transform: uppercase;
    position: relative;
    z-index: 5;

    display: inline-flex;
    gap: 3.5rem;

    @include mobile-big {
      display: flex;
      gap: .75rem;
    }

    span {
      &:last-child {
        font-weight: 400;
        font-style: normal;

        @include mobile-big {
          text-align: right;
        }
      }
    }

    &::before {
      @include title-bg-yellow;
      top: -0.2rem;
      right: -2.5rem;

      @include laptop {
        top: -0.4rem;
        right: -3.7rem;
      }

      @include tablet {
        width: 7.4rem;
        right: -0.7rem;
      }

      @include mobile-big {
        width: 6.4rem;
        height: 2rem;
        left: unset;
        right: -0.6rem;
        top: 2rem;
      }
    }

    span:first-child {
      &::before {
        @include mobile-big {
          left: 7.5rem;
        }

        @include mobile-small {
          left: 6rem;
        }
      }

    }

  }

  &__info {
    display: flex;
    justify-content: space-between;

    @include tablet {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }

  &__description {
    font-size: .8rem;
    flex-basis: 60%;

    &:last-child {
      font-size: 0.7rem;
      color: $pink;
      flex-basis: 30%;

      @include tablet {
        max-width: 18rem;
        margin-left: auto;
      }

      @include mobile-big {
        max-width: unset;
        flex-basis: unset;
        margin-left: auto;
      }
    }

    @include mobile-big {
      flex-basis: unset;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem .47rem;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile-big {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>