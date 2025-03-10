<template>
  <div class="newsletter">
    <h3>Subscribe to Our Newsletter</h3>
    <p>Get the latest articles and insights directly in your inbox</p>
    <form @submit.prevent="subscribe" class="newsletter-form">
      <InputComponent
        id="newsletter-email"
        :model-value="email"
        placeholder="Enter your email"
        name="email"
        :error-message="emailError"
        @update:modelValue="email = $event"
      />
      <BaseButton :loading="isLoading" class="subscribe-button">Subscribe</BaseButton>
    </form>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsletterSubscribe',
  
  data() {
    return {
      email: '',
      emailError: null,
      isLoading: false,
      successMessage: ''
    }
  },

  methods: {
    async subscribe() {
      const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

      if (!emailRegEx.test(this.email.trim())) {
        this.emailError = 'Please enter a valid email address'
        return
      }

      this.isLoading = true
      this.emailError = null

      try {
        await this.$axios.$post('/api/newsletter', { email: this.email })
        this.successMessage = 'Thank you for subscribing!'
        this.email = ''
      } catch (error) {
        this.emailError = 'Something went wrong. Please try again.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.newsletter {
  margin: 60px 0;
  padding: 40px;
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
  }

  .newsletter-form {
    display: flex;
    gap: 16px;
    max-width: 600px;
    margin: 0 auto;
    flex-direction: column;

    .subscribe-button {
      padding: 28px 76px;
      min-width: 120px;
    }

    @include tablet-and-up {
      .subscribe-button {
        margin: 0 auto;
      }
    }
  }

  .success-message {
    color: $main-black;
    font-weight: 600;
  }
}
</style> 