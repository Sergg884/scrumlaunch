<template>
  <div class="requirements">
    <label class="requirements-label" for="requirements"
      >Build requirements & staff your project from a text prompt.</label
    >
    <div class="requirements-input" :class="{ 'empty': isRequirementsEmpty }">
      <textarea
        id="requirements"
        v-model="requirements"
        type="text"
        :placeholder="placeholder"
        maxlength="200"
        :class="{ 'empty-textarea': isRequirementsEmpty }"
        @input="onInput"
      />
      <span class="requirements-input_characters"
        >{{ requirements.length }}/200</span
      >
      <img
        class="requirements-input_icon"
        src="/icons/attention.svg"
        alt="attention"
      />
      <div class="requirements-input_attention hide">
        <p>
          Enter a detailed description of your needs whether product
          requirements or specific technical roles you need filled. See examples
          below.
        </p>
        <ul>
          <li>
            I need a team of react & python developers for my used clothing
            marketplace. It requires a mobile application for users to list, buy
            and sell items as well as an admin dashboard for managing users and
            analytics.
          </li>
          <li>
            I need a react developer with NextJS experience who is able to work
            in the EST time zone and has great interpersonal skills and strong
            English.
          </li>
        </ul>
      </div>
      <BaseButton class="requirements-input_button" @click="setRequirements()">
        GENERATE
      </BaseButton>
    </div>
    <BaseButton class="requirements-button_mobile" @click="setRequirements()">
      GENERATE
    </BaseButton>
    <nuxt-link
      to="/contact-us"
      class="requirements_link"
      :class="{ page: page }"
    >
      Want to talk to someone the old fashioned way? Schedule a call
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      requirements: '',
      isRequirementsEmpty: false,
    }
  },
  methods: {
    onInput(e) {
      this.isRequirementsEmpty = false
    },
    setRequirements() {
      if (!this.requirements.length) {
        this.isRequirementsEmpty = true
      } else {
        this.$store.commit('requirements/SET_REQUIREMENTS', this.requirements)
        this.$router.push('/build-team/result')
      }
    },
  },
  computed: {
    placeholder() {
      return this.isRequirementsEmpty ? 'Error: missing requirements' : 'Enter requirements'
    }
  }
}
</script>

<style lang="scss" scoped>
.requirements {
  text-align: left;
  order: 3;

  &-button_mobile {
    margin: 60px auto 0;
    width: 250px;
    padding: 17px;
    font-weight: 400;
    font-size: 14px;

    @include tablet-and-up {
      display: none;
    }
  }

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

    &.empty {
      border: 1px solid #FF0000;
    }

    textarea {
      width: 100%;
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

      &.empty-textarea {
        &::placeholder {
          font-weight: 600;
          color: #FF0000;
        }
      }

      @include tablet-and-up {
        width: 80%;
        padding: 8px 20px;
        font-size: 18px;
      }
    }

    &_button {
      display: none;
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 0;

      @include tablet-and-up {
        display: block;
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
        top: 25px;
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
    display: block;
    margin-top: 20px;
    padding: 0 15px;
    font-weight: 600;
    font-size: 14px;
    color: #1e1f21;
    line-height: 1;
    text-decoration: underline;
    text-align: center;

    @include tablet-and-up {
      margin-top: 40px;
      padding: 0;
    }

    @include desktop-and-up {
      margin-top: 60px;
      text-align: left;
    }

    &.page {
      display: block;
      margin-bottom: 80px;
      text-align: center;

      @include tablet-and-up {
        margin-bottom: 150px;
      }
    }

    &:hover {
      text-decoration: none;
    }

    @include tablet-and-up {
      font-size: 16px;
    }
  }
}
</style>
