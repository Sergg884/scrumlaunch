<template>
  <div class="case-studies">
    <section>
      <div class="case-study">
        <h4>
          Case studies.
        </h4>

        <VueSlickCarousel v-bind="settings" class="content">
          <div v-for="company in companies" v-bind:key="company.name" class="info">
            <div class="text-container">
              <p class="name">
                {{ company.name }}
              </p>
              <p class="description">
                {{ company.description }}
              </p>
              <div class="indicators">
                <div v-for="i in company.indicators" :key="i.title" class="indicator">
                  <p class="indicator__title">
                    {{ i.title }}
                  </p>
                  <p class="indicator__description">
                    {{ i.description }}
                  </p>
                </div>
              </div>
              <BaseButton class="case-button" :to="company.url">
                View Case Study
              </BaseButton>
            </div>
            <div class="img-container">
              <nuxt-img format="webp" :class="`desktop ${company.class}`" :src="company.desctopImg" :alt="company.name + '-desktop'" />
              <nuxt-img format="webp" :class="`mobile ${company.class}`" :src="company.mobileImg" :alt="company.name + '-mobile'" />
            </div>
            <BaseButton class="case-button-mobile" :to="company.url">
              View Case Study
            </BaseButton>
          </div>
          <template #customPaging="page">
            <div class="dot">
              <div>
              {{ page }}
              </div>
            </div>
          </template>
        </VueSlickCarousel>
        <BaseButton class="view-all-button view-all-mobile" :to="'/work'">
          View All
        </BaseButton>
      </div>
    </section>
    <BaseButton class="view-all-button" :to="'/work'">
      View All
    </BaseButton>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'

export default {

  components: {
    VueSlickCarousel
  },

  data() {
    return {
      isActive: false,
      current: 0,
      settings: {
        "dots": true,
        "arrows": false,
        "focusOnSelect": false,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "swipe": false,
        // "autoplay": true,
        // "autoplaySpeed": 7000
      },
      companies: [
        {
          name: 'Harvest',
          class: 'harvest',
          description: 'From an idea to a market leader with millions of users powered by ScrumLaunch.',
          indicators: [
            {
              title: '10M',
              description: 'Active users'
            },
            {
              title: '$3M',
              description: 'Saved on Development Costs'
            },
            {
              title: '15',
              description: 'Dedicated team members'
            },
          ],
          desctopImg: '/pages/home/case-studies/harvest-desktop.png',
          mobileImg: '/pages/home/case-studies/harvest-mobile.png',
          url: '/work/harvest'
        },
        {
          name: 'Campus Reel',
          class: 'campus',
          description: 'Leader in virtual college tours for Universities and graduate programs across the US.',
          indicators: [
            {
              title: '50M',
              description: 'Active users'
            },
            {
              title: '$7M',
              description: 'Saved on Development Costs'
            },
            {
              title: '6M',
              description: 'Keyword value per year'
            },
          ],
          desctopImg: '/pages/home/case-studies/campus-desktop.png',
          mobileImg: '/pages/home/case-studies/campus-mobile.png',
          url: '/work/campus-reel'
        },
        {
          name: 'Vest Home',
          class: 'vesta',
          description: 'Vesta Home collaborated with ScrumLaunch to develop and launch their digital platform, crucial for their ongoing business.',
          indicators: [
            {
              title: '40%',
              description: 'Grow revenue YoY'
            },
            {
              title: '$10M',
              description: 'Saved on Development Costs'
            },
            {
              title: '170%',
              description: 'Organic Traffic growth'
            },
          ],
          desctopImg: '/pages/home/case-studies/vesta-desktop.png',
          mobileImg: '/pages/home/case-studies/vesta-mobile.png',
          url: '/work/vesta'
        },
        {
          name: 'Gipper',
          class: 'gipper',
          description: 'Gipper is pioneering the fast growing brand sponsorship market for young athletes and associated institutions.',
          indicators: [
            {
              title: '500%',
              description: 'Уear over year growth rate'
            },
            {
              title: '$10M',
              description: 'Saved on Development Costs'
            },
            {
              title: '2000+',
              description: 'Saas customers supported'
            },
          ],
          desctopImg: '/pages/home/case-studies/gipper-desktop.png',
          mobileImg: '/pages/home/case-studies/gipper-mobile.png',
          url: '/work/gipper'
        },
      ]
    }
  },
  methods: {
    setCurrent(index) {
      this.current = index
    }
  }

}
</script>

