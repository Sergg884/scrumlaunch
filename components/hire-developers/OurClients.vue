<template>
  <section class="container">
    <div class="row">
      <div class="navigation-panel">
        <h2>Our clients</h2>
        <div class="arrow_container">
          <div class="testimonials_nav_prev" @click="prevStep()"></div>
          <div class="testimonials_nav_next" @click="nextStep()"></div>
        </div>
      </div>
      <div class="clients">
        <div
          class="client"
          v-for="client in clients"
          :key="client.alt"
        >
          <img :src="client.img" :alt="client.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  data: () => ({
    clients: [
      {
        img: '/images/hire-developers/clients/gipper.jpg',
        alt: 'gipper'
      },
      {
        img: '/images/hire-developers/clients/vesta.jpg',
        alt: 'vesta'
      },
      {
        img: '/images/hire-developers/clients/campus-reel.jpg',
        alt: 'campus reel'
      },
      {
        img: '/images/hire-developers/clients/community-funded.jpg',
        alt: 'comunity funded'
      },
      {
        img: '/images/hire-developers/clients/campus-reel.jpg',
        alt: 'campus reel'
      },
      {
        img: '/images/hire-developers/clients/community-funded.jpg',
        alt: 'comunity funded'
      },
      {
        img: '/images/hire-developers/clients/heli.jpg',
        alt: 'heli'
      },
      {
        img: '/images/hire-developers/clients/harvest.jpg',
        alt: 'harvest'
      },
    ]
  }),

  methods: {
    nextStep() {

    },

    prevStep() {

    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  box-sizing: border-box;
  max-width: 1440px;
  padding: 120px;
  margin: auto;
  text-align: left;

  .row {
    display: flex;
    flex-wrap: nowrap;
    flex: 1 1 auto;

    .col {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%
    }
  }
}

.row {
  gap: 200px;
  justify-content: space-between;
  .navigation-panel {
    position: relative;
    .arrow_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      position: absolute;
      bottom: 0;

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
    }
  }

  .clients {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .client {
      height: 142px;
      width: 183px;
      border: 1px solid $main-black;
      position: relative;

      img {
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
}

</style>
