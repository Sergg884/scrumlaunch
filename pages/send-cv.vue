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

      <form @submit.prevent="validateForm()">
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
            id="email"
            class="contact-form--wrapper--input"
            :model-value="email"
            placeholder="Enter your email or phone number here"
            name="email"
            :error-message="emailError"
            @update:modelValue="handleFieldChange('email', $event)"
          />
        </div>
        <div class="wrap">
          <label> 
            English level
          </label>
          <CustomSelect
            :model-value="englishLevel"
            :error-message="englishLevelError"
            class="filter"
            label="Select skill"
            empty-value-text="Select your English level"
            :items="englishSelect"
            @update:modelValue="handleFieldChange('englishLevel', $event)"
          />
        </div>
        <div class="wrap">
          <label> 
            CV
          </label>
          <FileInput
            placeholder="Upload your CV"
            :error-message="fileError"
            :value="file.name"
            @file-updated="captureFile($event)"
          />
          <p class="help_text">Accept only .pdf</p>
        </div>
        <BaseButton wide>
          Send cv
        </BaseButton>

        <div
          v-show="is_sent"
          :class="{ blocked: is_blocked }"
          class="contact-form__frame_2"
        >
          <lottie
            v-show="is_done"
            class="contact-form__frame_2__image"
            name="reliabilityDesktopAnim"
            loop
            renderer="svg"
            :options="{
              animationData: require('../assets/animation/rocket_launch.json'),
            }"
          />
          <div v-show="is_done" class="header-1">
            Your message<br />has been sent
          </div>
        </div>
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
    englishLevel: '',
    englishLevelError: null,
    skill: '',
    file: '',
    fileError: null,

    englishSelect: ['Basic', 'Intermediate', 'Advanced'],

    is_blocked: false,
    is_sent: false,
    is_done: false,
  }),

  methods: {
    captureFile($event) {
      this.file = $event
    },

    handleFieldChange(name, value) {
      this[name] = value
    },

    sendForm() {
      const reader = new FileReader()
      reader.readAsDataURL(this.file)

      if (this.file.type !== 'application/pdf') {
        this.fileError = 'Should be a pdf file'

        return
      }

      this.is_sent = true
      this.is_blocked = true

      reader.onload = () => {
        fetch(
          'https://script.google.com/macros/s/AKfycbxmI7N5aQ3PcX_VHoGsNN5xJhsXY_NH5HVivuGd2W6N_Y2YRVhAhNP7vqhPKT-DPjHw8A/exec',
          {
            method: 'POST',
            body: JSON.stringify({
              fname: 'uploadFilesToGoogleDrive',
              dataReq: {
                data: reader.result.split(',')[1],
                name: this.file.name,
                type: this.file.type,
              },
            }),
          }
        )
          .then((res) => res.json())
          .then((resp) => {
            const data = {
              name: this.name,
              email: this.email,
              english: this.englishLevel,
              cv_attachment: resp.url,
            }

            this.$axios.$post('/api/send-cv', data).then(() => {
              this.name = ''
              this.email = ''
              this.englishLevel = ''
              this.file = ''

              this.is_blocked = false
              this.is_done = true

              this.track()

              setTimeout(() => {
                this.is_sent = false
                this.is_done = false
              }, 5000)
            })
            .catch(() => {
              this.is_sent = false
              this.is_blocked = false
            })
          })
          .catch((error) => {
            console.error(error)
          })
      }
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
      this.englishLevelError =
        this.englishLevel === '' ? 'Please, choose your english level' : null
      this.fileError = this.file === '' ? 'Please, upload your CV' : null

      if (
        this.nameError === null &&
        this.emailError === null &&
        this.englishLevelError === null &&
        this.fileError === null
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
      position: relative;
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

  .header-1 {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .help_text {
    margin-top: 5px;
    font-size: 12px;
  }

  .contact-form {
    &__frame_2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      z-index: 2;
      transition: background-color 0.2s;

      &.blocked {
        background-color: rgba(255, 255, 255, 0.8);
      }

      &__image {
        width: 290px !important;
        height: 290px !important;
      }
    }
  }
}

</style>