<template>
  <div class="hire-developers">
    <div class="hero-section">
      <Hero
        :developersPage="true"
        :developersMainPage="developersPage"
        :hero-img="`/pages/hire-developers/${hero_image || 'main'}-hero.png`"
        :hero-img-mobile="`/pages/hire-developers/${hero_image || 'main'}-hero-mobile.png`"
      >
        <template #title>
          <span v-if="developersPage">
              Hire <span class="mark">EXPERTS</span> <br> on demand
          </span>
          <span v-else>
            Hire <span class="mark">{{ dev_lang }} developers</span> 
          </span>
        </template>
        <template #text>
          <span v-if="developersPage">
            Hire developers that are vetted, trained and managed by ScrumLaunch. We place high-quality software developers across all types of businesses from venture-backed startups to large corporations.
          </span>
          <span v-else>
            Quickly add experienced {{ dev_lang }} developers to your project. We handle all the sourcing, vetting and back office management so you can get an experienced {{ dev_lang }} developer up and running within days or weeks. We’ll take care of the rest.
          </span>
        </template>
      </Hero>
    </div>

    <TalentMap is-white />

    <OurClients />

    <BestTalent />

    <Testimonials />

    <StartBuildingTeam />

    <WorkWithUs />

    <WhyScrumlaunch />

    <FAQ v-if="questions" :questions="this.questions"/>

    <GetStarted />

  </div>
</template>

<script>
import Hero from '~/components/shared/Hero'
import TalentMap from '~/components/shared/TalentMap'
import Testimonials from '~/components/shared/ClientTestimonials'
import OurClients from '~/components/shared/OurClients'
import BestTalent from '~/components/pages/hire-developers/BestTalent.vue'
import StartBuildingTeam from '~/components/pages/hire-developers/StartBuildingTeam.vue'
import WorkWithUs from '~/components/pages/hire-developers/WorkWithUs.vue'
import WhyScrumlaunch from '~/components/pages/hire-developers/WhyScrumlaunch.vue'
import FAQ from '~/components/shared/FAQ.vue'
import dev_langs from '@/seo/development_languages.json'
import GetStarted from '~/components/shared/GetStarted.vue'

export default {
  components: {
    Hero,
    TalentMap,
    Testimonials,
    OurClients,
    BestTalent,
    StartBuildingTeam,
    WorkWithUs,
    WhyScrumlaunch,
    FAQ,
    GetStarted
},


  

  data() {
    return {
      dev_lang: '',
      dev_lang_hero: '',
      hero_image: '',
      questions: [],
      developersPage: !this.$route.params.specialization
    }
  },

  head() {
    return {
      title: `Hire ${this.dev_lang || ''} Developers - Top Rated | ScrumLaunch`,
      meta: [
        {
          name: 'description',
          content: `Hire and scale ${this.dev_lang || ''} developers with the best-in-class website development and design consulting firm. Book a free consultation now.`,
        },
      ],
    }
  },

  created() {
    this.getInfo()
  },

  methods: {
    getInfo() {
      const mainQuestions = [
        {
          "title": "Why should I use ScrumLaunch to Hire Developers?",
          "text": "At ScrumLaunch, we hire and train every member of our team individually. All dedicated developers (and any developer or designer, for that matter) undergo in-depth assessment and training to test for skill level, adaptability, creativity, system architecture, and other key components of software development. Our experts have worked on a range of projects from video analysis and machine learning to custom marketplaces."
        },
        {
          "title": "How Quickly can I hire developers through ScrumLaunch?",
          "text": "Many of our clients have been up and running in under 24 hours. ScrumLaunch has the capacity to scale instantly and on-demand. If you already know what you’re building, then book a free consultation with our team to explain your requirements. We’ll match you with experts and a project manager on our team in a matter of hours."
        },
        {
          "title": "How Effective is Offshore or Outsourced ?",
          "text": "Offshore development is an incredibly cost-effecitve and efficient way to stand up new projects or build out existing ones. However, outsourcing development offshore should be done with a reputable firm that has a proven track record of success."
        },
      ]

      const spec = this.$route.params.specialization
      let itemIndex = dev_langs.findIndex(item => item.url === spec)
      this.dev_lang = dev_langs[itemIndex]?.title
      this.hero_image = dev_langs[itemIndex]?.title?.toLowerCase()?.replaceAll(' ', '-')
      this.questions = spec ? dev_langs[itemIndex]?.questions : mainQuestions
    },
  },
}
</script>

<style lang="scss" scoped>

.hire-developers {
  .hero-section {
    overflow: hidden;

    section {
      margin-bottom: 0;
      
      @include desktop-and-up {
        grid-template-columns: 0.5fr 0.5fr;
        padding: 0 0 1px 120px;
      }
    }
  }
}

</style>