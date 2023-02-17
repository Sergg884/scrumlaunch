<template>
  <div class="hire_developers">

    <Hero 
      :lang="dev_lang"
    />

    <OurClients />

    <div class="container talent-section">
      <p class="title-global">
        <span class="mark">The Best Talent</span> at Every <span class="mark">Experience Level</span> 
      </p>
      <div class="circle_container">
        <img src="/images/hire-developers/statistic_pc.svg" alt="statistic_1" />
      </div>
    </div>

    <ClientTestimonials />

  </div>
</template>

<script>
import Hero from '~/components/hire-developers/Hero.vue'
import OurClients from '~/components/hire-developers/OurClients.vue'
import ClientTestimonials from '~/components/hire-developers/ClientTestimonials.vue'

import dev_langs from '@/seo/development_languages.json'

export default {
  components: {
    Hero,
    OurClients,
    ClientTestimonials
  },

  data() {
    return {
      dev_lang: '',
    }
  },

  head() {
    return {
      title: `Hire ${this.dev_lang} Developers - Top Rated | ScrumLaunch`,
      meta: [
        {
          name: 'description',
          content: `Hire and scale ${this.dev_lang} developers with the best-in-class website development and design consulting firm. Book a free consultation now.`,
        },
      ],
    }
  },

  watch: {
    '$route.path'() {
      if (this.dev_lang) {
        this.dev_lang = this.getDevLang()
      }
    },
  },

  created() {
    this.dev_lang = this.getDevLang()
  },

  methods: {
    getDevLang() {
      return (
        dev_langs.filter((item) => {
          return this.$route.params.specialization === item.url
        })[0]?.lang || ''
      )
    },
  },
}
</script>

<style lang="scss" scoped>

.container {
  box-sizing: border-box;
  max-width: 1440px;
  padding: 120px;
  margin: auto;

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

.talent-section {
  background-color: $main-black;

  .title-global {
    margin-bottom: 80px;
    text-align: left;
    color: white;
  }

}

</style>

