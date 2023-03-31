<template>
  <b-container class="section">
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
  </b-container>
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

.section {
  margin-top: 60px;
  margin-bottom: 100px;

  .row {
    position: relative;
  }
}

.team-img {
  top: 150px;
  right: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  max-width: 291px;
  max-height: 510px;
}

h1 {
  margin-bottom: 40px;
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