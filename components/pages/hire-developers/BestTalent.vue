<template>
  <div class="best-talent">
    <section>
      <h2 class="title-global">
        <span class="mark">The Best Talent</span> at Every<span class="mark">Experience Level</span>
      </h2>
      <nuxt-img class="desktop" src="/pages/hire-developers/best-talent/desktop.svg" alt="best-talent-desktop" />
      <nuxt-img class="mobile"  src="/pages/hire-developers/best-talent/mobile.svg" alt="best-talent-modile" />
    </section>
  </div>
</template>

<style lang="scss" scoped>

.best-talent {
  width: 100%;
  display: block;
  background-color: $main-black;
  display: flex;

  h2 {
    color: #fff;
    line-height: 1.8;
    margin-bottom: 40px;
    display: none;

    @include tablet-and-up {
      display: block;
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
    }

  }

  .desktop {
    display: none;
    width: 100%;

    @include tablet-and-up {
      display: block;
    }
  }

  .mobile {
    @include tablet-and-up {
      display: none;
    }
  }
}

</style>