<template>
  <section >
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
          <b-row class="indicators" no-gutters>
            <b-col v-for="i in companies[current].indicators" class="indicator" :key="i.title">
              <p class="indicator__title">
                {{ i.title }}
              </p>
              <p class="indicator__description">
                {{ i.description }}
              </p>
            </b-col>
          </b-row>
          <BaseButton>
            view case
          </BaseButton>
        </div>
        <div class="img-container">
          <nuxt-img class="desktop" :src="companies[current].desctopImg" :alt="companies[current].name + '-desktop'" />
          <nuxt-img class="mobile" :src="companies[current].mobileImg" :alt="companies[current].name + '-mobile'" />
        </div>
      </div>
    </div>
    <div class="navigation">
      <div v-for="i in companies.length" :class="i - 1 === current ? 'active' : 'dot'" @click="setCurrent(i - 1)">
      </div>
    </div>
  </section>
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
          desctopImg: '/pages/home/case-studies/harvest-desk.jpg',
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
          desctopImg: '/pages/home/case-studies/harvest-desk.jpg',
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
  width: 100%;
  margin: auto;
  margin-bottom: 240px;
  .case-study {
    max-width: 1320px;
    background-color: $main-black;
    padding: 42px;
    padding-bottom: 93px;
    margin-left: auto;
    @media screen and (min-width: 1440px) {
      margin-right: auto;
    }
    position: relative;
    // &::after {
    //   content: "";
    //   height: 100%;
    //   background-color: #1e1f21;
    //   width: 50vw;
    //   position: absolute;
    //   right: -50vw;
    //   top: 0;
    //   }
    h4 {
      text-align: left;
      font-weight: 700;
      font-size: 30px;
      color: #fff;
      margin-bottom: 40px;
    }
    .info {
      display: flex;
      gap: 70px;
      .text-container {
        align-self: center;
        text-align: left;
        color: #fff;
        .name {
          font-weight: 800;
          font-size: 30px;
        }
        .description {
          font-weight: 500;
          font-size: 20px;
        }
        .indicators {
          gap: 20px;
          margin-bottom: 80px;
          margin-top: 50px;
          .indicator {
            padding: 18px;
            background-color: #fff;
            text-align: center;
            &__title {
              font-weight: 900;
              font-size: 30px;
              color: $main-black;
              margin-bottom: 0;
            }
            &__description {
              font-weight: 400;
              font-size: 18px;
              color: $main-black;
              margin-bottom: 0;
            }
          }
        }
      }
      .img-container {
        margin-right: -42px;
        position: relative;
        .desktop {
          border-top-left-radius: 24px;
          border-bottom-left-radius: 24px;
        }
        .mobile {
          position: absolute;
          left: 70px;
          bottom: -51px;
          border-radius: 24px;
          border: 6px solid #000000;
        }
      }
    }
  }
}

.navigation {
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