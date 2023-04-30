<template>
  <div class="container section">
    <div class="header-container">
      <div>
        <h1 class="header-1">Let’s <span class="clr-12e2b0">talk</span></h1>
        <div class="text">
          Want to join our team?<br /><span class="mark">Send your CV</span> via
          filling out the form.
        </div>
      </div>
      <div class="img_container">
        <img :src="require('@/assets/illustrations/cv-demo.svg')" />
      </div>
    </div>

    <SendCVForm />
  </div>
</template>

<script>
import SendCVForm from '@/components/contact/SendCVForm.vue'

export default {
  components: {
    SendCVForm,
  },

  scrollToTop: true,
}
</script>

<style lang="scss" scoped>
.header-1 {
  margin-bottom: 40px;
  font-weight: 900;
  font-size: 75px;
  line-height: 140%;
  color: #fff;

  @media screen and (max-width: 1440px) {
    margin-bottom: 40px;
    font-size: 56px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
    text-align: center;
    font-size: 48px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 17px;
    font-size: 24px;
  }
}

.header-container {
  @media screen and (max-width: 1440px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.clr-12e2b0 {
  color: #12e2b0;
}

.mark {
  background: #12e2b0;
  color: #1e1f21;
}

.container {
  padding-left: 8.32%;
  padding-right: 8.32%;
}

.section {
  padding-top: 240px;
  padding-bottom: 240px;
  margin-bottom: 240px;
  background-color: #1e1f21;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  @media screen and (max-width: 1440px) {
    flex-direction: column;

    padding-top: 150px;
    padding-bottom: 100px;
    margin-bottom: 100px;
  }
}

.text {
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #fff;

  @media screen and (max-width: 1440px) {
    max-width: 350px;
  }

  @media screen and (max-width: 768px) {
    max-width: inherit;
    font-size: 16px;
    text-align: center;
  }
}

.img_container {
  margin-top: 120px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }

  & > svg {
    @media screen and (max-width: 1440px) {
      width: 300px;
    }

    @media screen and (max-width: 768px) {
      width: 200px;
      height: auto;
    }
  }
}
</style>