<style lang="scss" scoped>

section {
  padding: 0;
  margin: 0;
  max-width: 100%;
  background-color: $main-black;
}

.case-study {
  background-color: $main-black;
  color: #fff;
  padding: 26px 0px;

  @include desktop-and-up {
    max-width: 1440px;
    width: 1440px;
    margin: auto;
    padding-bottom: 60px;
  }

  h4 {
    text-align: left;
    font-weight: 700;
    color: #fff;
    font-size: 18px;
    margin-bottom: 50px;
    margin-left: 20px;

    @include tablet-and-up {
      margin-left: 30px;
    }

    @include desktop-and-up {
      margin-top: 15px;
      margin-bottom: 56px;
      margin-left: 100px;
      font-size: 30px;
    }
  }
}

a.view-all-button {
  display: none;
  width: 88px;
  height: 88px;
  font-size: 12px;
  border-radius: 53.01px;
  padding: 35px 17px;

  @include tablet-and-up {
    width: 124px;
    height: 124px;
    font-size: 14px;
    border-radius: 74.7px;
    padding: 52px 31px;
    margin: 60px auto 40px;
  }

  @include desktop-and-up {
    display: flex;
    width: 160px;
    height: 160px;
    font-size: 18px;
    border-radius: 100px;
    margin: 140px auto 240px;
  }
}

a.view-all-mobile {
  display: block;
  margin: 30px auto;

  @include desktop-and-up {
    display: none;
  }
}

.info {
  display: flex !important;
  flex-direction: column;
  overflow: hidden;
  padding-left: 20px;
  padding-bottom: 30px;

  @include tablet-and-up {
    flex-direction: row;
    padding-left: 30px;
  }

  @include desktop-and-up {
    padding-left: 100px;
  }
}

.text-container {
  text-align: center;
  align-self: center;
  width: 100%;
  padding-right: 20px;

  @include tablet-and-up {
    padding-right: 54px;
    width: 65%;
  }

  @include desktop-and-up {
    width: 50%;
  }
}

.name {
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;

  @include tablet-and-up {
    font-size: 30px;
  }
}

.description {
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 28px;

  @include tablet-and-up {
    font-size: 18px;
  }

    @include desktop-and-up {
    font-size: 20px;
  }
}

.indicators {
  display: flex;
  justify-content: space-between;

  @include desktop-and-up {
    gap: 34px;
  }

  .indicator {
    padding: 10px;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    width: 30%;

    @include tablet-and-up {
      padding: 18px;
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      color: #FFF;
      border: 1px solid #fff;
    }

    &__title {
      font-weight: 900;
      font-size: 24px;
      margin-bottom: 0;

      @include desktop-and-up {
        font-size: 30px;
      }
    }
    &__description {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 0;

      @include tablet-and-up {
        font-size: 16px;
      }

      @include desktop-and-up {
        font-size: 18px;
      }
    }
  }
}

a.case-button {
  display: none;
  font-size: 12px;
  width: 300px;

  @include tablet-and-up {
    display: block;
    font-size: 16px;
  }
}

a.case-button-mobile {
  width: 255px;
  margin: 0px auto 20px;
  font-size: 12px;

  @include tablet-and-up {
    display: none;
  }
}

.text-container button {
  display: none;
  @include tablet-and-up {
    display: block;
  }
}

.img-container {
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin: 50px 0;

  .desktop {
    display: none;

    @include tablet-and-up {
      display: block;
    }
  }

  .mobile {
    width: 100%;
    margin-right: -7px;
  }

  @include tablet-and-up {
    width: 35%;
    height: 545px;
    padding-bottom: 30px;
    justify-content: initial;
  }

  @include tablet-landscape-and-up {
    width: 50%;
    height: 680px;
    margin: 0px auto;
  }
}

.content > .slick-dots {
  top: 50px !important;
}

.dot {
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 100%;
  border: 1px solid $main-black;
  background-color: #F4F2EC;
  transition: all 0.5s;

  &:hover {
    background-color: $main-green;
    border: unset;
  }

  div {
    display: none;
  }

  @include tablet-and-up {
    width: 20px;
    height: 20px;
  }
}

.slick-active > .dot {
  cursor: pointer;
  border-radius: 100%;
  background-color: $main-green;
}

</style>