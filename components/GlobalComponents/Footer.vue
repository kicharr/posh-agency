<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-content__logo">
        <img src="/static-images/posh-agency-logotype-white.svg" alt="POSH.AGENCY LOGO WHITE">
      </div>

      <div class="footer-content__description">
        <span>DIRECTED BY ANASTASIYA MILLER</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat mattis orci, suscipit malesuada quam
          dignissim ac. Vestibulum nec urna ut arcu.
        </p>
      </div>

      <div class="footer-content__action">
        <ul>
          <li>
            <a class="link-default link-default--bordered" href="#">telegram</a>
          </li>
          <li>
            <a class="link-default link-default--bordered" href="#">instagram*</a>
          </li>
          <li>
            <a class="link-default link-default--bordered" href="#">youtube</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $pink;
  text-align: center;
  color: $bright;
}

.footer-content {
  max-width: 30rem;
  width: 100%;

  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  align-items: center;
  font-size: .8rem;

  padding: 2.5rem 0;

  @include tablet {
    padding: 2rem .5rem;
  }

  &__logo {
    max-width: 21rem;
    width: 100%;

    @include mobile-big {
      max-width: 15rem;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: .75rem;

    span {
      font-weight: 600;
    }

    p {
      @include mobile-big {
        font-size: .7rem;
      }
    }
  }


  &__action {
    ul {
      display: flex;
      gap: 2.5rem;

      @include mobile-big {
        gap: 1.5rem;
      }
    }
  }
}
</style>