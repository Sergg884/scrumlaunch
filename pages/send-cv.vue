<template>
  <div class="send-cv">
    <section>
      <div class="info">
        <div class="hero">
          <h1 class="title-big">
            Let's 
            <span class="green-title">
              talk
            </span>
          </h1>
          <p class="text">
            Want to join our team? <br>
            <span class="mark">Send your CV</span> via filling out the form.
          </p>
        </div>
        <nuxt-img src="/shared/cv-white.svg" alt="cv-white" />
      </div>
      <form action="">
        <div class="wrap">
          <label> 
            Name
          </label>
          <InputComponent
            id="name"
            class="contact-form--wrapper--input"
            :modelValue="name"
            placeholder="Enter your name here"
            name="name"
            :errorMessage="nameError"
            @update:modelValue="handleFieldChange('name', $event)"
          />
        </div>
        <div class="wrap">
          <label> 
            Contact
          </label>
          <InputComponent
            id="name"
            class="contact-form--wrapper--input"
            :modelValue="name"
            placeholder="Enter your email or phone number here"
            name="name"
            :errorMessage="nameError"
            @update:modelValue="handleFieldChange('name', $event)"
          />
        </div>
        <div class="wrap">
          <label> 
            English level
          </label>
          <CustomSelect
            :modelValue="skill"
            class="filter"
            label="Select skill"
            emptyValueText="Select your English level"
            :items="this['vacancies/getAllSkills']"
            @update:modelValue="handleFieldChange('skill', $event)"
          />
        </div>
        <div class="wrap">
          <label> 
            CV
          </label>
          <InputComponent
            id="name"
            class="contact-form--wrapper--input"
            :modelValue="name"
            placeholder="Upload your CV"
            name="name"
            :errorMessage="nameError"
            @update:modelValue="handleFieldChange('name', $event)"
          />
        </div>
        <BaseButton wide>
          Send cv
        </BaseButton>
      </form>
    </section>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'

export default {
  components: {
    lottie,
  },

  data: () => ({
    name: '',
    nameError: null,
    email: '',
    emailError: null,
    project: '',
    projectError: null,
    skill: '',

    is_blocked: false,
    is_sent: false,
    is_done: false,
  }),

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },

    sendForm() {
      this.is_sent = true
      this.is_blocked = true

      const data = {
        name: this.name,
        email: this.email,
        details: this.project,
      }

      this.$axios.$post('/api/contact-us', data).then(() => {
        this.name = ''
        this.email = ''
        this.project = ''

        this.is_blocked = false
        this.is_done = true

        this.track()

        setTimeout(() => {
          this.is_sent = false
          this.is_done = false
        }, 5000)
      })
    },

    validateForm() {
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )
      this.nameError = this.name === '' ? 'Please, add your name here' : null
      this.emailError = !emailRegEx.test(this.email.trim())
        ? 'Please, enter your correct email'
        : null
      this.projectError =
        this.project === '' ? 'Please, specify your project details here' : null

      if (
        this.nameError === null &&
        this.emailError === null &&
        this.projectError === null
      ) {
        this.sendForm()
      }
    },

    track() {
      if (this.$gtag !== undefined) {
        this.$gtag.event('conversion', {
          send_to: 'AW-10868833249/37WpCK7nhbQDEOH31L4o',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.send-cv {
  width: 100%;
  background-color: $main-black;
  display: inline-block;
  margin-top: -106px;
  padding-top: 106px;

  section {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include tablet-and-up {
      gap: 60px;
    }

    @include desktop-and-up {
      flex-direction: row;
    }
    .info {
      padding: 0 50px;

      @include tablet-and-up {
        display: flex;
        gap: 60px;
        align-items: center;
      }

      @include desktop-and-up {
        flex-direction: column;
        flex-basis: 0;
        flex-grow: 1;
      }

      .hero {
        h1 {
          color: #fff;

          @include tablet-and-up {
            text-align: left;
          }
        }

        .text {
          color: #fff;
          font-weight: 700;
          font-size: 16px;

          @include tablet-and-up {
            text-align: left;
            width: 60%;
            font-size: 24px;
          }

          @include desktop-and-up {
            font-size: 30px;
            width: 100%;
          }
        }
      }

      img {
        width: 226px;

        @include desktop-and-up {
          width: 382px;
        }
      }
    }

    form {
      background-color: #fff;
      padding: 40px 20px;

      @include tablet-and-up {
        padding: 80px 60px;
      }

      @include desktop-and-up {
        flex-basis: 0;
        flex-grow: 1;
      }
      .wrap {
        text-align: left;
        margin-bottom: 20px;

        @include tablet-and-up {
          margin-bottom: 40px;
        }

        label {
          font-weight: 900;
          font-size: 24px;
          text-transform: uppercase;

          @include tablet-and-up {
            font-size: 48px;
            margin-bottom: 20px;
          }

          @include desktop-and-up {
            font-size: 36px;
            margin-bottom: 14px;
          }
        }
      }

      .base-button {
        margin: auto;
        margin-top: 40px;
        @include tablet-and-up {
          padding: 21px 82px;
          margin-top: 60px;
        }
      }
    }
  }

  
}

</style>