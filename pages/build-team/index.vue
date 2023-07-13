<template>
  <section class="build-team">
    <AppearFromMask class="title-mask">
      <h1 class="title-big">
        <span class="green-title">The AI-powered</span>
        solution for project
        <span class="green-title">estimation</span>
        and team
        <span class="green-title">staffing</span>
      </h1>
    </AppearFromMask>
    <div class="requirements-wrapper">
      <nuxt-img
        class="img-1"
        src="/icons/flutter-dev.png"
        alt="Flutter Developer Image"
      />
      <p class="text">
        Instantly scope and estimate your technology project
      </p>
      <AiRequirementsField page />
      <nuxt-img
        class="img-2"
        src="/icons/java-dev.png"
        alt="Java Developer Image"
      />
      <nuxt-img class="img-3" src="/icons/designer.png" alt="Designer Image" />
    </div>
  </section>
</template>

<script>
import AiRequirementsField from '~/components/shared/AiRequirementsField.vue'

export default {
  components: {
    AiRequirementsField,
  },
  head: {
    title: 'Build Team with Scrum AI',
    meta: [
      { hid: 'og:site_name', 
        property: "og:site_name",
        content: "ScrumLaunch"
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Build Your Team'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${process.env.API_URL}/icons/logoSL.png`
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: 'Scrumlaunch logo'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Interested in working with us?  Get in touch · hello@scrumlaunch.com · Let’s talk about elevating and accelerating your digital experience.',
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: `${process.env.API_URL}/build-team`,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Build Your Team",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Interested in working with us?  Get in touch · hello@scrumlaunch.com · Let’s talk about elevating and accelerating your digital experience.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `${process.env.API_URL}/icons/logoSL.png`,
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.build-team {
  margin: 50px auto;
  padding: 0;

  @include tablet-and-up {
    margin: 90px auto;
    padding: 0 30px;
  }

  @include desktop-and-up {
    padding: 0 120px;
  }

  h1 {
    font-size: 32px;
    text-align: center;

    @include tablet-and-up {
      font-size: 48px;
    }

    @include desktop-and-up {
      font-size: 56px;
    }
  }

  .requirements-wrapper {
    position: relative;
    margin: 0 auto;
    max-width: 90%;

    @include tablet-and-up {
      padding: 0;
    }

    @include desktop-and-up {
      max-width: 55%;
    }

    .text {
      font-size: 14px;

      @include tablet-and-up {
        font-size: 20px;
      }

      @include desktop-and-up {
        font-size: 26px;
      }
    }

    .img-1 {
      position: absolute;
      display: none;

      @include tablet-and-up {
        display: block;
        width: 50px;
        bottom: -25%;
        left: -5%;
      }

      @include desktop-and-up {
        width: 110px;
        left: -30%;
        top: 5%;
      }
    }

    .img-2 {
      position: absolute;
      display: none;

      @include tablet-and-up {
        display: block;
        width: 40px;
        top: 50px;
        right: -5%;
      }

      @include desktop-and-up {
        width: 80px;
        right: -25%;
        top: -5%;
      }
    }

    .img-3 {
      position: absolute;
      display: none;

      @include tablet-and-up {
        display: block;
        width: 30px;
        bottom: 0;
        right: -10%;
      }

      @include desktop-and-up {
        width: 40px;
        right: -40%;
        bottom: 15%;
      }
    }

    .text {
      margin-bottom: 40px;

      @include desktop-and-up {
        margin-bottom: 60px;
      }
    }
  }

  .requirements_link {
    margin: 40px auto 0;
  }
}
</style>