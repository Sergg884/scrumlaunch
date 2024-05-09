<template>
  <div class="contact">
    <div class="hero">
      <section>
        <AppearFromMask class="title-mask">
          <h1 class="title-big">
            Let’s
            <span class="green-title">Talk</span>
          </h1>
        </AppearFromMask> 
        <AppearFromMask>
          <p>
            Interested in working with us?
            <span class="mark">Send us an email</span>
            or start a conversation by filling out the form below.
          </p>
        </AppearFromMask>
      </section>
    </div>
    <section class="form">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import ContactForm from '~/components/pages/contact/ContactForm.vue';

export default {
  name: 'ContactUs',

  components: {
    ContactForm,
  },

  head: {
    title: 'Contact Us | ScrumLaunch',
    meta: [
      {
        hid: 'og:description',
        name: 'description',
        content: 'Interested in working with us?  Get in touch · hello@scrumlaunch.com · Let’s talk about elevating and accelerating your digital experience.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>

.contact {
  .hero {
    width: 100%;
    background-color: $main-black;

    section {
      margin: auto;
      padding-top: 125px;
      padding-bottom: 80px;
      display: flex;
      align-items: flex-start;
      gap: 29px;

      @include tablet-and-up {
        gap: 36px;
      }

      @include desktop-and-up {
        align-items: flex-end;
        gap: 146px;
        padding-top: 206px;
        padding-bottom: 145px;
      }

      .title-mask {
        margin-bottom: 10px !important;
        min-width: 90px;
        h1 {
          color: #fff;
        }
      }
      

      p {
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        padding-top: 50px;

        @include tablet-and-up {
          padding-top: 120px;
          font-size: 24px;
        }

        @include desktop-and-up {
          padding-top: 0;
          font-size: 30px;
        }
      }
    }
  }
}

</style>