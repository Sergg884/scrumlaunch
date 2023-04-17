<template>
  <div class="container">
    <div class="leading_result">
      <h3 class="title">Industry Leading Results</h3>
      <div class="arrow_container">
        <div class="testimonials_nav_prev" @click="prevStep()"></div>
        <div class="testimonials_nav_next" @click="nextStep()"></div>
      </div>
      <div class="slider_container">
        <div>
          <img
            :src="sliderInfo[sliderStep].image"
            :alt="sliderInfo[sliderStep].name"
            class="image"
          />
        </div>
        <div class="badge">
          <img src="/images/industry-leading-results/results_clutch.svg" />
        </div>
        <p class="feedback">{{ sliderInfo[sliderStep].feedback }}</p>
        <div class="container_with_icon">
          <div class="ct">
            <p class="name">{{ sliderInfo[sliderStep].name }}</p>
            <div class="company_information__container">
              <p>{{ sliderInfo[sliderStep].position }}</p>
              <p class="company_information__dot">
                {{ sliderInfo[sliderStep].company }}
              </p>
            </div>
          </div>
          <img
            v-show="sliderInfo[sliderStep].withIcon"
            src="/images/industry-leading-results/30_forbes.png"
            alt="30_forbes"
          />
        </div>
      </div>
    </div>
    <div class="trusted_container">
      <img
        src="/images/industry-leading-results/trusted_slider.svg"
        alt="trusted_slider"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sliderInfo: {
      1: {
        image: '/images/industry-leading-results/rob_carrol.png',
        withIcon: true,
        feedback:
          '“ScrumLaunch software developers have enabled CampusReel to go from an idea to a product with millions of monthly unique users over the past 5 years. We could not have gotten to where we are today without them.”',
        name: 'Rob Carroll',
        position: 'CEO',
        company: 'CampusReel',
      },
      2: {
        image: '/images/industry-leading-results/matt_glick.jpeg',
        withIcon: false,
        feedback:
          "“ScrumLaunch has been with us since day 1. We've been working with them for 5 years. From an idea to a market leader in our space backed by leading venture funds”",
        name: 'Matt Glick',
        position: 'CEO',
        company: 'Gipper',
      },
      3: {
        image: '/images/industry-leading-results/clare_maxwell.jpeg',
        withIcon: false,
        feedback:
          '“ScrumLaunch enabled us to completely restructure Community Funded over the past two years and reduce costs by 5x making the company profitable and the technology much more scalable and solid.”',
        name: 'Clare Maxwell',
        position: 'Venture Investor & Board Observer',
        company: 'Community Funded',
      },
      4: {
        image: '/images/industry-leading-results/nami_baral.jpeg',
        withIcon: false,
        feedback:
          '“ScrumLaunch was an integral partner for the entire lifecycle of our project from launch, venture fundraising to acquisition by a FinTech Unicorn.”',
        name: 'Nami Baral',
        position: 'CEO',
        company: 'Harvest',
      },
    },
    sliderStep: 1,
  }),

  methods: {
    nextStep() {
      if (this.sliderStep === 4) {
        this.sliderStep = 1
      } else {
        this.sliderStep++
      }
    },

    prevStep() {
      if (this.sliderStep === 1) {
        this.sliderStep = 4
      } else {
        this.sliderStep--
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 240px;
  padding-top: 240px;
  padding-left: 8.32%;
  padding-right: 8.32%;

  @media screen and (max-width: 1440px) {
    padding-bottom: 140px;
    padding-top: 140px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 80px;
    padding-top: 80px;
    margin-bottom: 0px;
  }
}

.container_with_icon {
  display: flex;
  align-items: center;
  justify-content: center;

  .ct {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & > img {
    margin-top: 40px;
    margin-left: 23px;
  }
}

.image {
  border-radius: 50%;
  width: 200px;
  height: 200px;

  @media screen and (max-width: 768px) {
    width: 132px;
    height: 132px;
  }
}

.leading_result {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.arrow_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 240px;

  @media screen and (max-width: 1440px) {
    top: 204px;
  }

  @media screen and (max-width: 768px) {
    top: 142px;
  }

  @media screen and (max-width: 425px) {
    top: 174px;
  }
}

.testimonials_nav_prev {
  width: 75px;
  height: 37px;
  background-image: url(/images/industry-leading-results/arrow_not_filled.svg);
  cursor: pointer;

  &:hover {
    background-image: url(/images/industry-leading-results/arrow_filled.svg);
    transform: scale(-1, 1);
  }
}

.testimonials_nav_next {
  width: 75px;
  height: 37px;
  background-image: url(/images/industry-leading-results/arrow_not_filled.svg);
  cursor: pointer;
  transform: scale(-1, 1);

  &:hover {
    background-image: url(/images/industry-leading-results/arrow_filled.svg);
    transform: scale(1, -1);
  }
}

.slider_container {
  margin-top: 80px;
  margin-bottom: 142px;

  @media screen and (max-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
}

.trusted_container {
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    & > img {
      max-width: 100%;
    }
  }
}

.title {
  font-weight: 900;
  font-size: 56px;
  line-height: 140%;
  text-transform: uppercase;

  @media screen and (max-width: 1440px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: left;
  }
}

.feedback {
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
  text-align: center;
  font-style: italic;
  max-width: 712px;

  @media screen and (max-width: 1440px) {
    font-size: 20px;
    max-width: 437px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}

.name {
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  margin-top: 40px;
  margin-bottom: 12px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
}

.company_information {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;

    @media screen and (max-width: 768px) {
      gap: 5px;
      flex-direction: column;
    }

    & > p {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
    }

    @media screen and (max-width: 1440px) {
      & > p {
        font-size: 14px;
      }
    }

    @media screen and (max-width: 768px) {
      & > p {
        font-size: 12px;
      }
    }
  }

  &__dot {
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

.badge {
  margin-top: 60px;
  margin-bottom: 26px;

  @media screen and (max-width: 1440px) {
    margin-top: 40px;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 425px) {
     & > img {
      width: 100%;
     }
  }
}
</style>
