<template>
  <div class="case-studies">
    <section class="hero-section">
      <div class="hero">
        <AppearFromMask>
          <h1 class="title-big">
            We design a lot of things
          </h1>
        </AppearFromMask>
        <AppearFromMask>
          <p class="text-main">
            We master digital production and development. What we also master is the fine art of listening. Truly listening. 
          </p>
        </AppearFromMask>
      </div>
      <img
        :src="require('~/assets/icons/planet.svg')"
        class="hero-img"
        alt="hero-planet"
      />
    </section>
    <section class="cases" v-if="projects">
      <div class="case" v-for="i in projects" :key="i.name" @click="navigateTo(i.url)">
        <img :src="require('~/assets/images/work' + i.url + '/preview.webp')" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  head: {
    title: 'Case Studies and Success Stories - ScrumLaunch',
    meta: [
      { hid: 'description', name: 'description', content: 'Our work & client business outcomes speak for themselves. Join 100+ high growth startups and Fortune 500 companies that are building software teams with ScrumLaunch.' }
    ],
  },

  computed: {
    ...mapGetters({
      projects: 'projects/getAllProjects'
    }),
  },

  methods: {
    navigateTo(url) {
      this.$router.push('work' + url);
    },
  }
}

</script>

<style lang="scss" scoped>

.case-studies {

  .hero-section {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include desktop-and-up {
      flex-direction: row;
    }

    .hero-img {
      animation: rotate 54s linear infinite;
      max-width: 100%;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .cases {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    cursor: pointer;

    @include tablet-and-up {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop-and-up {
      grid-template-columns: repeat(3, 1fr);
    }

    .case {
      img {
        width: 100%;
      }
    }
  }
}

</style>