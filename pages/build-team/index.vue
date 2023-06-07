<template>
  <div class="build-team">
    <section>
      <AppearFromMask class="title-mask">
        <h1 class="title-big">
          <span class="green-title">Came up</span>
          with a business idea. <br />
          <span class="green-title">Describe</span>
          in details.
          <span class="green-title">Get</span>
          a real team.
        </h1>
      </AppearFromMask>
    </section>
    <section class="requirements">
      <p class="requirements_title">
        <span>The best talents for your project</span>
        <Logo :fill="'#1E1F21'" />
      </p>

      <h3>Project details</h3>

      <h3>List of technologies</h3>

      <div class="loading">
        <span class="loading__dot"></span>
        <span class="loading__dot"></span>
        <span class="loading__dot"></span>
      </div>
      <p class="loading-text">
        We form a response to your request, this may take some time
      </p>
    </section>

    <OurSuperpowers />
  </div>
</template>

<script>
import OurSuperpowers from '~/components/pages/home/OurSuperpowers'

export default {
  components: {
    OurSuperpowers,
  },
  head: {
    title: 'Build Team with Scrum AI',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Interested in working with us?  Get in touch · hello@scrumlaunch.com · Let’s talk about elevating and accelerating your digital experience.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.build-team {
  section {
    margin: 90px auto;
  }
  h1 {
    font-size: 56px;
    text-align: center;
  }

  .requirements {
    h3 {
      margin: 40px 0 30px;
      text-align: left;
      font-weight: 800;
      font-size: 28px;
    }

    &_title {
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 800;
        font-size: 30px;
      }
    }

    .loading-text {
      margin-top: 20px;
      color: #a9a69e;
      font-weight: 400;
      font-size: 20px;
    }
  }

  .loading {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .loading__dot {
    animation: dot ease-in-out 1.5s infinite;
    background-color: #d9d9d9;
    display: inline-block;
    height: 32px;
    margin: 10px;
    border-radius: 16px;
    width: 32px;
  }

  .loading__dot:nth-of-type(2) {
    animation-delay: 0.3s;
    background-color: #a9a69e;
  }

  .loading__dot:nth-of-type(3) {
    animation-delay: 0.5s;
    background-color: #12e2b0;
  }

  @keyframes dot {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>