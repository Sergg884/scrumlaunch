<template>
  <div>
    <section class="hero-section">
      <div class="hero">
        <AppearFromMask>
          <h1 class="title-big">
            OUR process
          </h1>
        </AppearFromMask>
        <AppearFromMask>
          <p class="text-main">
            We focus on Communication, Collaboration, Context & Clarity
          </p>
        </AppearFromMask>
      </div>
      <div class="animation">
        <lottie
          name="rightFoundation"
          loop
          :options="{
            animationData: require('~/assets/animation/right-foundation.json'),
          }"
        />
      </div>
      
      <div class="foundations">
        <div class="foundation__1">
          Defining clear business goals and success criteria
        </div>
        <div class="foundation__2">
            Providing dedicated design and engineering teams
        </div>
        <div class="foundation__3">
          Implementing rapid feedback loops and iterations
        </div>
        <div class="foundation__4">
          Prioritizing communication and collaboration to mitigate the likelihood of surprises
        </div>
      </div>
    </section>
    
    <b-container fluid class="approach-section p-0" no-gutters>
      <section >
        <div class="header">
          <h2 class="title-global">Our approach</h2>
          <img
            :src="require('~/assets/icons/process/coffee-cup.svg')"
            class="icon"
          />
        </div>
        <b-row class="approaches" no-gutters>
            <b-col
              cols="12"
              md="6"
              class="approach"
              v-for="i in approachItems"
              :key="i.number"
            >
              <p class="number">
                {{ i.number }}
              </p>
              <div class="text">
                <p class="title">
                  {{ i.title }}
                </p>
                <p class="description">
                  {{ i.description }}
                </p>
              </div>
              
            </b-col>
        </b-row>
      </section>
    </b-container>

    
    <ContactUs />
  </div>
 
</template>


<script>
import lottie from 'vue-lottie/src/lottie.vue'
import ContactUs from '~/components/shared/ContactUs.vue';

export default {
  components: {
    lottie,
    ContactUs
},

  scrollToTop: true,

  head: {
    title: 'Process',
    meta: [
      { hid: 'description', name: 'description', content: 'Process' }
    ],
  },

  data() {
    return {
      approachItems: [
        {
          number: '01',
          title: 'Pre-Kick Off',
          description:
            'Your team is assembled from our highly vetted talent pool based on your resourcing needs.',
        },
        {
          number: '02',
          title: 'Comprehensive understanding of product and business objectives',
          description:
            'We collaboratively review your business goals & product requirements to build a clear understanding of your vision, key metrics and desired product outcomes.',
        },
        {
          number: '03',
          title: 'Kick Off',
          description:
            'We adhere to your desired project management workflow so our team can seamlessly fit into your larger organization. Our goal is to become an important part of your ongoing team and plans.',
        },
        {
          number: '04',
          title: 'Post Kick Off',
          description:
            'Frequent communication and transparency are the keys to success in any engagement. We strive to produce high quality work output and be responsive to your ongoing business needs.',
        },
      ],
      activeApproach: null
    }
  },
  methods: {
    mouseOver(item) {
      this.activeApproach = item;
    },
    mouseOut() {
      this.activeApproach = null;
    }
  }

}
</script>

<style lang="scss" scoped>

.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
  .hero {
    width: 75%;

    @include tablet-and-up {
      width: 100%;
    }
  }
  .animation {
    position: absolute;
    top: -25px;
    height: 185px;
    aspect-ratio: 1/1;
    right: -40px;

    @include tablet-and-up {
      height: 200px;
      right: 15px;
    }

    @include desktop-and-up {
      right: 0;
      top: -180px;
      height: 650px;
    }
  }

  .foundations {
    margin-top: 30px;
    height: 275px;

    @include tablet-and-up {
      font-size: 12px;
      height: 400px ;
    }

    @include desktop-and-up {
      margin-top: 120px;
      height: 790px;
    }
    .foundation {
      position: absolute;
      border-radius: 100%;
      border: 1px solid $main-black;
      font-weight: 400;
      font-size: 9px;
      text-align: center;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      aspect-ratio: 1/1;
      padding: 6px;

      @include tablet-and-up {
        font-size: 12px;
        padding: 46px;
      }

      @include desktop-and-up {
        font-size: 18px;
      }

      &:hover {
        background-color: $main-green;
        border: 1px solid $main-green;
      }
      &__1 {
        @extend .foundation;
        height: 126px;
        left: 20px;
        top: 150px;

        @include tablet-and-up {
          top: 184px;
          height: 265px;
          left: 30px;
        }

        @include desktop-and-up {
          height: 450px;
          left: 120px;
          top: 299px;
        }
        
      }

      &__2 {
        @extend .foundation;
        height: 98px;
        left: 48px;
        top: 275px;

        @include tablet-and-up {
          height: 206px;
          left: 90px;
          top: 446px;
        }

        @include desktop-and-up {
          height: 350px;
          left: 242px;
          top: 742px;
        }
      }
      &__3 {
        @extend .foundation;
        height: 84px;
        left: 129px;
        top: 229px;

        @include tablet-and-up {
          height: 177px;
          left: 259px;
          top: 348px;
        }

        @include desktop-and-up {
          height: 300px;
          left: 519px;
          top: 562px;
        }
      }
      &__4 {
        @extend .foundation;
        height: 144px;
        left: 211px;
        top: 178px;

        @include tablet-and-up {
          height: 304px;
          left: 434px;
          top: 252px;
        }

        @include desktop-and-up {
          height: 516px;
          left: 806px;
          top: 556px;
        }
      }
    }
  }
}

.approach-section {
  background-color: $main-black;
  color: #fff;
  display: inline-block;

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    h2 {
      color: #fff;
    }
    @keyframes cup {
      0% {
        transform: rotate(-1.5deg);
      }
      50% {
        transform: rotate(1.5deg);
      }
      100% {
        transform: rotate(-1.5deg);
      }
    }
    .icon {
      transform-origin: bottom center;
      animation: cup 1s linear infinite;
    }
  }

  .approaches {
    .approach {
      text-align: left;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transition: 0.5s all;
      padding: 30px;
      height: 335px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;

      &:nth-child(odd) {
        @include tablet-and-up {
          border-right: 1px solid #fff;
        }
      }
      &:hover {
        background-color: #fff;
        color: $main-black;
        transform: scaleX(1.12);
        @include tablet-and-up {
          transform: scaleX(1);
        }
        .number {
          
          opacity: 0;
          transition: opacity 0s linear 0s;
        }
        .text {
          top: 40px;
          transform: translateY(0);
          color: $main-black;
          .description {
            display: block;
          }
        }
      }
      .number {
        font-weight: 500;
        font-size: 18px;
        transition: opacity 0s linear 0.3s;
        opacity: 1;
      }
      .text {
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s ease-in-out;
        height: 0;
        display: flex;
        flex-direction: column;

        .title {
          text-transform: uppercase;
          font-weight: 900;
          font-size: 30px;
        }

        .description {
          display: none;
          height: 0;
          margin-bottom: 0;
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }
}

</style>