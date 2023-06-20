<template>
  <section class="build-team">
    <AppearFromMask class="title-mask">
      <h1 class="title-big">
        <span class="green-title">Came up</span>
        with a business idea.
        <span class="green-title">Describe</span>
        in details.
        <span class="green-title">Get</span>
        a real team.
      </h1>
    </AppearFromMask>
    <div class="requirements-wrapper">
      <nuxt-img
        class="img-1"
        src="/icons/flutter-dev.png"
        alt="Flutter Developer Image"
      />
      <p class="text">
        A dynamic and streamlined solution for aspiring entrepreneurs to
        generate business ideas, form teams, and pursue success.
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
      {
        hid: 'description',
        name: 'description',
        content:
          'Interested in working with us?  Get in touch · hello@scrumlaunch.com · Let’s talk about elevating and accelerating your digital experience.',
      },
    ],
  },
  async mounted() {
    const requirements = this.$store.getters['requirements/GET_REQUIREMENTS']

    this.requirements = requirements

    if (requirements) {
      socket.emit('fetch-requirements', { query: requirements })

      socket.on('update-step', (step) => {
        console.log(step)
      })

      socket.on('update-result', (result) => {
        this[result.type] = result.data

        if (result.finished) {
          this.finished = true

          setTimeout(() => {
            socket.removeAllListeners()
          }, 2000)
        }

        if (result.error) {
          this.error = true
        }
      })
    }
  },

  methods: {},
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
    padding: 0 10px;
    margin: 0 auto;

    @include tablet-and-up {
      max-width: 90%;
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
        bottom: -15%;
        left: -5%;
      }

      @include desktop-and-up {
        width: 110px;
        left: -30%;
        top: 15%;
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
        top: 20%;
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