<template>
  <transition name="modal-fade">
    <div class="dialog" @click="$emit('close')">
      <div
        class="dialog__content"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click.stop
        >
        <header id="modalTitle" class="modal-header">
          <img
            :src="require('@/assets/icons/black_close.svg')"
            aria-label="Close modal"
            @click="$emit('close')"
            />
        </header>
        <slot>
          <h2>Want to join our team?</h2>
          <div class="modal-body">
            <nuxt-img src="/shared/cv-black.svg" alt="cv-black" />
            <form @submit.prevent="validateForm()">
              <div class="wrap">
                <label> 
                  Name*
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
                  Email*
                </label>
                <InputComponent
                  id="email"
                  class="contact-form--wrapper--input"
                  :model-value="email"
                  placeholder="Enter your email here"
                  name="email"
                  :error-message="emailError"
                  @update:modelValue="handleFieldChange('email', $event)"
                />
              </div>
              <div class="wrap">
                <label>
                  Experience
                </label>
                <InputComponent
                  id="experience"
                  class="contact-form--wrapper--input"
                  :model-value="experience"
                  placeholder="Tell us about your experience"
                  name="experience"
                  :error-message="experienceError"
                  @update:modelValue="handleFieldChange('experience', $event)"
                />
              </div>
              <div class="wrap">
                <label> 
                  CV*
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
                GET STARTED
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
                    animationData: require('~/assets/animation/rocket_launch.json'),
                  }"
                />
                <div v-show="is_done" class="header-1">
                  Your message<br />has been sent
                </div>
              </div>
            </form>
          </div>
          <div
            v-show="is_sent"
            :class="{ blocked: is_blocked }"
            class="contact-form__frame_2"
          >
            <div v-show="is_done" class="header-1">
              Your message<br />has been sent
            </div>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'


export default {
  name: "JoinModal",
  components: {
    lottie,
  },

  data: () => ({
    name: '',
    nameError: null,
    email: '',
    emailError: null,
    experience: '',
    experienceError: null,
    skill: '',
    file: '',
    fileError: null,

    englishSelect: ['Basic', 'Intermediate', 'Advanced'],

    is_blocked: false,
    is_sent: false,
    is_done: false,
  }),

  methods: {
    close() {
      this.$emit("close");
    },
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

  h2 {
    color: var(--Eerie-Black, #1E1F21);
    text-align: center;
    font-family: Proxima Nova;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%; /* 67.2px */
    letter-spacing: 0.96px;
    text-transform: uppercase;
  }

  form {
    width: 490px;
  }
  .modal-fade-enter, .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .dialog {
    z-index: 100;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }
  .dialog__content {
    margin: auto;
    background: white;
    overflow: auto;
    min-height: 50px;
    max-width: 1000px;
    min-width: 300px;
    padding: 20px 30px;
  }
  .modal-header {
    display: flex;
    justify-content: flex-end;
    border-bottom: none;
  }
  .modal-body {
    padding: 10px 10px 30px 10px;
    text-align: start;
    display: flex;
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 10px;
    }
  }

  label {
    margin-top: 20px;
    color: var(--Eerie-Black, #1E1F21);
    font-family: 'Proxima Nova';
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%; /* 50.4px */
    letter-spacing: 0.72px;
    text-transform: uppercase;
  }

  input[type='text'] {
    height: 42px;
    border: 1px solid var($main-black);
    padding-left: 10px;
    margin-top: 8px;
    background-color: white;
    @media screen and (max-width: 768px) {
      width: auto;
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin: 30px 10px 40px 10px;
  }
  .form_button {
    background: #12e2b0;
    border-radius: 54px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #1e1f21;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    padding: 28px 150px;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease;
    font-family: 'Proxima Nova';

    &:active {
      background: #1e1f21;
      color: #12e2b0;
    }

    &:hover {
      background: #1e1f21;
      color: #ffffff;
    }

    @media screen and (max-width: 1439px) {
      font-size: 14px;
      padding: 20px 80px;
    }

    @media screen and (max-width: 790px) {
      font-size: 12px;
      padding: 20px 75px;
    }
  }
</style>