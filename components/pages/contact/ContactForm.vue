<template>
  <div class="contact-form">
    <div class="contact-form__frame_1">
      <AppearFromMask><p class="title-big">HeLLO,</p></AppearFromMask>

      <div class="contact-form--wrapper">
        <TypingEffect delay="0.05"
          ><label class="title-global" for="name">MY name is</label></TypingEffect
        >
        <div class="contact-form__input_wrap">
          <InputComponent
            id="name"
            class="contact-form--wrapper--input"
            :modelValue="name"
            placeholder="Enter your name here"
            name="name"
            :errorMessage="nameError"
            @update:modelValue="handleFieldChange('name', $event)"
          />
          <img
            :src="require('@/assets/icons/pencil_separate.svg')"
            class="contact-form__pencil_separate"
          />
          <img
            :src="require('@/assets/icons/pencil_line.svg')"
            class="contact-form__pencil_line"
          />
        </div>
      </div>

      <div class="contact-form--wrapper">
        <TypingEffect delay="0.05"
          ><label class="title-global" for="email"
            >You can contact me at</label
          ></TypingEffect
        >
        <InputComponent
          id="email"
          class="contact-form--wrapper--input input-email"
          :modelValue="email"
          placeholder="Enter your email or phone number here"
          name="email"
          :errorMessage="emailError"
          @update:modelValue="handleFieldChange('email', $event)"
        />
      </div>

      <div class="contact-form--wrapper">
        <TypingEffect delay="0.05"
          ><label class="title-global" for="email"
            >I’m interested in</label
          ></TypingEffect
        >
        <InputComponent
          id="project"
          class="contact-form--wrapper--input input-project"
          :modelValue="project"
          placeholder="Enter your project details here"
          name="project"
          :errorMessage="projectError"
          @update:modelValue="handleFieldChange('project', $event)"
        />
      </div>



      <div class="contact-form--wrapper-btn">
        <BaseButton @click="validateForm()">
          Send
        </BaseButton>
      </div>
    </div>

    <div
      v-show="is_sent"
      :class="{ blocked: is_blocked }"
      class="contact-form__frame_2"
    >
      <lottie
        v-show="is_done"
        class="contact-form__frame_2__image"
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
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import InputComponent from '@/components/pages/contact/InputComponent.vue'

export default {
  components: {
    InputComponent,
    lottie,
  },

  data: () => ({
    name: '',
    nameError: null,
    email: '',
    emailError: null,
    project: '',
    projectError: null,

    is_blocked: false,
    is_sent: false,
    is_done: false,
  }),

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },

    sendForm() {
      this.is_sent = true
      this.is_blocked = true

      const data = {
        name: this.name,
        email: this.email,
        details: this.project,
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

    validateForm() {
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )
      this.nameError = this.name === '' ? 'Please, add your name here' : null
      this.emailError = !emailRegEx.test(this.email.trim())
        ? 'Please, enter your correct email'
        : null
      this.projectError =
        this.project === '' ? 'Please, specify your project details here' : null

      if (
        this.nameError === null &&
        this.emailError === null &&
        this.projectError === null
      ) {
        this.sendForm()
      }
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
.contact-form {
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1e1f21;
  position: relative;

  &--icon {
    position: absolute;
    width: 114px;
    height: 130px;
    top: 43px;
    right: 30px;
    z-index: 2;
  }

  & .header-big {
    margin-bottom: 60px;
  }

  &--wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 40px;

    &:deep(.wrap.typing_1) {
      flex: initial;
    }

    label {
      margin-bottom: 16px;
    }

    &--input {
      width: 100%;
    }
  }

  &--wrapper-btn {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__input_wrap {
    position: relative;
    width: 100%;

    .input-item {
      width: 100%;
    }
  }

  &__pencil_separate {
    position: absolute;
    right: 0;
    bottom: 40px;
    width: 88px;
    z-index: 1;
    transform: translate(0px, 0px);
    animation: pencil 1s linear infinite;
  }

  &__pencil_line {
    position: absolute;
    top: -154px;
    right: 76px;
    width: 50px;
    z-index: 1;
  }

  &__frame_1 {
    width: 100%;
  }

  &__frame_2 {
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
}

@media screen and (min-width: 768px) {
  .contact-form {

    &--icon {
      position: absolute;
      width: 225px;
      height: 257px;
      top: 51px;
      right: 90px;
    }

    &--wrapper {
      margin-bottom: 50px;

      label {
        margin-bottom: 20px;
      }

      &--input {
        width: 50.4%;

        &.input-project {
          width: 83.76%;
        }
      }
    }

    &__input_wrap {
      position: relative;
      width: 39%;

      .input-item {
        width: 100%;
      }
    }

    &__pencil_separate {
      position: absolute;
      right: -418px;
      bottom: 96px;
      width: 239px;
      z-index: 1;
      transform: translate(0px, 0px);
      animation: pencil 1s linear infinite;
    }

    &__pencil_line {
      position: absolute;
      top: -190px;
      right: -204px;
      width: 107px;
      z-index: 1;
    }
  }
}

@media screen and (min-width: 1140px) {
  .contact-form {
    & :deep(.header-big) {
      margin-bottom: 30px;
    }

    &--wrapper {
      position: relative;
      align-items: flex-start;
      margin-bottom: 10px;
      flex-direction: row;
      align-items: center;

      & :deep(.title-global) {
        flex-wrap: nowrap !important;
        margin-right: 15px;
        margin-top: 27px;
      }

      & :deep(.contact-form--wrapper--input) {
        width: 100%;
      }

      & :deep(.input-item--input-wrapper--input) {
        // padding-left: 80px;
        text-align: center;
      }
    }

    &--wrapper-btn {
      margin-top: 40px;
    }

    &__input_wrap {
      position: relative;
      width: 39%;

      .input-item {
        width: 100%;
      }
    }

    &__pencil_separate {
      position: absolute;
      right: -216px;
      bottom: 55px;
      z-index: 1;
      transform: translate(0px, 0px);
      animation: pencil 1s linear infinite;
    }

    &__pencil_line {
      position: absolute;
      top: -79px;
      right: -10px;
      z-index: 1;
    }
  }
}

@media screen and (min-width: 1280px) {
  .contact-form {

    &--icon {
      position: absolute;
      width: 312.38px;
      height: 353px;
      top: 156px;
      right: 177px;
    }

    &--wrapper {
      position: relative;
      align-items: flex-start;
      margin-bottom: 40px;
      flex-direction: row;
      align-items: center;

      label {
        margin-bottom: 0px;
        margin-right: 20px;
      }

      &--input {
        // width: 47%;
        margin-top: 27px;

        &.input-project {
          width: 48%;
        }

        &.input-email {
          width: 39%;
        }
      }
    }

    &--wrapper-btn {
      margin-top: 40px;
    }

    &__input_wrap {
      position: relative;
      width: 39%;

      .input-item {
        width: 100%;
        margin-top: 27px;
      }
    }

    &__pencil_separate {
      position: absolute;
      right: -216px;
      bottom: 58px;
      z-index: 1;
      transform: translate(0px, 0px);
      animation: pencil 1s linear infinite;
    }

    &__pencil_line {
      position: absolute;
      top: -76px;
      right: -10px;
      z-index: 1;
    }
  }
}

@keyframes pencil {
  0% {
    transform: translate(0px, 0px);
  }

  25% {
    transform: translate(3px, 0px);
  }

  50% {
    transform: translate(3px, -3px);
  }

  75% {
    transform: translate(0px, -3px);
  }
}
</style>
