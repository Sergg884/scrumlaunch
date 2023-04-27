<template>
  <section>
    <div class="hero">
      <AppearFromMask>
      <h1 class="title-global">
        Become a SCRUMLAUNCH <br>
        <span class="mark">Referral Partner</span>
      </h1>
      </AppearFromMask>
      <AppearFromMask>
        <p class="text-main">
          ScrumLaunch is rooted in producing quality work for our clients, which as a result, has led to 7+ years of organic growth powered by referrals. We believe in fostering a robust network of partners with generous payouts and terms. 
        </p>
      </AppearFromMask>
      <AppearFromMask>
        <p class="text-main">
          Interested in joining our market-leading referral program? Shoot us a quick note and let’s chat.
        </p>
      </AppearFromMask>
    </div>
    <div class="button">
      <BaseButton to="/contact-us">
        Talk to us
      </BaseButton>
    </div>
    <div class="img">
      <nuxt-img src="/pages/referral-hero.svg" alt="referral hero img" />
    </div>
    
  </section>
</template>

<style lang="scss" scoped>

section {

  @include desktop-and-up {
    display: flex;
    flex-wrap: wrap;
  }

  .hero {
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      flex: 770px 0 0;
    }

    h1 {
      margin-bottom: 16px;

      @include tablet-and-up {
        margin-bottom: 24px;
      }

      @include desktop-and-up {
        margin-bottom: 40px;
      }
    }

    .text-main {
      @include desktop-and-up {
        width: 712px;
      }
    }
  }

  .button {
    margin-bottom: 60px;

    @include tablet-and-up {
      margin-bottom: 90px;
    }

    @include desktop-and-up {
      order: 3;
      width: 100%;
      margin-bottom: 80px;
    }
    .base-button {
      width: 230px;
      margin: auto;

      @include desktop-and-up {
        width: 360px;
      }
    }
  }
  .img {
    @include desktop-and-up {
      order: 2;
      flex: 430px 0 0;
      position: relative;
    }

    img {
      width: 100%;

      @include desktop-and-up {
        position: absolute;
        left: 0;
        top: 0;
        width: 500px;
      }
    }
  }
}

</style>