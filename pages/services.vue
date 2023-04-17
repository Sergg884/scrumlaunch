<template>
  <div>
    <section class="services">
      <AppearFromMask>
        <h1 class="title-big text-left">
          Our services
        </h1>
      </AppearFromMask>
      <AppearFromMask>
        <p class="text-main">
          Our service offerings remain core to our mission - designed to make your content sing through well-informed content strategy, research-backed design, and forward-thinking development that excludes no one.
        </p>
      </AppearFromMask>
      <div class="services--wrapper">
        <ServiceItem
          v-for="(service, i) in services"
          :key="i"
          :service="service"
        />
      </div>
    </section>
    <ContactUs />
  </div>
</template>

<script>
import ServiceItem from '@/components/shared/ServiceItem.vue'
import ContactUs from '~/components/shared/ContactUs.vue';

export default {
  components: {
    ServiceItem,
    ContactUs
  },

  head: {
    title: 'Software Development and Consulting Services - ScrumLaunch',
    meta: [
      { hid: 'description', name: 'description', content: 'Our Services. Software Development. DevOps. UI/UX Design. User Research & Product Analytics. Brand Design. Pitch Deck Creation. Strategy.' }
    ],
  },

  data() {
    return {
      services: [
        {
          title: 'Software Development',
          icon: 'software',
          description:
            'We pride ourselves on having talent rich and very high performance software development teams.  We architect & build scalable software applications that support millions of users.  If you have a question about a technology stack or specific type of application, please ask us.',
        },
        {
          title: 'UI/UX Design',
          icon: 'design',
          description:
            'Our design team works closely with clients across the spectrum of user journey mapping, UI/UX design, illustration, animation and brand development.',
        },
        {
          title: 'User Research & Product Analitycs',
          icon: 'research',
          description:
            'Our product development philosophy is built on “lean principles”.  We believe in talking directly with users, data drive analysis and rapid iteration.  This helps us get to the core of the problem our client is trying to solve and develop the ideal solution.  “The faster you realize why you are wrong, the sooner you will be right.”',
        },
        {
          title: 'Brand Design',
          icon: 'brand',
          description:
            'Building a brand is hard & creative work.  Our process involves working closely with our clients to understand their mission, vision and values so we can empower them to share their message with the world in a way that best reflects who they are as a company and what they stand for.',
        },
        {
          title: 'Pitch Deck Creation',
          icon: 'pitch',
          description:
            'As founders ourselves, we are all too familiar with the painstaking process of creating a perfect investor or sales presentation.  Our leadership and design team can work with you to build the right deck for each audience.',
        },
        {
          title: 'Strategy',
          icon: 'strategy',
          description:
            'Do you have a clear GTM and growth strategy?  Are you struggling to prioritize your product roadmap? Trying to figure out user acquisition?  We have developed successful playbooks in every facet of digital strategy over 5 years of working with our clients to build high growth businesses.',
        },
      ],
    }
  },

}
</script>

<style lang="scss" scoped>

.services {

  .text-main {
    text-align: left;
    margin-left: 110px;
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-left: 188px;
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-left: 488px;
      margin-bottom: 80px;
    }
  }
}

</style>