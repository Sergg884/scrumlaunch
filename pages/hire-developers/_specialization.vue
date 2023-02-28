<template>
  <div class="hire_developers">

    <Hero
      :lang="dev_lang"
    />

    <TalentMap />

    <OurClients />

    <section class="container talent-section">
      <p class="title-global">
        <span class="mark">The Best Talent</span> at Every <span class="mark">Experience Level</span>
      </p>
      <div class="circle_container">
        <img src="/images/hire-developers/statistic_pc2.svg" alt="statistic_1" />
      </div>
    </section>

    <ClientTestimonials />

    <section class="container start-building">
      <p class="title">
        Start building my <br/> development team now
      </p>
      <BaseButton>
        Hire developers
      </BaseButton>
    </section>

    <section class="container work-with-us">
      <h3 class="section-title">
        How can you  work with us?
      </h3>
      <div class="row">
        <div class="col info-tab">
          <ul>
            <li>
              <img src="/images/hire-developers/faq_1.svg" alt="faq_1">
              <div>
                <span>Staff augmentation</span>
                <p>From 1 full-time developer to several experienced developers fully integrated in your team</p>
                <BaseButton
                  small
                >
                  Get started
                </BaseButton>
              </div>
            </li>
            <li>
              <img src="/images/hire-developers/faq_2.svg" alt="faq_2">
              <span>Dedicated teams</span>
            </li>
            <li>
              <img src="/images/hire-developers/faq_3.svg" alt="faq_3">
              <span>Company-wide partnerships</span>
            </li>
          </ul>
        </div>
        <div class="col img-tab">
          <img src="/images/hire-developers/work-with-us.jpg" alt="work-with-us-hero">
        </div>
      </div>
    </section>

    <section class="container why-scrumlaunch">
      <h3 class="section-title">
        Why Scrumlaunch?
      </h3>
      <div class="tab-container">
        <div v-for="tab in whyScrumlaunch" :key="tab.title" class="tab">
          <img :src="tab.img" :alt="tab.title">
          <p class="tab-title">
            {{ tab.title }}
          </p>
          <p class="tab-text">
            {{ tab.text }}
          </p>
        </div>
      </div>
    </section>

    <FAQ />

    <section class="container">
      <h3 class="section-title">
        Ready to <span class="mark">get started?</span>
      </h3>
    </section>

    <ContactForm />

  </div>
</template>

<script>
import Hero from '~/components/hire-developers/Hero.vue'
import TalentMap from '~/components/hire-developers/TalentMap.vue'
import OurClients from '~/components/hire-developers/OurClients.vue'
import ClientTestimonials from '~/components/hire-developers/ClientTestimonials.vue'
import BaseButton from '~/components/BaseButton.vue'
import FAQ from '~/components/hire-developers/FAQ.vue'
import ContactForm from '~/components/shared/ContactForm.vue'

import dev_langs from '~/seo/development_languages.json'

export default {
  components: {
    Hero,
    TalentMap,
    OurClients,
    ClientTestimonials,
    BaseButton,
    FAQ,
    ContactForm,
  },

  data() {
    return {
      dev_lang: '',
      whyScrumlaunch: [
        {
          img: '/images/hire-developers/why-scrumlaunch/icon-1.svg',
          title: '2x Reduced time to recruit',
          text: 'Avoid long hiring cycles and get a talented developer or team up and running in days or weeks not months.'
        },
        {
          img: '/images/hire-developers/why-scrumlaunch/icon-2.svg',
          title: 'Top 1% of global talent',
          text: 'Our tailor-made talent evaluation process focuses on developers who have the ability to contribute quickly and act as problem solvers without micromanagement.'
        },
        {
          img: '/images/hire-developers/why-scrumlaunch/icon-3.svg',
          title: '3 Levels of quality control',
          text: 'Over the past 7 years, the ScrumLaunch technology leadership team has developed effective and transparent internal management controls to ensure high quality work.'
        },
        {
          img: '/images/hire-developers/why-scrumlaunch/icon-4.svg',
          title: '1 Month trial period',
          text: 'If you aren’t fully satisfied, we will staff a replacement at no cost and you won’t pay for the unsuccessful trial period.'
        },
      ]
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

.start-building {
  background-color: $main-black;
  padding: 200px 120px;

  .title {
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-size: 70px;
    margin-bottom: 80px;
    text-transform: uppercase;
  }

  button {
    margin: auto;
  }
}

.work-with-us {

  .row {
    gap: 40px;
    margin-top: 80px;
    .info-tab {
      text-align: left;

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
          padding: 35px 0;
          border-top: 1px solid $main-black;
          display: flex;
          align-items: center;

          &:first-child {
            align-items: start;
            padding: 28px 0;
          }

          &:last-child {
            border-bottom: 1px solid $main-black;
          }

          img {
            margin-right: 20px;
          }

          span {
            color: $main-black;
            font-weight: 700;
            font-size: 30px;
          }

          p {
            margin-top: 10px;
            margin-bottom: 28px;
            font-weight: 400;
            font-size: 20px;
          }
        }
      }
    }

    .img-tab {
      height: 100%;
    }
  }
}

.why-scrumlaunch {
  .tab-container {
    margin-top: 80px;
    gap: 40px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .tab {
      text-align: left;

      img {
        margin-bottom: 40px;
      }

      &-title {
        font-weight: 700;
        font-size: 30px;
        color: $main-black;
        margin-bottom: 16px;
      }

      &-text {
        font-weight: 400;
        font-size: 18px;
        color: $main-black;
      }
    }
  }
}

</style>

