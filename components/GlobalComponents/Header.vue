<script setup>
const props = defineProps(['theme']);

const isMobileNavVissible = ref(false);

const changeMobileNavVissible = () => {
  isMobileNavVissible.value = !isMobileNavVissible.value;

  if (isMobileNavVissible.value) {
    document.getElementById('burgerButton').classList.add('mobile-nav-show');
  } else {
    document.getElementById('burgerButton').classList.remove('mobile-nav-show');
  }
}

</script>

<template>
  <header :class="`header header-${theme ? theme : 'light'}`">
    <div class="header-action header-action--mobile">
      <ul class="header-action__list container">
        <li>
          <NuxtLink class="link-default link-default--big">
            + 7 (322) 874-12-12
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="link-default link-default--big">
            anastasiya@yandex.ru
          </NuxtLink>
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
            <NuxtLink class="link-default">Работа с актёрами</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default">Кейсы</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default">Кинопроекты</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default">Контакты</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="header-action header-action--desktop">
        <ul class="header-action__list">
          <li>
            <NuxtLink class="link-default link-default--big">
              + 7 (322) 874-12-12
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default link-default--big">
              anastasiya@yandex.ru
            </NuxtLink>
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
            <NuxtLink class="link-default header-nav-burger__link" rel="nofollow">Работа с актёрами</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default header-nav-burger__link" rel="nofollow">Кейсы</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default header-nav-burger__link" rel="nofollow">Кинопроекты</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-default header-nav-burger__link" rel="nofollow">Контакты</NuxtLink>
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
  border-bottom: .05rem solid $bright;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @include mobile-big {
    padding: .4rem 0;
  }
}

.header-light {
  color: $bright;
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

    @include tablet {
      display: none;
    }
  }
}

.header-nav-burger {
  display: none;

  @include tablet {
    display: block;
  }

  &__list {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $peach;
    width: 100%;
    z-index: 3;
    padding: 5.5rem 1rem 1rem 1rem;

    -webkit-animation: showElement alternate .5s;
    -o-animation: showElement alternate .5s;
    animation: showElement alternate .5s;
  }

  &__button {
    display: flex;
    flex-direction: column;
    gap: .15rem;

    position: relative;
    z-index: 4;

    span {
      display: inline-block;
      border-radius: 1.6rem;
      width: 2rem;
      height: .15rem;
      background: $burger-gradient;
      transition: all .5s ease-in-out;
    }
  }

  &__button.mobile-nav-show {
    span {
      display: none;
    }

    span:first-child {
      display: block;
      position: absolute;
      top: 0;
      left: -30px;
      transform: rotate(45deg);
    }

    span:last-child {
      display: block;
      position: absolute;
      top: 0;
      left: -30px;
      transform: rotate(-45deg);
    }
  }
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