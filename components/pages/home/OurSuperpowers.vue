<template>
  <section>
    <h2 class="title-global">
      Our superpowers
    </h2>
    <b-row class="justify-content-center" no-gutters>
      <b-col v-for="(tab, index) in tabs" :key="index" class="tab" cols="12" md="6" lg="4">
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
          text: 'Rapid new product innovation',
        },
        {
          img: '/pages/home/superpowers/tab-2.svg',
          text: 'Venture acceleration & product led growth',
        },
        {
          img: '/pages/home/superpowers/tab-3.svg',
          text: 'Launching & scaling global teams',
        },
        {
          img: '/pages/home/superpowers/tab-4.svg',
          text: 'Accelerated software development velocity',
        },
        {
          img: '/pages/home/superpowers/tab-5.svg',
          text: 'Ability to drive business outcomes',
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
  text-align: center;
}
.tab {
  border: 1px solid $main-black;
  text-align: left;
  margin-top: -1px;
  margin-left: -1px;
  padding: 20px 28px;
  transition: all 0.3s ease;

  @include tablet-and-up {
    padding: 24px;
  }

  @include desktop-and-up {
    padding: 40px;
  }

  &:hover {
    background-color: $main-green;
    border: 1px solid $main-green;
    height: revert;

    img {
      opacity: 0;
    }

    p {
      top: -73px;

      @include desktop-and-up {
        top: -83px;
      }
    }
  }

  img {
    opacity: 1;
    margin-bottom: 20px;
    transition: opacity 0.3s ease;

    @include desktop-and-up {
      margin-bottom: 30px;
    }
  }

  p {
    font-weight: 500;
    font-size: 18px;
    color: $main-black;
    margin-bottom: 0;
    transition: all 0.3s ease;
    position: relative;
    top: 0;

    @include tablet-and-up {
      font-size: 18px;
    }

    @include desktop-and-up {
      font-size: 26px;
    }
  }
}

</style>