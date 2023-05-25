<template>
  <section>
    <h2 class="title-global">
      Ready to <span class="mark">get started?</span>
    </h2>
    <div class="contact-us">
      <h4>
        Contact us at <a href="mailto:hello@scrumlaunch.com">hello@scrumlaunch.com</a> or fill out the form
      </h4>
      <div class="info-wrap">
        <div class="hero">
          <nuxt-img src="/shared/get-started/hero.svg" alt="get-started-hero-img" />
        </div>
        <form>
          <h3>
            Company Details
          </h3>
          <div class="main-inputs">
            <div class="single-inputs">
              <div class="input-wrapper">
                <label for="name">
                  Name*
                </label>
                <div class="input" :class="{'input-error': is_error_name }">
                  <input
                    id="name"
                    v-model="name"
                    placeholder="Enter your name"
                    type="text"
                  />
                  <div class="error">
                    <div class="error-popup">Please enter your name</div>
                  </div>
                </div>
              </div>
              <div class="input-wrapper">
                <label for="email">
                  Email*
                </label>
                <div class="input" :class="{'input-error': is_error_email }">
                  <input
                    id="email"
                    v-model="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <div class="error">
                    <div class="error-popup">Please enter valid email</div>
                  </div>
                </div>
              </div>
              <div class="input-wrapper">
                <label for="company">
                  Company*
                </label>
                <div class="input" :class="{'input-error': is_error_company_name }">
                  <input
                    id="company"
                    v-model="company"
                    placeholder="Enter company name"
                    type="text"
                  />
                  <div class="error">
                    <div class="error-popup">Please enter your company name</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-areas">
              <div class="input-wrapper">
                <label for="details">
                  Any details you’d like to share?
                </label>
                <textarea 
                  id="details"
                  v-model="details"
                  type="text"
                  placeholder="Enter your message"
                />
              </div>
            </div>
          </div>
          <div class="additional-inputs">
            <h3>
              Additional Information
            </h3>
            <div class="selects">
              <div class="input-wrapper">
                <label for="company">
                  Company Size
                </label>
                <CustomSelect
                  id="company"
                  class="form-select"
                  :model-value="size"
                  label="Select company size"
                  empty-value-text="Select company size"
                  type="text"
                  :items="companySizeOptions"
                  @update:modelValue="handleFieldChange('size', $event)"
                />
              </div>
              <div class="input-wrapper">
                <label for="company">
                  Total Project Budget
                </label>
                <CustomSelect
                  id="company"
                  class="form-select"
                  :model-value="budget"
                  label="Select project budget"
                  empty-value-text="Select project budget"
                  type="text"
                  :items="projectBudgetOptions"
                  @update:modelValue="handleFieldChange('budget', $event)"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <BaseButton @click="sendForm()">
        Send message
      </BaseButton>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      is_blocked: false,
      is_sent: false,
      is_done: false,
      is_error_name: false,
      is_error_email: false,
      is_error_company_name: false,

      name: '',
      email: '',
      company: '',
      details: '',
      size: '',
      budget: '',

      companySizeOptions: ['1-50', '50-200', '200-1000', '1000-5000+', '10,000+'],
      projectBudgetOptions: [
        'Less than $10,000',
        '$10,000 to $49,999',
        '$50,000 to $199,999',
        '$200,000 to $999,999',
        '$1,000,000 to $9,999,999',
        '$10,000,000 +'
      ]
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('/api/contact-us', this.name);
      } catch (error) {
        console.error(error);
      }
    },

    handleFieldChange(name, value) {
      this[name] = value
    },

    sendForm() {
      this.is_sent = true
      this.is_blocked = true
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )

      const data = {
        name: this.name,
        email: this.email,
        company: this.company,
        details: this.details,
        size: this.size,
        budget: this.budget,
      }

      if (this.name.length <= 0) {
        this.is_error_name = true
        return
      }
      if (!emailRegEx.test(this.email.trim())) {
        this.is_error_email = true
        return
      }
      if (this.company.length <= 0) {
        this.is_error_company_name = true
        return
      }

      this.$axios.$post('/api/company-contact', data).then(() => {
        this.name = ''
        this.email = ''
        this.company = ''
        this.details = ''
        this.size = ''
        this.budget = ''

        this.is_error_email = false
        this.is_error_name = false
        this.is_error_company_name = false

        this.is_blocked = false
        this.is_done = true

        this.track()

        setTimeout(() => {
          this.is_sent = false
          this.is_done = false
        }, 5000)
      })
    },

    track() {
      if (this.$gtag !== undefined) {
        this.$gtag.event('conversion', {
          send_to: 'AW-10868833249/37WpCK7nhbQDEOH31L4o',
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped>

section {
  width: 100%;
  max-width: 100%;
  padding: 0;

  h2 {
    margin-bottom: 40px;
    
    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
      text-align: center;
    }
  }

  .contact-us {
    background-color: $main-black;
    padding: 40px 20px;

    @include tablet-and-up {
      padding: 60px 32px;
    }

    h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 1.4em;
      color: #fff;
      margin-bottom: 32px;

      @include tablet-and-up {
        font-size: 24px;
      }

      @include desktop-and-up {
        font-size: 30px;
      }

      a {
        text-decoration: none;
        color: $main-green;
      }
    }

    .info-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 32px;

      @include tablet-and-up {
        margin-bottom: 60px;
      }

      .hero {
        display: none;

        @include desktop-and-up {
          display: block;
        }
      }
      form {
        width: 100%;
        background-color: $main-green;
        padding: 24px 12px;
        text-align: left;
        max-width: 768px;

        @include tablet-and-up {
          padding: 32px;
        }

        .input-wrapper {
          display: flex;
          position: relative;
          flex-direction: column;
          margin-bottom: 16px;
          font-size: 18px;

          @include desktop-and-up {
            margin-bottom: 32px;
          }

          label {
            font-weight: 700;
            font-size: 16px;
            text-transform: uppercase;
          }

          .input {
            position: relative;
          }

          .input-error {
            input {
              border: 1px solid #FF0000;
            }

            .error {
              display: block;
            }
          }

          input,textarea,select {
            border: 1px solid $main-black;
            padding: 8px 14px;
            font-size: 14px;
            width: 100%;

            &::placeholder {
                color: $main-black;
            }

            @include tablet-and-up {
              font-size: 16px;
            }
          }

          .error {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            width: 18px;
            height: 18px;
            margin: 12px;
            background: url(/icons/alert.svg) center no-repeat;
            cursor: pointer;
            font-size: 16px;
            line-height: 150%;

            &:hover .error-popup {
              display: block;
            }
          }

          .error-popup {
            display: none;
            width: 190px;
            padding: 10px;
            position: absolute;
            border: 1px solid #D6D9DE ;
            background-color: #F1F2F4;
            top: 40px;
            left: -85px;
            z-index: 1;

            &:after, &:before{
              content:'';
              display:block;
              width:0;
              height:0;
              position:absolute;
              top: -8px;
              left: 85px;
              z-index: 1;
              border-bottom: 8px solid #F1F2F4;
              border-right:8px solid transparent;
              border-left:8px solid transparent;

            }

            &:after {
              left: 83px;
              top: -10px;
              z-index: 0;
              border-bottom: 10px solid #D6D9DE;
              border-right: 10px solid transparent;
              border-left: 10px solid transparent;
            }
          }

          .form-select {
            padding: 0 14px;
            background-color: #fff;
            border: 1px solid $main-black;
            :deep(div) {
              font-size: 16px;
              border-bottom: 0;
            }
            :deep(.select__dropdown) {
              top: 40px;
              left: -1px;
              width: calc(100% + 2px);
              border-bottom: 1px solid $main-black;
            }
            :deep(.select__dropdown_inner) {
              padding: 0px;
              margin: 0;
            }
            :deep(.select__dropdown_item) {
              padding-left: 20px;
              &:hover {
                background-color: $main-green;
                color: $main-black;
              }
            }
          }
        }

        h3 {
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 12px;
          
          @include tablet-and-up {
            font-size: 24px;
          }

          @include desktop-and-up {
            font-size: 30px;
          }

        }

        .main-inputs {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid $main-black;

          @include tablet-and-up {
            flex-direction: row;
            gap: 24px;
          }

          .single-inputs {
            @include tablet-and-up {
              flex-basis: 0;
              flex-grow: 1;
            }
          }

          .text-areas {
            @include tablet-and-up {
              flex-basis: 0;
              flex-grow: 1;
              margin-bottom: 16px;
            }

            @include desktop-and-up {
              margin-bottom: 32px;
            }

            .input-wrapper {
              height: 100%;

              textarea {
                height: 100%;
              }
            }
          }
        }

        .additional-inputs {
          margin-top: 20px;

          @include desktop-and-up {
            margin-top: 32px;
          }

          .selects {
            display: flex;
            flex-direction: column;
            @include tablet-and-up {
              flex-direction: row;
              gap: 20px;
            }

            .input-wrapper {
              @include tablet-and-up {
                flex-grow: 1;
                flex-basis: 0;
              }
              
              @include desktop-and-up {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
    button {
      margin: auto;
    }
  }
}

</style>