<script setup>
const props = defineProps(['theme']);

const isMobileNavVissible = ref(false);

const route = useRoute();

const changeMobileNavVissible = () => {
  isMobileNavVissible.value = !isMobileNavVissible.value;

  if (isMobileNavVissible.value) {
    document.getElementById('burgerButton').classList.add('mobile-nav-show');
  } else {
    document.getElementById('burgerButton').classList.remove('mobile-nav-show');
  }
}

watch(isMobileNavVissible, (val) => {
  if (val) {
    document.addEventListener('scroll', (e) => {
      if (e) changeMobileNavVissible();
    }, {once: true})
  }
})

</script>

<template>
  <header :class="`header header--${theme ? theme : 'dark'}`">
    <div class="header-action header-action--mobile">
      <ul class="header-action__list container">
        <li>
          <a href="tel:+79175452084" class="link-default link-default--big">
            + 7 (917) 545-20-84
          </a>
        </li>
        <li>
          <a href="mailto:me@orlshrl.ru" class="link-default link-default--big">
            me@orlshrl.ru
          </a>
        </li>
      </ul>
    </div>

    <div class="header-content container">

      <div class="header-logo">
        <NuxtLink to="/">
          <img src="/static-images/posh-agency-logotype.svg" alt="POSH.AGENCY LOGO">
        </NuxtLink>
      </div>

      <div class="header-nav">
        <ul class="header-nav__list">
          <li>
            <NuxtLink
                to="/artists"
                class="link-default header-nav__link"
                :class="{'header-nav__link--active': route?.fullPath === '/artists'}"
            >
              Работа с актёрами
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="link-default header-nav__link"
                      :class="{'header-nav__link--active': route?.fullPath === '/projects'}">Кейсы
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default header-nav__link">Кинопроекты</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default header-nav__link">Контакты</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="header-action header-action--desktop">
        <ul class="header-action__list">
          <li>
            <a href="tel:+79175452084" class="link-default link-default--big">
              + 7 (917) 545-20-84
            </a>
          </li>
          <li>
            <a href="mailto:me@orlshrl.ru" class="link-default link-default--big">
              me@orlshrl.ru
            </a>
          </li>
        </ul>
      </div>

      <div class="header-nav-burger">
        <button @click="changeMobileNavVissible" id="burgerButton" class="header-nav-burger__button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul v-if="isMobileNavVissible" class="header-nav-burger__list">
          <li>
            <NuxtLink to="/artists" class="link-default  header-nav__link" rel="nofollow"
                      :class="{'header-nav__link--active': route?.fullPath === '/artists'}">Работа с актёрами
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="link-default  header-nav__link" rel="nofollow"
                      :class="{'header-nav__link--active': route?.fullPath === '/projects'}">Кейсы
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default header-nav__link " rel="nofollow">Кинопроекты
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default header-nav__link " rel="nofollow">Контакты</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: .8rem 0;
  color: $dark;
  border-bottom: .05rem solid #cbcbca;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: all .5s linear;

  @include mobile-big {
    padding: .4rem 0;
  }

  &--light {
    color: $bright;
  }

  &--dark {
    position: relative;
  }

}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
  max-width: 12.5rem;
  width: 100%;
  flex-shrink: 0;

  @include tablet {
    max-width: 9.95rem;
  }
}

.header-nav {
  &__list {
    display: flex;
    gap: 2.25rem;

    @media (max-width: 978px) {
      display: none;
    }
  }

  &__link {
    position: relative;

    &--active {
      &::before {
        position: absolute;
        content: "";
        bottom: -.10rem;
        left: 0;
        width: 100%;
        height: .05rem;
        border-radius: 0.25rem;
        background-color: $pink;
      }
    }
  }
}

.header-nav-burger {
  display: none;

  @media (max-width: 978px) {
    display: block;
  }

  &__list {
    position: absolute;
    top: 3.3rem;
    right: 0.5rem;
    background: $dark;
    border-radius: 0.4rem 0 0.4rem 0.4rem;
    padding: 2.5rem;
    z-index: 3;

    @include defaultShowAnimation;

    li {
      color: $bright;
      margin-bottom: 1.75rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @include mobile-big {
      top: 4.5rem;
    }
  }

  &__button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .15rem;

    max-width: 2.5rem;
    width: 100%;
    height: 2.5rem;
    border-radius: 1.3rem;
    padding: 0.7rem;
    background: $dark;

    position: relative;
    z-index: 4;

    transition: all .5s ease-in-out;

    span {
      display: inline-block;
      border-radius: 1.6rem;
      width: 1.5rem;
      height: .15rem;
      background: $burger-gradient;
      transition: all .5s ease-in-out;
    }

    &.mobile-nav-show {
      span {
        display: none;

        &:first-child {
          display: block;
          transform: rotate(45deg);
          position: relative;
        }

        &:last-child {
          position: absolute;
          display: block;
          transform: rotate(-45deg);
        }
      }
    }
  }
}

.mobile-nav-show {
  border-radius: 1.3rem 1.3rem 0 0;
  padding: 0.7rem;
  background: $dark;

  -webkit-animation: showElement alternate .5s;
  -o-animation: showElement alternate .5s;
  animation: showElement alternate .5s;
}

.header-action {

  &__list {
    @include mobile-big {
      display: flex;
      justify-content: space-between;
      margin-bottom: .5rem;
    }
  }

  &--mobile {
    display: none;

    @include mobile-big {
      display: block;
    }
  }

  &--desktop {
    @include mobile-big {
      display: none;
    }
  }
}

</style>