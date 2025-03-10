<template>
  <section>
    <h2 class="title-global">Client Testimonials</h2>
    <div class="carousel">
      <div class="navigation-btn prev" @click="slide(-1)"></div>
      <div class="navigation-btn next" @click="slide(1)"></div>
      <transition-group :name="transitionName" tag="div" class="slider-group">
        <div v-if="show" :key="current" class="slide">
          <nuxt-img 
            class="avatar"
            :src="slides[current].image"
            :alt="slides[current].name"
          />
          <div class="description">
            <p class="name">{{ slides[current].name }}</p>
            <div class="information">
              <p>{{ slides[current].position }}</p>
              <p class="dot">
                {{ slides[current].company }}
              </p>
            </div>
          </div>
          <nuxt-img class="rating" src="/shared/results_clutch.svg" />
          <p class="feedback">{{ slides[current].feedback }}</p>
        </div>
      </transition-group>
    </div>
    <BaseButton class="review-btn" :href="slides[current].clutch">
      <div class="btn-inner">
        <img src="/shared/clutch-logo-black.svg" alt="clutch">
        <p>See {{ slides[current].short }} full review</p>
      </div>
    </BaseButton>
  </section>
</template>

<script>

export default {
  
  data: () => ({
    current: 0,
    direction: 1,
    transitionName: "fade",
    show: false,
    slides: [
      {
        image: '/shared/testimonials/rob_carrol.png',
        withIcon: true,
        feedback:
          '“ScrumLaunch software developers have enabled CampusReel to go from an idea to a product with millions of monthly unique users over the past 5 years. We could not have gotten to where we are today without them.”',
        name: 'Rob Carroll',
        short: "Rob's",
        position: 'CEO',
        company: 'CampusReel',
        clutch: 'https://clutch.co/profile/scrumlaunch#review-792050',
      },
      {
        image: '/shared/testimonials/matt_glick.jpeg',
        withIcon: true,
        feedback:
          "“ScrumLaunch has been with us since day 1. We've been working with them for 5 years. From an idea to a market leader in our space backed by leading venture funds”",
        name: 'Matt Glick',
        short: "Matt's",
        position: 'CEO',
        company: 'Gipper',
        clutch: 'https://clutch.co/profile/scrumlaunch#review-754618',
      },
      {
        image: '/shared/testimonials/henry_priest.png',
        withIcon: true,
        feedback: '“ScrumLaunch listens to what we need in candidates for our roles.”',
        name: 'Henry Priest',
        short: "Henry's",
        position: 'CEO',
        company: 'Benson Hill',
        clutch: 'https://clutch.co/profile/scrumlaunch#review-2038753',
      },
      {
        image: '/shared/testimonials/ryan_miller.webp',
        withIcon: false,
        feedback: '“The partnership with ScrumLaunch has sped up the product launch of the company\'s product.”',
        name: 'Ryan Miller',
        short: "Ryan's",
        position: 'CEO',
        company: 'MODULAR11',
        clutch: 'https://clutch.co/profile/scrumlaunch#review-1925392',
      },
    ],
  }),

  mounted() {
    this.show = true;
  },

  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      let len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    }
  }
}
</script>

<style lang="scss" scoped>

h2 {
  @include desktop-and-up {
    text-align: center;
  }
}
.carousel {
  position: relative;
  width: 100%;
  margin-top: 40px;
  
  @include tablet-and-up {
    margin-top: 60px;
  }

  .navigation-btn { 
    position: absolute;
    width: 61px;
    height: 30px;
    background-size: contain;
    top: 50px;
    background-image: url(/shared/arrow_not_filled.svg);
    cursor: pointer;
    z-index: 100;
    @include tablet-and-up {
      width: 75px;
      height: 37px;
      top: 80px;
    }

    &:hover {
      background-image: url(/shared/arrow_filled.svg);
      transform: rotate(180deg);
    }
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
    transform: rotate(180deg);
    &:hover {
      transform: rotate(0deg);
    }
  }
  .slider-group {
    position: relative;
    max-width: 720px;
    height: 490px;
    overflow: hidden;
    margin: auto;

    @include tablet-and-up {
      height: 570px;
    }
    @include desktop-and-up {
      height: 612px;
    }
    .slide {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .avatar {
        border-radius: 100%;
        width: 130px;
        height: 130px;

        @include tablet-and-up {
          width: 200px;
          height: 200px;
        }
      }
      .description {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .name {
          font-weight: 700;
          font-size: 18px;
          line-height: 140%;
          margin-top: 26px;
          margin-bottom: 10px;

          @include tablet-and-up {
            margin-bottom: 12px;
            font-size: 24px;
          }

          @include desktop-and-up {
            margin-top: 40px;
            font-size: 30px;
          }
        }

        .information {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 30px;

          @include tablet-and-up {
            margin-bottom: 40px;
          }

          @include desktop-and-up {
            margin-bottom: 60px;
          }

          .dot {
            position: relative;
            &::before {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              background: #1e1f21;
              border-radius: 50%;
              top: 0;
              bottom: 0;
              margin: auto;
              left: -18px;
            }
          }
        }
      }
      .rating {
        margin-bottom: 25px;
      }
      .feedback {
        font-weight: 400;
        font-size: 16px;
        font-style: italic;
        color: $main-black;
        margin: auto;
        margin-bottom: 40px;

        @include  tablet-and-up {
          font-size: 20px;
          margin-bottom: 60px;
        }
      }
    }
  }
}

::v-deep .review-btn {
  margin: auto;
  padding: 18px 24px;

  @include tablet-and-up {
    padding: 29px 32px;
  }
  

  .btn-inner {
    display: flex;
    gap: 16px;
    font-size: 12px;

    p {
      margin-top: 3px;
      margin-bottom: 0;
    }
  }
}

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

</style>

