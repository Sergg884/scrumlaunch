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
            <p class="title-global popup-title">
              Enter your information to
              <span class="green-title">reserve your team</span>
              and start building!
            </p>
            <div class="modal-body__content">
              <div class="modal-image">
                <nuxt-img src="/pages/request-pdf.png" />
              </div>
              <div class="modal-form">
                <div class="input-container">
                  <label htmlFor="name"> Name* </label>
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
                <div class="input-container">
                  <label htmlFor="email"> Email* </label>
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
                <div class="button-container">
                  <BaseButton
                    class="form_button"
                    @click="validateForm()"
                    :disabled="is_sent"
                  >
                    Reserve Team
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div v-show="is_sent" class="blocked"></div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { formatDate } from '~/utils'

export default {
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
    top: 0;
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
  padding: 10px 10px 30px 10px;
  text-align: start;

  &__content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 10px;

    @include tablet-and-up {
      flex-direction: row;
      padding: 20px 40px;
    }

    @include desktop-and-up {
      padding: 30px 60px;
    }
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
    font-size: 48px;
  }
}

.modal-image {
  width: 100%;
  margin-top: 30px;
  text-align: center;

  img {
    width: 50%;
  }

  @include tablet-and-up {
    width: 40%;
    margin-top: initial;

    img {
      width: 100%;
    }
  }
}

.modal-form {
  width: 100%;

  @include tablet-and-up {
    width: 60%;
    padding-left: 60px;
  }
}

.input-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  @include tablet-and-up {
    font-size: 30px;
    padding-top: 0;
  }

  @include desktop-and-up {
    padding-bottom: 40px;
  }
}

label {
  font-size: 24px;
  color: $main-black;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 8px;
  white-space: nowrap;

  @include tablet-and-up {
    font-size: 30px;
  }

  @include desktop-and-up {
    font-size: 36px;
  }
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @include tablet-and-up {
    justify-content: initial;
  }

  @include desktop-and-up {
    margin-top: 50px;
  }
}

.form_button {
  width: 255px;

  @include tablet-and-up {
    padding: 15px 40px;
    width: 280px;
  }
  @include desktop-and-up {
    width: 360px;
  }
}
</style>