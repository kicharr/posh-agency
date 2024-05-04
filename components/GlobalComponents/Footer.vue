<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-content__wrap">
        <div class="footer-content__logo">
          <img src="/static-images/posh-agency-logotype-white.svg" alt="POSH.AGENCY LOGO WHITE">

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

      <div class="footer-content__wrap">
        <ul class="footer-company__list">
          <li>ИП Миллер Анастасия Владимировна</li>
          <li>ИНН 526021795901</li>
        </ul>
        <span class="footer-company__domain">
            © posh-agency.com, 2024
        </span>
      </div>

    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $pink;
  color: $bright;
}

.footer-content {
  font-size: .8rem;
  padding: 2.5rem 0.5rem;

  @include tablet {
    padding: 2rem .5rem;
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 4rem;

    @include mobile-big {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &:last-child {
      align-items: flex-end;
      margin-bottom: 0;

      @include mobile-big {
        align-items: center;
        gap: 2rem;
      }
    }
  }

  &__logo {
    max-width: 21rem;
    width: 100%;

    img {
      margin-bottom: 1.5rem;
    }

    span {
      font-weight: 600;
      display: inline-block;
      margin-bottom: 1.5rem;
    }

    @include mobile-big {
      max-width: 15rem;
      margin-bottom: 1rem;

      p {
        font-size: .7rem;
      }
    }
  }

  &__action {
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: .5rem;

      @include mobile-big {
        gap: 1.5rem;
        flex-direction: row;
      }
    }
  }
}

.footer-company {
  color: #CBCBCB;
  font-size: .8rem;

  @include mobile-big {
    font-size: 0.75rem;
  }

  &__list {

    @include mobile-big {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    li {
      margin-bottom: 0.625rem;

      @include mobile-big {
        margin-bottom: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>