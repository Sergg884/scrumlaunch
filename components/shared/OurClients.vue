<template>
  <section>
    <div class="title">
      <h2 class="title-global">
        Our clients
      </h2>
    </div>
    <div class="clients">
      <div class="client" v-for="client in clients" :key="client.alt">
        <nuxt-img :src="client.img" :alt="client.alt" />
      </div>
    </div>
    <div class="navigation">
      <div class="navigation-btn prev" @click="slide(-1)"></div>
      <div class="navigation-btn next" @click="slide(1)"></div>
    </div>
  </section>
</template>

<script>

export default {

  data() {
    return {
      clients: [
        {
          alt: 'Gipper',
          img: '/shared/our-clients/gipper.svg'
        },
        {
          alt: 'Vesta',
          img: '/shared/our-clients/vesta.svg'
        },
        {
          alt: 'CampusReel',
          img: '/shared/our-clients/campus-reel.svg'
        },
        {
          alt: 'Community Funded',
          img: '/shared/our-clients/community-funded.svg'
        },
        {
          alt: 'Benson Hill',
          img: '/shared/our-clients/benson-hill.svg'
        },
        {
          alt: 'Bid My Listing',
          img: '/shared/our-clients/bid-my-listing.svg'
        },
        {
          alt: 'Heli',
          img: '/shared/our-clients/heli.svg'
        },
        {
          alt: 'Harvest',
          img: '/shared/our-clients/harvest.svg'
        },

      ]
    }
  },

  methods: {
    slide() {
      
    }
  }

}

</script>

<style lang="scss" scoped>

section {
  display: flex;
  flex-direction: column;

  @include desktop-and-up {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  
  .title {
    text-align: left;
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      grid-area: 1 / 1 / 2 / 2;
      h2 {
        font-size: 30px;
      }
    }
  }

  .clients {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1px;
    margin-bottom: 40px;

    @include tablet-and-up {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 21px;
    }

    @include desktop-and-up {
      grid-template-columns: repeat(4, 1fr);
      width: fit-content;
      grid-area: 1 / 2 / 3 / 4;
      margin-bottom: 0px;
    }

    .client {
      outline: 1px solid $main-black;
      height: 92px;
      display: flex;
      justify-content: center;
      align-items: center;

      @include tablet-and-up {
        height: 142px;
      }

      @include desktop-and-up {
        width: 183px;
      }
      img {
        max-width: 105px;

        @include tablet-and-up {
          max-width: 142px;
        }
      }
    }
  }

  .navigation {
    display: flex;
    justify-content: center;
    gap: 40px;

    @include desktop-and-up {
      grid-area: 2 / 1 / 3 / 2;
      align-items: end;
      justify-content: flex-start;
    }
    .navigation-btn {
      width: 61px;
      height: 30px;
      background-size: contain;
      background-image: url(/shared/arrow_not_filled.svg);
      cursor: pointer;
      z-index: 100;
      @include tablet-and-up {
        width: 75px;
        height: 37px;
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
  }
}

</style>