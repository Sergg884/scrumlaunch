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

    <!-- <AiRequirementsField v-if="withRequirements" /> -->

    <div v-if="!withRequirements" class="contact">
      <!-- <client-only>
        <script defer type="text/javascript">
          hbspt.forms.create({
            region: "na1",
            portalId: "43665306",
            formId: "395db3ac-77c5-4c11-80b7-e83c4e8fcecb"
          });
        </script>
      </client-only> -->
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
      <nuxt-img format="webp" :src="heroImg" alt="hero-img" onerror="this.style.display='none'" />
    </div>
    <div v-if="developersPage" class="img img-main-mobile">
      <nuxt-img format="webp" :src="heroImgMobile" alt="hero-img-mobile" onerror="this.style.display='none'" />
    </div>
    <!-- <div v-show="is_sent" :class="{ blocked: is_blocked }" class="message-sent">
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
    </div> -->
    <SuccessModal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </section>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import InputComponent from '@/components/ui/InputComponent.vue'
import AiRequirementsField from '@/components/shared/AiRequirementsField.vue'
import SuccessModal from '~/components/shared/SuccessModal'


export default {
  components: {
    lottie,
    InputComponent,
    SuccessModal,
    AiRequirementsField,
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
      isModalVisible: false,
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
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
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
          this.isModalVisible = true

          setTimeout(() => {
            this.is_sent = false
            this.is_done = false
            // this.$router.push({
            //   name: 'contact-us',
            //   params: { email: this.email },
            // })
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
        ? 'Enter a valid email'
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
      width: 620px;
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
      height: 140px;

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
      margin-top: 15px;
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