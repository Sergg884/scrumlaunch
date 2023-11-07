<template>
  <div class="home">
    <Hero
      hero-img="/pages/home/hero/home-desk.jpg"
    >
      <template #title>
        Tech talent that’s right for your <span class="mark">project</span> 
      </template>
      <template #text>
        ScrumLaunch builds long-term, world-class tech teams for new product development and staff augmentation. Our talent hubs in
        Eastern Europe and Latin America combine global scale and dedicated people managers to ensure you get the ideal team for your project.
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
    <Awards />
    <Blog />
    <!-- <client-only>
      <script defer type="text/javascript">
        hbspt.forms.create({
          region: "na1",
          portalId: "43665306",
          formId: "f5543543-c014-4e86-a502-79069ed72a34"
        });
      </script>
    </client-only> -->
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
import Awards from '~/components/pages/home/Awards'
import TechPartner from '~/components/pages/home/TechPartner.vue'
import Blog from '~/components/pages/home/Blog.vue'
// import GetStarted from '~/components/shared/GetStarted.vue'

export default {

  components: {
    Awards,
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
    // GetStarted
  },

  data() {
    return {
      isModalVisible: false,
    }
  },

  head: {
    title: 'Hire Full Stack Developers - Top 1% of 2 million + skilled engineers',
    meta: [
      { hid: 'description', name: 'description', content: 'ScrumLaunch enables start-ups, businesses, and organizations to hire developers from a growing network of top talent in the world. Our React, Python, PHP, Kotlin experts ready to work full-time, part-time, or hourly who will seamlessly integrate into your team.' }
    ],
  },

  getters: {
    features: (state) => state.modals
  },
}

</script>