<template>
  <div v-if="$route.name !== 'quiz'">
    <div class="social_proof" v-if="$route.name !== 'hire-developers-specialization'">
      <div class="social_proof__badge">
        <img
          :src="require('@/assets/icons/clutch_badge.svg')"
          @click="openClutch"
        />
      </div>
      <p class="social_proof__title">
        Join <span class="mark">100+ high growth startups</span> and Fortune 500
        companies that are building software teams with ScrumLaunch.
      </p>
      <div class="social_proof__img-conatiner">
        <a href="https://www.communityfunded.com/" target="_blank"
          ><img src="/images/quiz/community_funded.svg" alt="community_funded"
        /></a>
        <a href="https://www.acorns.com/" target="_blank"
          ><img src="/images/quiz/harvest.svg" alt="harvest"
        /></a>
        <a href="http://www.vestahome.com/" target="_blank"
          ><img src="/images/quiz/vesta.svg" alt="vesta"
        /></a>
        <a href="https://www.gipper.com/" target="_blank"
          ><img src="/images/quiz/gipper.svg" alt="gipper"
        /></a>
        <a href="https://www.campusreel.org/" target="_blank"
          ><img src="/images/quiz/campusreel.svg" alt="campusreel"
        /></a>
        <a href="https://www.heli.life/" target="_blank"
          ><img src="/images/quiz/heli.svg" alt="heli"
        /></a>
      </div>
    </div>
    <div class="footer home">
      <div class="footer--menu">
        <!-- <NuxtLink to="/work">Portfolio</NuxtLink> -->
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/process">About us</NuxtLink>
        <NuxtLink to="/referral-partner">Referral Program</NuxtLink>
        <NuxtLink to="/leadership">Leadership</NuxtLink>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
      </div>
      <div class="footer--contact">
        <div v-show="false" class="footer--contact--item">
          <p>Phone</p>
          <a href="tel:+380989999999">+38 (098) 99 99 999</a>
        </div>

        <div class="footer--contact--item">
          <p>Email</p>
          <a href="mailto:hello@scrumlaunch.com" style="color: #ff0000"
            >hello@scrumlaunch.com</a
          >
        </div>
      </div>
      <div class="footer--address">
        <p>
          Portland, OR<br />Los Angeles, CA<br />Ukraine<br />Brazil<br />Poland<br />Uttar Pradesh, India
        </p>
      </div>
      <SocialBlock class="footer--social" />
      <div class="footer--private">
        © 2022 ScrumLaunch LLC. All rights reserved.
      </div>
      <ScrollToTop />
    </div>
  </div>
</template>

<script>
import SocialBlock from '@/components/SocialBlock.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

