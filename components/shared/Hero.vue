<template>
  <section>
    <div class="hero">
      <h1 :class="`title-big ${developersPage ? 'title-developers' : ''}`">
        <slot name="title"></slot>
      </h1>
      <p class="text-main">
        <slot name="text"></slot>
      </p>
    </div>

    <div class="hero-requirements" v-if="withRequirements">
      <label class="hero-requirements-label" for="requirements"
        >Build requirements & staff your project from a text prompt.</label
      >
      <div class="hero-requirements-input">
        <textarea
          id="requirements"
          v-model="requirements"
          type="text"
          placeholder="Enter requirements"
          maxlength="200"
        />
        <span class="hero-requirements-input_characters"
          >{{ requirements.length }}/200</span
        >
        <img
          class="hero-requirements-input_icon"
          src="/icons/attention.svg"
          alt="attention"
        />
        <div class="hero-requirements-input_attention hide">
          <p>
            Enter a detailed description of your needs whether product
            requirements or specific technical roles you need filled. See
            examples below.
          </p>
          <ul>
            <li>
              I need a team of react & python developers for my used clothing
              marketplace. It requires a mobile application for users to list,
              buy and sell items as well as an admin dashboard for managing
              users and analytics.
            </li>
            <li>
              I need a react developer with NextJS experience who is able to
              work in the EST time zone and has great interpersonal skills and
              strong English.
            </li>
          </ul>
        </div>
        <BaseButton class="hero-requirements-input_button" @click="setRequirements()">
          GENERATE
        </BaseButton>
      </div>
      <nuxt-link to="/contact-us" class="hero-requirements_link">
        Want to talk to someone the old fashioned way? Schedule a call
      </nuxt-link>
    </div>

    <div class="contact" v-if="!withRequirements">
      <div class="input-container">
        <b-form-group
          id="contact-us-fieldset"
          class="email-input"
          label="Email"
          label-for="email-input"
          plaintext
        >
          <InputComponent
            id="email-input"
            class="contact-form--wrapper--input input-email"
            :model-value="email"
            placeholder="Enter your email here"
            name="email"
            :error-message="emailError"
            @update:modelValue="handleFieldChange('email', $event)"
          />
        </b-form-group>
      </div>
      <div class="button">
        <BaseButton @click="sendEmail()"> Schedule a call </BaseButton>
      </div>
    </div>
    <div
      v-if="!is_done"
      :class="`img ${developersPage ? 'img-main img-main-desktop' : ''} ${
        developersMainPage ? 'main' : ''
      }`"
    >
      <nuxt-img format="webp" :src="heroImg" alt="hero-img" />
    </div>
    <div v-if="developersPage" class="img img-main-mobile">
      <nuxt-img format="webp" :src="heroImgMobile" alt="hero-img-mobile" />
    </div>
    <div v-show="is_sent" :class="{ blocked: is_blocked }" class="message-sent">
      <lottie
        v-show="is_done"
        class="message-sent__image"
        name="reliabilityDesktopAnim"
        loop
        renderer="svg"
        :options="{
          animationData: require('~/assets/animation/rocket_launch.json'),
        }"
      />
      <div v-show="is_done" class="title-global">
        Your message<br />has been sent
      </div>
    </div>
  </section>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import InputComponent from '@/components/ui/InputComponent.vue'

export default {
  components: {
    lottie,
    InputComponent,
  },

  props: {
    heroImg: {
      type: String,
      default: '',
    },
    heroImgMobile: {
      type: String,
      default: '',
    },
    sideImg: {
      type: Boolean,
      default: false,
    },
    developersPage: {
      type: Boolean,
      default: false,
    },
    developersMainPage: {
      type: Boolean,
      default: false,
    },
    withRequirements: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      email: '',
      emailError: null,
      is_blocked: false,
      is_sent: false,
      is_done: false,
      hide_hero_img: false,
      requirements: '',
    }
  },

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },

    setRequirements() {
      console.log(this.requirements)
      this.$store.commit('requirements/SET_REQUIREMENTS', this.requirements)
      this.$router.push('build-team')
    },

    sendEmail() {
      const data = {
        name: '',
        email: this.email,
        details: '',
      }

      if (this.validateEmail(this.email)) {
        this.is_blocked = true

        this.$axios.$post('/api/contact-us', data).then(() => {
          this.is_sent = true
          this.is_blocked = false
          this.is_done = true

          this.track()

          setTimeout(() => {
            this.is_sent = false
            this.is_done = false
            this.$router.push({
              name: 'contact-us',
              params: { email: this.email },
            })
            this.name = ''
            this.email = ''
            this.project = ''
          }, 5000)
        })
      }
    },

    validateEmail(email) {
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )
      this.emailError = !emailRegEx.test(email.trim())
        ? 'Please, enter your correct email'
        : null

      if (this.emailError === null) {
        return true
      }

      return false
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
section {
  display: flex;
  flex-direction: column;
  position: relative;

  @include desktop-and-up {
    margin-bottom: 100px;
  }

  @include desktop-and-up {
    display: grid;
    grid-template-columns: 0.7fr 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-top: 80px;
  }

  .hero {
    @include tablet-and-up {
      margin-bottom: 60px;
    }
    @include desktop-and-up {
      text-align: left;
      grid-area: 1 / 1 / 2 / 2;
    }

    h1 {
      margin-bottom: 16px;
      @include tablet-and-up {
        margin-bottom: 36px;
      }

      &.title-developers {
        line-height: 130%;
      }
    }

    p {
      @include tablet-and-up {
        padding: 0 30px;
      }
      @include desktop-and-up {
        padding: 0;
      }
    }
  }

  .hero-requirements {
    text-align: left;
    order: 3;

    @include desktop-and-up {
      grid-area: 2 / 1 / 3 / 2;
    }

    &-label {
      padding-right: 50px;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;

      @include tablet-and-up {
        padding-right: 0;
        font-size: 16px;
      }
    }

    &-input {
      display: flex;
      position: relative;
      border: 1px solid #1e1f21;

      textarea {
        width: 80%;
        padding: 5px 10px;
        border: none;
        resize: none;
        font-weight: 500;
        font-size: 16px;
        color: #1e1f21;
        letter-spacing: -0.01em;
        overflow: auto;
        outline: none;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

        &::placeholder {
          font-weight: 600;
          color: #1e1f21;
        }

        @include tablet-and-up {
          padding: 8px 20px;
          font-size: 18px;
        }
      }

      &_button {
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 0;

        @include tablet-and-up {
          width: 185px;
          font-size: 18px;
        }
      }

      &_characters {
        position: absolute;
        bottom: -25px;
        font-weight: 500;
        font-size: 14px;
        color: #a9a69e;
      }

      &_icon {
        position: absolute;
        right: 0px;
        top: -40px;

        &:hover + .hide {
          display: block;
        }

        @include tablet-and-up {
          right: -40px;
          top: 28px;
        }
      }

      &_attention {
        display: none;
        width: 100%;
        position: absolute;
        bottom: 120px;
        right: 12px;
        padding: 10px;
        background-color: #1e1f21;
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        z-index: 1;

        @include tablet-and-up {
          width: 600px;
          padding: 25px 20px;
          top: -230px;
          right: -28px;
          bottom: initial;
          font-size: 14px;
        }

        ul {
          list-style-type: decimal;
          padding-left: 15px;
          color: #12e2b0;
          font-size: 12px;

          @include tablet-and-up {
            font-size: 14px;
          }
        }

        &::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          bottom: -14px;
          right: 0;
          border-style: solid;
          border-width: 0 15px 15px 0;
          border-color: transparent #1e1f21 transparent transparent;

          @include tablet-and-up {
            bottom: -19px;
            border-width: 0 20px 20px 0;
          }
        }
      }
    }

    &_link {
      display: inline-block;
      margin-top: 40px;
      font-weight: 600;
      font-size: 14px;
      color: #1e1f21;
      line-height: 1;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }

      @include tablet-and-up {
        font-size: 16px;
      }
    }
  }

  .message-sent {
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

  .img {
    margin-bottom: 40px;

    @include desktop-and-up {
      position: absolute;
      width: 630px;
      top: 15px;
    }

    &.img-main {
      @include desktop-and-up {
        padding: 0 0 0 100px;
        position: absolute;
        top: -70px;

        img {
          width: 940px;
        }
      }

      &.main {
        img {
          width: 800px;
        }
      }

      &-desktop {
        display: none;

        @include desktop-and-up {
          display: block;
        }
      }

      &-mobile {
        img {
          width: 425px;

          @media (min-width: 568px) {
            width: 100%;
          }
        }

        @include desktop-and-up {
          display: none;
        }
      }
    }

    img {
      width: 100%;
    }

    @include tablet-and-up {
      padding: 0 30px;
    }

    @include desktop-and-up {
      grid-area: 1 / 2 / 3 / 3;
      text-align: right;
    }
  }

  .contact {
    order: 3;

    @include desktop-and-up {
      grid-area: 2 / 1 / 3 / 2;
      display: flex;
      text-align: left;
      gap: 40px;

      div {
        flex-basis: 0;
        flex-grow: 1;
      }
    }

    .input-container {
      text-align: left;
      margin-bottom: 40px;

      @include desktop-and-up {
        margin-bottom: 0;
      }
    }

    .button {
      text-align: -webkit-center;
    }
  }
}

::v-deep .email-input {
  margin-bottom: 0;
  label {
    font-weight: 900;
    font-size: 18px;
    line-height: 140%;
    color: $main-black;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    @include desktop-and-up {
      font-size: 36px;
    }
  }

  input {
    color: $main-black;
    border: none;
    border-radius: 0;
    padding-left: 0;
    font-size: 18px;
    line-height: 150%;

    &:focus {
      border-color: unset;
      outline: none;
      box-shadow: none;
    }
  }
}
</style>