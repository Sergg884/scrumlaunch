<template>
  <div class="hire-developers">
    <Hero
      heroImg="/hero/java-hero.jpg"  
    >
      <template v-slot:title>
        Tech talent that’s right for your <span class="mark">project</span> 
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

  </div>
</template>

<script>
import Hero from '~/components/shared/Hero'
import TalentMap from '~/components/shared/TalentMap'
import Testimonials from '~/components/shared/ClientTestimonials'
import OurClients from '~/components/shared/OurClients'
import BestTalent from '~/components/pages/hire-developers/BestTalent.vue'
import StartBuildingTeam from '~/components/pages/hire-developers/StartBuildingTeam.vue'

export default {
  components: {
    Hero,
    TalentMap,
    Testimonials,
    OurClients,
    BestTalent,
    StartBuildingTeam
}
}
</script>

<style lang="scss" scoped>

.hire-developers {

}

</style>