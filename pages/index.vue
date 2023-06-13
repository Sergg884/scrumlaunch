<template>
  <div class="home">
    <Hero
      hero-img="/pages/home/hero/home-desk.jpg"
      :with-requirements="true"
    >
      <template #title>
        Tech talent that’s right for your <span class="mark">project</span> 
      </template>
      <template #text>
        Every technology project is different and it’s just as important to find the right person as it is to find a talented person.
        ScrumLaunch’s talent hubs in Eastern Europe and Latin America combine global scale and personalization to ensure you get the right person for your project.
      </template>
    </Hero>

    <OurSuperpowers />
    <TalentMap />
    <TechPartner />
    <Testimonials />
    <CaseStudies />
    <OurClients />
    <WeThrive />
    <Services />
    <Hiring />
    <Blog />
    <GetStarted />
  </div>
</template>

<script>
import Hero from '~/components/shared/Hero'
import OurSuperpowers from '~/components/pages/home/OurSuperpowers'
import TalentMap from '~/components/shared/TalentMap'
import Testimonials from '~/components/shared/ClientTestimonials'
import CaseStudies from '~/components/pages/home/CaseStudies'
import OurClients from '~/components/shared/OurClients'
import WeThrive from '~/components/pages/home/WeThrive'
import Services from '~/components/pages/home/Services'
import Hiring from '~/components/pages/home/Hiring'
import TechPartner from '~/components/pages/home/TechPartner.vue'
import Blog from '~/components/pages/home/Blog.vue'
import GetStarted from '~/components/shared/GetStarted.vue'


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
    Hiring,
    TechPartner,
    Blog,
    GetStarted
  },

  head: {
    title: 'Hire Full Stack Developers - Top 1% of 2 million + skilled engineers',
    meta: [
      { hid: 'description', name: 'description', content: 'ScrumLaunch enables start-ups, businesses, and organizations to hire developers from a growing network of top talent in the world. Our React, Python, PHP, Kotlin experts ready to work full-time, part-time, or hourly who will seamlessly integrate into your team.' }
    ],
  },
}

</script>