<template>
  <transition name="modal-fade">
    <div class="dialog" @click="close()">
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
            @click="close()"
            />
        </header>
        <slot>
          <div v-show="!is_sent">
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
                    :model-value="name"
                    placeholder="Enter your name here"
                    name="name"
                    :error-message="nameError"
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
                  <div>
                    <label class="fileInput__wrap" htmlFor="file-input">
                      <div
                        :class="[
                          'fileInput__base fileInput__clip',
                          { error: fileError, 'border-default': !fileError },
                        ]"
                      >
                        <span>{{ file.name || "Upload your CV" }}</span>
                      </div>
                      <input
                        id="file-input"
                        ref="fileInput"
                        name="file-input"
                        type="file"
                        accept="application/pdf"
                        @change="captureFile($event)"
                      />
                    </label>
                    <p v-show="fileError" class="input-error">
                      {{ fileError }}
                    </p>
                  </div>

                  <p class="help_text">Accept only .pdf</p>
                </div>
                <BaseButton wide class="form_button">
                  GET STARTED
                </BaseButton>
              </form>
            </div>
          </div>

          <div v-show="is_sent" :class="{full: !is_done}">
            <lottie
              v-show=true
              class="message-sent__image"
              name="reliabilityDesktopAnim"
              loop
              renderer="svg"
              :options="{
                animationData: require('~/assets/animation/rocket_launch.json'),
              }"
            />
            <p v-show="is_done" class="title-global popup-title">
              message has been <br /> successfully sent!
            </p>
            <div v-show="is_done" class="modal-body__content">
              <p class="popup-text">
                We appreciate your interest in working with us and our team will get back to you as soon as possible.
              </p>
              <BaseButton
                class="form_button"
                @click="close()"
              >
                BACK TO MAIN PAGE
              </BaseButton>
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
    file: '',
    fileError: null,

    is_blocked: false,
    is_sent: false,
    is_done: false,
  }),

  methods: {
    close() {
      this.$emit("close");
      this.is_sent = false
      this.is_done = false
    },
    captureFile($event) {
      this.file = $event.target.files[0]
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
              experience: this.experience,
              cv_attachment: resp.url,
            }

            this.$axios.$post('/api/join-us', data).then(() => {
              this.name = ''
              this.email = ''
              this.experience = ''
              this.file = ''

              this.is_blocked = false
              this.is_done = true

              this.track()
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
        ? 'Enter a valid email'
        : null
      this.fileError = this.file === '' ? 'Please, upload your CV' : null

      if (
        this.nameError === null &&
        this.emailError === null &&
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
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%; /* 67.2px */
    letter-spacing: 0.96px;
    text-transform: uppercase;

    @include tablet-and-up {
      font-size: 48px;
    } 
  }

  form {
    width: 490px;
    margin: auto;
    max-width: 100%;
  }

  label {
    margin-top: 20px;
    color: var(--Eerie-Black, #1E1F21);
    font-family: 'Proxima Nova';
    font-size: 22px;
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


  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
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
    width: 95%;
    max-width: 1086px;
    max-height: 95%;
    position: relative;

    @include tablet-and-up {
      width: 90%;
    }
    @include desktop-and-up {
      width: 75%;
    }

    .blocked {
      position: absolute;
      top: -50px;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      z-index: 2;
      transition: background-color 0.2s;

      @include tablet-and-up {
        top: -90px;
      }
    }
  }
  .modal-header {
    display: flex;
    justify-content: flex-end;
    border: none;
    padding: 0;

    img {
      width: 20px;
      height: 20px;
      margin: 15px;
      cursor: pointer;

      @include tablet-and-up {
        width: 30px;
        height: 30px;
        margin: 30px;
      }
    }
  }
  .modal-body {
    display: flex;
    max-width: 848px;
    margin: auto;
    padding: 10px 10px 30px 10px;
    text-align: start;
    justify-content: space-around;

    img {
      display: none;
    }

    @include tablet-and-up {
      img {
        width: 380px;
        display: block;
      }
    }

    @include desktop-and-up {
      img {
        width: auto;
        display: block;
      }
    }


    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;

      @include tablet-and-up {
        padding: 20px 40px;
      }

      @include desktop-and-up {
        padding: 30px 60px;
      }
    }
  }

  .message-sent {

    &__image {
      width: 250px !important;
      height: 170px !important;
    }
  }

  .full {
    height: 400px;

    .message-sent {
      &__image {
        width: 350px !important;
        height: 350px !important;
      }
    }
  }

  .popup-title {
    font-size: 24px;
    text-align: center;

    @include tablet-and-up {
      padding: 0 30px;
      font-size: 36px;
    }

    @include desktop-and-up {
      padding: 0 60px;
      font-size: 56px;
    }
  }

  .popup-text {
    color: var(--Black, #1E1F21);
    text-align: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @include tablet-and-up {
      font-size: 24px;
    }

    @include desktop-and-up {
      font-size: 30px;
    }
  }

  .form_button {
    width: 255px;
    height: 82px;
    margin: auto;
    margin-top: 40px;

    @include tablet-and-up {
      padding: 15px 40px;
      width: 280px;
      margin-left: 0;
      margin-right: 0;
    }

    @include desktop-and-up {
      width: 360px;
    }
  }


input[type='file'] {
  display: none;
}

.error {
  border-bottom: 1px solid #ff0000;
}

.input-error {
  margin-top: 5px;
  color: #ff0000;
}

.fileInput {
  & * {
    box-sizing: border-box;
  }

  &__wrap {
    position: relative;
    margin-top: 20px;
    width: 100%;
    cursor: pointer;

    span {
      color: var(--Eerie-Black, #1E1F21);
      text-transform: capitalize;
      font-family: 'Proxima Nova';
      letter-spacing: 0;
      font-size: 20px;
      font-weight: 600;
      line-height: 150%; /* 30px */
    }
  }

  &__base {
    position: relative;
    padding: 8px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    user-select: none;
  }

  &__clip {
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 10px;
      display: block;
      width: 24px;
      height: 24px;
      background: url(/icons/clip.svg) 0 0 no-repeat;
      transform: rotate(180deg);
    }
  }
}
</style>