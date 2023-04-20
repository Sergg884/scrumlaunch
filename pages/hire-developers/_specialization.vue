<template>
  <div class="hire-developers">
    <Hero
      heroImg="/hero/java-hero.jpg"  
    >
      <template v-slot:title>
        Hire <span class="mark">{{ dev_lang }} developer</span> 
      </template>
      <template v-slot:text>
        Every technology project is different and it’s just as important to find the right person as it is to find a talented person.
        ScrumLaunch’s talent hubs in Eastern Europe and Latin America combine global scale
      </template>
    </Hero>

    <TalentMap isWhite />

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
      questions: []
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

  created() {
    this.getInfo()
  },

  methods: {
    getInfo() {
      let itemIndex = dev_langs.findIndex(item => item.url === this.$route.params.specialization)
      this.dev_lang = dev_langs[itemIndex].title
      this.questions = dev_langs[itemIndex].questions
    },
  },
}
</script>

<style lang="scss" scoped>

.hire-developers {

}

</style>