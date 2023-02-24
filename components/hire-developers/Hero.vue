<template>
  <section class="container">
    <div class="row">
      <div class="col text-col">
        <div>
          <h1 class="title-global">
            Hire <span class="mark">{{ lang }} <br /> developers</span>
          </h1>
          <p class="text">
            Quickly add experienced {{ lang }} developers to your project. We handle all the sourcing, vetting and back office management so you can get an experienced Java developer up and running within days or weeks. We’ll take care of the rest.
          </p>
        </div>
        <div class="row contact-row">
          <div class="input-wrap">
            <label class="label">Email</label>
            <InputComponent
              id="email"
              class="contact-form--wrapper--input input-email"
              :modelValue="email"
              placeholder="Enter your email here"
              name="email"
              :errorMessage="emailError"
              @update:modelValue="handleFieldChange('email', $event)"
            />
          </div>
          <div class="btn_wrap">
            <BaseButton @click="validateForm()">
              Schedule a call
            </BaseButton>
          </div>
        </div>

      </div>
      <div class="col img-col">
        <img src="/images/hire-developers/java-hero.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import InputComponent from '@/components/contact/InputComponent.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    InputComponent,
    BaseButton
  },

  props: {
    lang: { type: String, default: '' },
  },

  data: () => ({
    email: '',
    emailError: null
  }),

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },

    validateForm() {
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )
      this.emailError = !emailRegEx.test(this.email)
        ? 'Please, enter your correct email'
        : null
      if (
        this.emailError === null
      ) {
        this.sendForm()
      }
    },

    sendForm() {
      console.log('form sent')
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  max-width: 1440px;
  padding: 120px;
  margin: auto;
  text-align: left;

  .row {
    display: flex;
    flex-wrap: nowrap;
    flex: 1 1 auto;

    .col {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%
    }
  }
}

.row {
  gap: 60px;
  .text-col {
    min-width: 760px;

    h1 {
      margin-bottom: 40px;
    }

    .text {
      margin-bottom: 60px;
    }

    .contact-row {
      align-items: center;

      .input-wrap {
        label {
          text-transform: uppercase;
          font-weight: 900;
          font-size: 36px;
          margin-bottom: 16px;
        }

        input {
          margin-top: 16px;
        }
      }
    }
  }
}

</style>
