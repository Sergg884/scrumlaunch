<template>
  <transition name="modal-fade">
    <div class="dialog" @click="$emit('close')">
      <div
        class="dialog__content"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click.stop
        >
        <header id="modalTitle" class="modal-header">
          <img
            :src="require('@/assets/icons/black_close.svg')"
            aria-label="Close modal"
            @click="$emit('close')"
            />
        </header>
        <slot>
          <div class="modal-body">
            <span class="title-global popup-title">
              need to <span class="green-title">hire developers now?</span>
            </span>
            <div class="modal-body__content">
              <nuxt-img
                src="/shared/big_search_icon.svg"
                />
              <div class="modal-form">
                <h2>Fill out the form</h2>
                <div class='input-container'>
                  <label htmlFor="name">
                    Name*
                  </label>
                  <SingleInput
                    id="name"
                    name="name"
                    :modelValue="name"
                    placeholder="Enter your name"
                    :errorMessage="nameError"
                    @update:modelValue="handleFieldChange('name', $event)"
                  />
                </div>
                <div class='input-container'>
                  <label htmlFor="email">
                    Email*
                  </label>
                  <SingleInput
                    id="email"
                    name="email"
                    :modelValue="email"
                    placeholder="Enter your email"
                    :errorMessage="emailError"
                    @update:modelValue="handleFieldChange('email', $event)"
                  />
                </div>
              </div>
            </div>
            <div class="button-container">
              <button class="form_button" @click="validateForm()">Submit</button>
            </div>
          </div>
          <div
            v-show="is_sent"
            :class="{ blocked: is_blocked }"
            class="contact-form__frame_2"
          >
            <div v-show="is_done" class="header-1">
              Your message<br />has been sent
            </div>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
    name: "ContactModal",
    data: () => ({
        name: "",
        nameError: null,
        email: "",
        emailError: null,
        is_blocked: false,
        is_sent: false,
        is_done: false,
    }),
    methods: {
        close() {
            this.$emit("close");
        },
        handleFieldChange(name, value) {
            this[name] = value;
        },
        sendForm() {
            this.is_sent = true;
            this.is_blocked = true;
            const data = {
                name: this.name,
                email: this.email,
            };
            this.$axios.$post("/api/contact-us", data).then(() => {
                this.name = "";
                this.email = "";
                this.is_blocked = false;
                this.is_done = true;
                this.track();
                setTimeout(() => {
                    this.is_sent = false;
                    this.is_done = false;
                }, 5000);
                this.close();
            });
        },
        validateForm() {
            // eslint-disable-next-line prefer-regex-literals
            const emailRegEx = new RegExp("^(([^<>()[\\]\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$", "i");
            this.nameError = this.name === "" ? "Please, add your name here" : null;
            this.emailError = !emailRegEx.test(this.email)
                ? "Enter a valid email"
                : null;
            if (this.nameError === null &&
                this.emailError === null) {
                this.sendForm();
            }
        },
        track() {
            if (this.$gtag !== undefined) {
                this.$gtag.event("conversion", {
                    send_to: "AW-10868833249/37WpCK7nhbQDEOH31L4o",
                });
            }
        },
    },
}
</script>

<style lang="scss" scoped>

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .1s ease;
  }
  .dialog {
    z-index: 100;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }
  .dialog__content {
    margin: auto;
    background: white;
    overflow: auto;
    min-height: 50px;
    max-width: 1000px;
    min-width: 300px;
    height: 100%;
    padding: 20px 30px;
  }
  .modal-header {
    display: flex;
    justify-content: flex-end;
  }
  .modal-body {
    padding: 10px 10px 30px 10px;
    text-align: start;
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 10px;
    }
  }
  .popup-title {
    max-width: 786px;
    padding-right: 20px;
  }

  .modal-form {
    width: 341px;
    background-color: $main-green;
    border: 1px solid var($main-black);
    padding: 32px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  label {
    font-size: 16px;
    color: $main-black;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 8px;
    white-space: nowrap;
  }

  input[type='text'] {
    height: 42px;
    border: 1px solid var($main-black);
    padding-left: 10px;
    margin-top: 8px;
    background-color: white;
    @media screen and (max-width: 768px) {
      width: auto;
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin: 30px 10px 40px 10px;
  }
  .form_button {
    background: #12e2b0;
    border-radius: 54px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #1e1f21;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    padding: 28px 150px;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease;
    font-family: 'Proxima Nova';

  &:active {
    background: #1e1f21;
    color: #12e2b0;
  }

  &:hover {
    background: #1e1f21;
    color: #ffffff;
  }

  @media screen and (max-width: 1439px) {
    font-size: 14px;
    padding: 20px 80px;
  }

  @media screen and (max-width: 790px) {
    font-size: 12px;
    padding: 20px 75px;
  }
}
</style>