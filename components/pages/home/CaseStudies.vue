<template>
  <div class="case-studies">
    <section>
      <div class="case-study">
        <h4>
          Case studies.
        </h4>
        <div class="info">
          <div class="text-container">
            <p class="name">
              {{ companies[current].name }}
            </p>
            <p class="description">
              {{ companies[current].description }}
            </p>
            <div class="indicators">
              <div v-for="i in companies[current].indicators" :key="i.title" class="indicator">
                <p class="indicator__title">
                  {{ i.title }}
                </p>
                <p class="indicator__description">
                  {{ i.description }}
                </p>
              </div>
            </div>
            <BaseButton>
              View Case Study
            </BaseButton>
          </div>
          <div class="img-container">
            <nuxt-img class="desktop" :src="companies[current].desctopImg" :alt="companies[current].name + '-desktop'" />
            <nuxt-img class="mobile" :src="companies[current].mobileImg" :alt="companies[current].name + '-mobile'" />
          </div>
          <BaseButton class="case-button">
            View Case Study
          </BaseButton>
        </div>
        <div class="navigation">
          <div v-for="i in companies.length" :class="i - 1 === current ? 'active' : 'dot'" @click="setCurrent(i - 1)">
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {

  data() {
    return {
      isActive: false,
      current: 0,
      companies: [
        {
          name: 'Harvest',
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
          desctopImg: '/pages/home/case-studies/harvest-desk.svg',
          mobileImg: '/pages/home/case-studies/harvest-mob.jpg',
        },
        {
          name: 'Harvest1',
          description: 'From an idea to a market leader with millions of users powered by ScrumLaunch.',
          indicators: [
            {
              title: '11M',
              description: 'Active users'
            },
            {
              title: '$4M',
              description: 'Saved on Development Costs'
            },
            {
              title: '16',
              description: 'Dedicated team members'
            },
          ],
          desctopImg: '/pages/home/case-studies/harvest-desk.svg',
          mobileImg: '/pages/home/case-studies/harvest-mob.jpg',
        },
        {
          name: 'Harvest2',
          description: 'From an idea to a market leader with millions of users powered by ScrumLaunch.',
          indicators: [
            {
              title: '11M',
              description: 'Active users'
            },
            {
              title: '$4M',
              description: 'Saved on Development Costs'
            },
            {
              title: '16',
              description: 'Dedicated team members'
            },
          ],
          desctopImg: '/pages/home/case-studies/harvest-desk.jpg',
          mobileImg: '/pages/home/case-studies/harvest-mob.jpg',
        },
        {
          name: 'Harvest4',
          description: 'From an idea to a market leader with millions of users powered by ScrumLaunch.',
          indicators: [
            {
              title: '11M',
              description: 'Active users'
            },
            {
              title: '$4M',
              description: 'Saved on Development Costs'
            },
            {
              title: '16',
              description: 'Dedicated team members'
            },
          ],
          desctopImg: '/pages/home/case-studies/harvest-desk.jpg',
          mobileImg: '/pages/home/case-studies/harvest-mob.jpg',
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
  margin-bottom: 240px;
  margin: 0;
  max-width: 100%;

  @include tablet-and-up {
    background-color: none;
    margin: auto;
  }

  @include desktop-and-up {
    max-width: 1320px;
    margin-left: 10%;
  }
}

.case-study {
  background-color: $main-black;
  color: #fff;
  padding: 26px 20px;
  overflow: hidden;

  @include desktop-and-up {
    max-width: 1320px;
    width: 1320px;
    margin-left: auto;
    padding-bottom: 93px;
  }
}

h4 {
  text-align: left;
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  margin-bottom: 56px;

  @include tablet-and-up {
    font-size: 30px;
  }

  @include desktop-and-up {
    margin-bottom: 0px;
  }
}

.info {
  @include tablet-and-up {
    display: flex;
    gap: 70px;
  }
}

.text-container {
  text-align: center;
  align-self: center;
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
    font-size: 20px;
  }
}

.indicators {
  display: flex;
  gap: 20px;

  .indicator {
    padding: 18px;
    background-color: unset;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    flex-basis: 0;
    flex-grow: 1;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      color: $main-black;
      border: 1px solid transparent;
      background-color: #fff;
    }

    &__title {
      font-weight: 900;
      font-size: 24px;
      margin-bottom: 0;
      @include tablet-and-up {
        font-size: 30px;
      }
    }
    &__description {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 0;
      @include tablet-and-up {
        font-size: 18px;
      }
    }
  }
}

.base-button {
  margin: 20px auto;
}

.case-button {
  margin: 0 auto;
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
  position: relative;
  margin: 50px auto;

  @include tablet-and-up {
    margin-right: -42px;
    height: 545px;
    padding-bottom: 30px;
  }

  @include desktop-and-up {
    height: 680px;
    width: 50%;
    margin: 0px auto;
  }
}

.desktop {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 80vw;
  margin-right: -20vw;

  @include tablet-and-up {
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    max-height: 100%;
  }

  @include desktop-and-up {
    width: 900px;
  }
}

.mobile {
  position: absolute;
  left: 5%;
  bottom: -10px;
  border-radius: 10px;
  border: 1px solid #000000;
  width: 20vw;
  max-height: 100%;

  @include tablet-and-up {
    border: 5px solid #000000;
    border-radius: 20px;
    height: 400px;
    width: auto;
  }

  @include desktop-and-up {
    bottom: 0px;
    border-radius: 24px;
    border: 6px solid #000000;
    left: 10%;
  }
}

.navigation {
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  gap: 20px;
  margin-top: 48px;
  .dot {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid $main-black;
    background-color: #F4F2EC;
    transition: all 0.5s;
    &:hover {
      background-color: $main-green;
      border: unset;
    }
  }
  .active {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 100%;
    background-color: $main-green;
  }
}

</style>