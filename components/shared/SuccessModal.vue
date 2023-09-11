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
          <div class="modal-body">
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
            <p class="title-global popup-title">
              message has been <br /> successfully sent!
            </p>
            <div class="modal-body__content">
              <p class="popup-text">
                We appreciate your interest in work with us and our team will get back to you as soon as possible.
              </p>
              <BaseButton
                class="form_button"
                @click="$emit('close')"
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
import { formatDate } from '~/utils'

export default {
  components: {
    lottie,
  },
  data: () => ({
    name: '',
    nameError: null,
    email: '',
    emailError: null,
    is_blocked: false,
    is_sent: false,
    is_done: false,
  }),
  props: ['getFile', 'successMessage'],
  methods: {
    close() {
      this.$emit('close')
    },
    handleFieldChange(name, value) {
      this[name] = value
    },
    async sendForm() {
      this.is_sent = true

      const fileBlob = await this.getFile(true)

      fetch(
        'https://script.google.com/macros/s/AKfycbxmI7N5aQ3PcX_VHoGsNN5xJhsXY_NH5HVivuGd2W6N_Y2YRVhAhNP7vqhPKT-DPjHw8A/exec',
        {
          method: 'POST',
          body: JSON.stringify({
            fname: 'uploadFilesToGoogleDrive',
            dataReq: {
              data: fileBlob.split(',')[1],
              name: `ScrumLaunch-Build-Team-${formatDate('-')}.pdf`,
              type: 'application/pdf',
            },
          }),
        }
      )
        .then((res) => res.json())
        .then((resp) => {
          const data = {
            name: this.name,
            email: this.email,
            pdf: resp.url,
          }

          this.$axios.$post('/api/send-requirements', data).then(() => {
            this.name = ''
            this.email = ''
            this.is_done = true
            this.track()
            this.close()
            this.successMessage()
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },
    validateForm() {
      this.$gtm.push({ event: 'RESERVE TEAM' })
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )
      this.nameError = this.name === '' ? 'Please, add your name here' : null
      this.emailError = !emailRegEx.test(this.email)
        ? 'Please, enter your correct email'
        : null
      if (this.nameError === null && this.emailError === null) {
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
  max-width: 848px;
  margin: auto;
  padding: 10px 10px 30px 10px;
  text-align: start;

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
    width: 290px !important;
    height: 290px !important;
  }
}

.popup-title {
  font-size: 24px;
  text-align: center;

  @include tablet-and-up {
    padding: 0 30px;
    font-size: 40px;
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
  margin-top: 40px;

  @include tablet-and-up {
    padding: 15px 40px;
    width: 280px;
  }
  @include desktop-and-up {
    width: 360px;
  }
}
</style>