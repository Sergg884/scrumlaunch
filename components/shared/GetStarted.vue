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
                  v-model="formData.name"
                  type="text"
                  id="name"
                />
              </div>
              <div class="input">
                <label for="email">
                  Email*
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                />
              </div>
              <div class="input">
                <label for="company">
                  Company*
                </label>
                <input
                  v-model="formData.company"
                  type="text"
                  id="company"
                />
              </div>
            </div>
            <div class="text-areas">
              <div class="input">
                <label for="details">
                  Any details you’d like to share?
                </label>
                <textarea 
                  v-model="formData.company"
                  type="text"
                  id="details"
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
                <input
                  v-model="formData.size"
                  type="text"
                  id="company"
                />
              </div>
              <div class="input">
                <label for="company">
                  Total Project Budget
                </label>
                <input
                  v-model="formData.budget"
                  type="text"
                  id="company"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <BaseButton>
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
      formData: {
        name: '',
        email: '',
        company: '',
        size: '',
        budget: ''
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/contact-us', this.formData);
        console.log(response);
      } catch (error) {
        console.error(error);
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

          input {
            border: 1px solid $main-black;
            padding: 8px 14px;
            font-size: 14px;

            @include tablet-and-up {
              font-size: 16px;
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