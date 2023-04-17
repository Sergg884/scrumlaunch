<template>
  <section>
    <h2 class="title-global">
      Our superpowers
    </h2>
    <b-row class="justify-content-center" no-gutters>
      <b-col class="tab" cols="12" md="6" lg="4" v-for="(tab, index) in tabs" :key="index">
        <nuxt-img :src="tab.img" :alt="'tab-' + index + 1"/>
        <p>{{ tab.text }}</p>
      </b-col>
    </b-row>
  </section>
</template>

<script>

export default {

  data() {
    return {
      tabs: [
        {
          img: '/pages/home/superpowers/tab-1.svg',
          text: 'A Long-term technology partner',
        },
        {
          img: '/pages/home/superpowers/tab-2.svg',
          text: 'Support for founders and early-stage companies ',
        },
        {
          img: '/pages/home/superpowers/tab-3.svg',
          text: 'Personalized, dedicated account management',
        },
        {
          img: '/pages/home/superpowers/tab-4.svg',
          text: 'Global talent insights and strategies',
        },
        {
          img: '/pages/home/superpowers/tab-5.svg',
          text: 'Outcome-oriented focus on business success',
        },
      ]
    }
  },
}

</script>

<style lang="scss" scoped>

section {
  margin-top: 0;
}

h2 {
  margin-bottom: 80px;
}
.tab {
  border: 1px solid $main-black;
  text-align: left;
  margin-top: -1px;
  margin-left: -1px;
  padding: 20px 28px;

  @include tablet-and-up {
    padding: 24px;
  }

  @include desktop-and-up {
    padding: 40px;
  }

  img {
    margin-bottom: 20px;

    @include desktop-and-up {
      margin-bottom: 30px;
    }
  }

  p {
    font-weight: 500;
    font-size: 18px;
    color: $main-black;
    margin-bottom: 0;

    @include tablet-and-up {
      font-size: 18px;
    }

    @include desktop-and-up {
      font-size: 26px;
    }
  }
}

</style>