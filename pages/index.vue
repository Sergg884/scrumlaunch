<template>
  <div class="home">
    <Hero
      heroImg="/shared/hero/java-hero.jpg"  
    >
      <template v-slot:title>
        Tech talent that’s right for your <span class="mark">project</span> 
      </template>
      <template v-slot:text>
        Quickly add experienced java developers to your project. We handle all the sourcing, vetting and back office management so you can get an experienced Java developer up and running within days or weeks. We’ll take care of the rest.
      </template>
    </Hero>

    <OurSuperpowers />

    <TalentMap />

    <Testimonials />

    <CaseStudies />

    <OurClients />

    <WeThrive />

    <Services />

    <Hiring />
  </div>
</template>

<script>
import Hero from '~/components/shared/Hero'
import OurSuperpowers from '~/components/pages/home/OurSuperpowers'
import TalentMap from '~/components/pages/home/TalentMap'
import Testimonials from '~/components/shared/ClientTestimonials'
import CaseStudies from '~/components/pages/home/CaseStudies'
import OurClients from '~/components/pages/home/OurClients'
import WeThrive from '~/components/pages/home/WeThrive'
import Services from '~/components/pages/home/Services'
import Hiring from '~/components/pages/home/Hiring'


export default {
  components: {
    Hero,
    OurSuperpowers,
    TalentMap,
    Testimonials,
    CaseStudies,
    OurClients,
    WeThrive,
    Services,
    Hiring
  }
}

</script>