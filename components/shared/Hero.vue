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
          <b-form-input id="email-input" v-model="email" trim placeholder="Enter your email here"/>
        </b-form-group>
      </div>
      <div class="button">
        <BaseButton @click="sendEmail()">
          Schedule a call
        </BaseButton>
      </div>
    </div>
    <div class="img">
      <img :src="require('~/assets/images/shared' + heroImg)" alt="hero-img"/>
    </div>
  </section>


  <!-- <b-container class="section">
    <b-row>
      <b-col class="text-left px-0">
        <h1 class="title-global">
          <slot name="title"></slot>
        </h1>
        <p class="text">
          <slot name="text"></slot>
        </p>
        <b-row class="align-items-end">
          <b-col>
            <b-form-group
              class="email-input"
              id="contact-us-fieldset"
              label="Email"
              label-for="email-input"
              plaintext
            >
              <b-form-input id="email-input" v-model="email" trim placeholder="Enter your email here"/>
            </b-form-group>
          </b-col>
          <b-col>
            <BaseButton @click="sendEmail()">
              Schedule a call
            </BaseButton>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <nuxt-img :src="heroImg"/>
      </b-col>
      <div v-if="sideImg" class="team-img">
        <nuxt-img src="/shared/hero/hero_team.png" />
      </div>
    </b-row>
  </b-container> -->
</template>

<script>

export default {

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
    }
  },

  methods: {
    sendEmail() {
      console.log(this.email)
    }
  }
}

</script>

<style lang="scss" scoped>

section {
  display: flex;
  flex-direction: column;
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