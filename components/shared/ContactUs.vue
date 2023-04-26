<template>
  <section class="contact-us">
    <div class="animation">
      <img src="~/assets/animation/lower-block-desktop.gif" alt="contact-us-animation"/>
    </div>

    <p class="title">Looking to build something amazing? We’d love to help.</p>

    <BaseButton to="/contact-us">
      Contact us
    </BaseButton>
  </section>
</template>

<style lang="scss" scoped>

.contact-us {
  @include desktop-and-up {
    display: flex;
    align-items: center;
  }
  .animation {
    height: 200px;
    position: relative;

    @include tablet-and-up {
      height: 300px;
    }

    @include desktop-and-up {
      height: 100px;
      width: 800px;
    }

    img {
      position: absolute;
      width: 300px;
      height: 300px;
      left: -20px;
      top: -75px;

      @include tablet-and-up {
        width: 350px;
        height: 350px;
        left: -30px;
        top: -90px;
      }

      @include desktop-and-up {
        width: 550px;
        height: 550px;
        left: -120px;
        top: -200px;
      }
    }
  }
  .title {
    color: $main-black;
    font-weight: 700;
    font-size: 18px;
    text-align: left;
    margin-bottom: 40px;

    @include tablet-and-up {
      text-align: center;
      font-size: 24px;
    }

    @include desktop-and-up {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }
}

::v-deep button {
  margin: auto;
}

</style>