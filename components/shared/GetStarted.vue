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
              <div class="input">
                <label for="name">
                  Name*
                </label>
                <input
                  id="name"
                  v-model="name"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div class="input">
                <label for="email">
                  Email*
                </label>
                <input
                  id="email"
                  v-model="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div class="input">
                <label for="company">
                  Company*
                </label>
                <input
                  id="company"
                  v-model="company"
                  placeholder="Enter company name"
                  type="text"
                />
              </div>
            </div>
            <div class="text-areas">
              <div class="input">
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
              <div class="input">
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
              <div class="input">
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

      const data = {
        name: this.name,
        email: this.email,
        company: this.company,
        details: this.details,
        size: this.size,
        budget: this.budget,
      }

      this.$axios.$post('/api/company-contact', data).then(() => {
        this.name = ''
        this.email = ''
        this.company = ''
        this.details = ''
        this.size = ''
        this.budget = ''

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
  padding-left: 0;
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

        @include tablet-and-up {
          padding: 32px;
        }

        .input {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;

          @include desktop-and-up {
            margin-bottom: 32px;
          }

          label {
            font-weight: 700;
            font-size: 16px;
            text-transform: uppercase;
          }

          input,textarea,select {
            border: 1px solid $main-black;
            padding: 8px 14px;
            font-size: 14px;

            &::placeholder {
                color: $main-black;
            }

            @include tablet-and-up {
              font-size: 16px;
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
              border-bottom: 1px solid $main-black;
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

            .input {
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

            .input {
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