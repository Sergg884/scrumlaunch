<template>
  <div class="home">
    <Hero
      hero-img="/pages/home/hero/home-desk.jpg"
    >
      <template #title>
        PRODUCT DEVELOPMENT
        <br>
        <span class="mark">& VENTURE ACCELERATION</span>
      </template>
      <template #text>
        We design, build and scale software products for high growth startups and mid market brands with a focus on product development velocity and data driven feedback loops.
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
    <!-- <section>
      <client-only>
        <script defer type="text/javascript">
          hbspt.forms.create({
            region: "na1",
            portalId: "43665306",
            formId: "f5543543-c014-4e86-a502-79069ed72a34"
          });
        </script>
      </client-only>
    </section> -->
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
import GetStarted from '~/components/shared/GetStarted.vue'

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
    GetStarted
  },

  data() {
    return {
      isModalVisible: false,
    }
  },

  head: {
    title: 'Hire Full Stack Developers - Top 1% of 2 million + skilled engineers'
  },

  getters: {
    features: (state) => state.modals
  },
}

</script>