export default {
  components: {
    SocialBlock,
    ScrollToTop,
  },

  methods: {
    openClutch() {
      window.open('https://clutch.co/profile/scrumlaunch#summary', '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 0px 20px 0px;
  box-sizing: border-box;
  color: #1e1f21;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  grid-template-columns: repeat(2, 1fr);

  a,
  p {
    line-height: 150%;
    color: #1e1f21;
    text-decoration: none;
    font-family: 'Proxima Nova';
    font-weight: bold;
    text-align: left;
  }

  p {
    font-size: 16px;
  }

  a {
    font-size: 18px;
  }

  span {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    position: absolute;
    bottom: 40px;
    right: 20px;
  }

  &--menu {
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    grid-area: 2 / 1 / 3 / 2;
  }

  &--contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    grid-area: 1 / 1 / 2 / 5;

    &--item {
      text-align: left;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0px;
      }

      p {
        margin-bottom: 4px;
      }

      a {
        font-size: 18px;
      }
    }
  }

  &--social {
    position: relative;
    right: inherit;
    bottom: inherit;
    grid-area: 3 / 1 / 4 / 5;
  }

  &--private {
    grid-area: 4 / 1 / 5 / 5;
    text-align: left;
  }

  &--address {
    grid-area: 2 / 2 / 3 / 3;
  }
}

.social_proof {
  padding-bottom: 240px;
  padding-top: 240px;
  padding-left: 8.32%;
  padding-right: 8.32%;
  background: #1e1f21;
  margin-bottom: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    max-width: 712px;
    margin-top: 60px;
    margin-bottom: 94px;
  }

  .mark {
    background: #12e2b0;
    color: #1e1f21;
  }

  &__img-conatiner {
    display: flex;
    align-items: center;
    gap: 44px;
  }

  &__badge {
    cursor: pointer;

    & > img {
    width: 250px;

    }
  }

  @media screen and (max-width: 1439px) {
    padding-bottom: 140px;
    padding-top: 140px;
    margin-bottom: 140px;

    &__title {
      font-size: 24px;
      margin-top: 40px;
      margin-bottom: 60px;
      max-width: 665px;
    }

    &__badge > svg {
      width: 230px;
      height: 62px;
    }

    &__img-conatiner {
      flex-wrap: wrap;
      gap: 36px;
      justify-content: space-around;
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
    padding-top: 80px;
    margin-bottom: 80px;

    &__title {
      font-size: 18px;
      margin-bottom: 40px;
      max-width: initial;
    }

    &__img-conatiner {
      gap: 25px;
    }
  }
}

.form_wrapper {
  display: flex;
  gap: 100px;
  text-align: left;
  justify-content: center;

  padding-bottom: 240px;
  padding-top: 240px;
  padding-left: 8.32%;
  padding-right: 8.32%;
  margin-bottom: 240px;

  @media screen and (max-width: 1439px) {
    padding-bottom: 140px;
    padding-top: 140px;
    margin-bottom: 140px;
    gap: 50px;
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
    padding-top: 80px;
    margin-bottom: 80px;
  }
}

.text_form_wrapper {
  @media screen and (max-width: 1439px) {
    display: flex;
    align-items: baseline;
    gap: 45px;
    margin: auto;
  }

  @media screen and (max-width: 767px) {
    gap: 25px;
  }
}

.form_title {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 70px;
  line-height: 140%;

  @media screen and (max-width: 1439px) {
    font-size: 56px;
  }

  @media screen and (max-width: 790px) {
    font-size: 32px;
  }
}

.form_description {
  font-weight: 500;
  font-size: 30px;
  line-height: 140%;
  max-width: 420px;

  @media screen and (max-width: 1439px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    max-width: 520px;
  }

  @media screen and (max-width: 790px) {
    font-size: 225px;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
  }
}

.descr_mark {
  font-weight: 700;
  background-color: #12e2b0;
}

@media screen and (min-width: 767px) {
  .footer {
    width: 100%;
    height: 278px;
    padding: 0px 30px 120px;
    flex-direction: row;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 40px;
    grid-column-gap: 25px;

    a,
    p {
      font-size: 18px;
      line-height: 150%;
      color: #1e1f21;
      text-decoration: none;
      font-family: 'Proxima Nova';
      font-weight: bold;
      text-align: left;
    }

    &--menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100%;
      grid-area: 1 / 1 / 2 / 2;
    }

    &--contact {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100%;
      grid-area: 1 / 2 / 2 / 3;

      &--item {
        text-align: left;
        margin-bottom: 24px;

        p {
          margin-bottom: 4px;
        }

        a {
          font-size: 24px;
        }
      }
    }

    &--social {
      grid-area: 1 / 4 / 2 / 5;
      text-align: right;
    }

    &--address {
      grid-area: 1 / 3 / 2 / 4;
    }

    &--private {
      grid-area: 2 / 1 / 3 / 5;
      text-align: right;
    }
  }
}

@media screen and (min-width: 1280px) {
  .footer {
    width: 100%;
    height: 278px;
    padding: 0px 8.34% 60px;
    box-sizing: border-box;
    color: #1e1f21;
    position: relative;

    a,
    p {
      font-size: 18px;
      line-height: 150%;
      color: #1e1f21;
      text-decoration: none;
      font-family: 'Proxima Nova';
      font-weight: bold;
      text-align: left;
    }

    span {
      text-align: right;
      position: absolute;
      bottom: 60px;
      right: 8.34%;
      left: inherit;
      transform: none;
    }

    &--menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100%;
    }

    &--contact {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100%;

      &--item {
        text-align: left;

        p {
          margin-bottom: 4px;
        }

        a {
          font-size: 24px;
        }
      }
    }

    &--social {
      position: relative;
      right: inherit;
      bottom: inherit;
    }
  }
}

@media screen and (min-width: 1900px) {
  .footer {
    &.home {
      .footer--menu {
        a {
          font-size: 24px;
          line-height: 150%;
        }
      }

      p {
        font-size: 24px;
        line-height: 150%;
      }

      span {
        font-size: 18px;
        line-height: 150%;
      }

      &--contact--item a {
        font-size: 32px;
        line-height: 150%;
      }
    }
  }
}
</style>
