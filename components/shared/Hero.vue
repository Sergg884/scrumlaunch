<template>
  <section>
    <div class="hero">
      <h1 class="title-big">
        <slot name="title"></slot>
      </h1>
      <p class="text-main">
        <slot name="text"></slot>
      </p>
    </div>
    <div class="contact">
      <div class="input-container">
        <b-form-group
          class="email-input"
          id="contact-us-fieldset"
          label="Email"
          label-for="email-input"
          plaintext
        >
          <b-form-input id="email-input" v-model="email" trim placeholder="Enter your email here" />
        </b-form-group>
      </div>
      <div class="button">
        <BaseButton @click="sendEmail()">
          Schedule a call
        </BaseButton>
      </div>
    </div>
    <div class="img">
      <nuxt-img :src="'/shared' + heroImg" alt="hero-img" />
      <!-- <img :src="require('~/assets/images/shared' + heroImg)" alt="hero-img"/> -->
    </div>
    <div
      v-show="is_sent"
      :class="{ blocked: is_blocked }"
      class="message-sent"
    >
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

export default {

  components: {
    lottie,
  },

  props: {
    heroImg: {
      type: String,
      default: ''
    },
    sideImg: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      email: '',
      emailError: null,

      is_blocked: false,
      is_sent: false,
      is_done: false,
    }
  },

  methods: {
    sendEmail() {
      this.is_sent = true
      this.is_blocked = true

      const data = {
        name: '',
        email: this.email,
        details: '',
      }

      this.$axios.$post('/api/contact-us', data).then(() => {
        this.name = ''
        this.email = ''
        this.project = ''

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
  }
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


::v-deep .email-input{
  margin-bottom: 0;
  label {
    font-weight: 900;
    font-size: 36px;
    line-height: 140%;
    color: $main-black;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  input {
    color: $main-black;
    border: none;
    border-bottom: 1px solid;
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