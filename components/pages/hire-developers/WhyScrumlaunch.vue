<template>
  <section>
    <h2 class="title-global">
      Why Scrumlaunch?
    </h2>
    <div class="tabs">
      <div v-for="(tab, index) in tabs" :key="tab.title" class="tab">
        <nuxt-img :src="tab.img" :alt="'work-with-us-' + index" />
        <h3>
          {{ tab.title }}
        </h3>
        <p>
          {{ tab.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      tabs: [
        {
          img: '/services/icon-1.svg',
          title: '2x Reduced time to recruit',
          text: 'Avoid long hiring cycles and get a talented developer or team up and running in days or weeks not months.'
        },
        {
          img: '/services/icon-4.svg',
          title: 'Top 1% of global talent',
          text: 'Our tailor-made talent evaluation process focuses on developers who have the ability to contribute quickly and act as problem solvers without micromanagement.'
        },
        {
          img: '/services/icon-5.svg',
          title: '3 Levels of quality control',
          text: 'Over the past 7 years, the ScrumLaunch technology leadership team has developed effective and transparent internal management controls to ensure high quality work.'
        },
        {
          img: '/services/icon-3.svg',
          title: '1 Month trial period',
          text: 'If you aren’t fully satisfied, we will staff a replacement at no cost and you won’t pay for the unsuccessful trial period.'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

section {
  h2 {
    margin-bottom: 40px;

    @include tablet-and-up {
      padding: 0 45px;
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      text-align: center;
      margin-bottom: 80px;
    }
  }

  .tabs {
    @include tablet-and-up {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }

    @include desktop-and-up {
      row-gap: 80px;
      column-gap: 40px;
    }
    

    .tab {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      margin-bottom: 24px;

      img {
        margin-bottom: 16px;
        width: 24px;
        height: 24px;

        @include tablet-and-up {
          width: 36px;
          height: 36px;
          margin-bottom: 24px;
        }

        @include desktop-and-up {
          width: 56px;
          height: 56px;
          margin-bottom: 40px;
        }
      }

      h3 {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 8px;

        @include tablet-and-up {
          font-size: 24px;
          margin-bottom: 12px;
        }

        @include desktop-and-up {
          font-size: 30px;
          margin-bottom: 16px;
        }
      }

      p {
        font-weight: 400;
        font-size: 14px;

        @include tablet-and-up {
          font-size: 18px;
        }
      }
    }
    
  }


}

</style>