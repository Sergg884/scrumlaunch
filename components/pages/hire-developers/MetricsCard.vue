<template>
  <div class="metric">
    <ul class="conatiner_lng">
      <li>{{ lang }} Metrics</li>
      <li>April 2022</li>
    </ul>
    <div class="metric__items">
      <div class="item">
        <p class="title">{{ isPopularLanguage ? '5 Days' : '9 Days' }}</p>
        <p class="desc">Average time to staff a project</p>
      </div>
      <div class="item">
        <p class="title">{{ isPopularLanguage ? '30+' : '7+' }}</p>
        <p class="desc">Scrumlaunch {{ lang }} Developer Projects</p>
      </div>

      <div class="item">
        <p class="title">
          {{ isPopularLanguage ? 'Very High' : 'Medium High' }}
        </p>
        <p class="desc">Global Demand</p>
      </div>

      <div class="btn_wrap">
        <NuxtLink class="btn" to="/contact-us"
          >hire {{ lang }} developerS</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang: { type: String, default: '' },
  },

  data() {
    return {
      popularLanguages: [
        'PHP',
        'Swift',
        'Python',
        'Node JS',
        'React JS',
        'React Native',
        'Kotlin',
        'Vue',
        'Web Developers',
        'Software Developers',
        'Django Developers',
        'iOS Developers',
        'Android Developers',
        'Laravel Developers',
      ]
    }
  },

  // watch - better to use with events, computed for transforming data

  computed: {
    isPopularLanguage() {
      if (this.popularLanguages.includes(this.lang)) {
        return true
      }
      return false
    }
  },

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.metric {
  border: 1px solid #1e1f21;
  padding: 40px 60px;
  padding-right: 0;
  max-width: 1500px;
  margin: auto;

  &__items {
    display: flex;
    align-items: center;

    .item {
      padding: 0px 50px;
      border-right: 1px solid #1e1f21;
      height: 104px;

      &:first-child {
        padding-left: 0px;
      }

    }

    .title {
      font-weight: 800;
      font-size: 30px;
      line-height: 140%;
      margin-bottom: 8px;
    }

    .desc {
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
    }
  }
}

.conatiner_lng {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 26px;

  & > li:first-child {
    font-weight: 600;
  }

  & > li:last-child::before {
    content: '';
    position: relative;
    top: -1px;
    display: inline-block;
    margin-right: 12px;
    margin-left: 12px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 1;
    background: #1e1f21;
  }
}

.btn_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0 25px;

  .btn {
    padding: 26px 40px;
    font-size: 20px;
    width: auto;
    height: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 1440px) {
  .metric {
    padding: 40px;

    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);

      .item {
        height: auto;

        &:nth-child(3) {
          border-right: none;
        }
      }
    }
  }

  .btn_wrap {
    margin-top: 40px;
    grid-area: 2 / 1 / 3 / 4;
  }

  .conatiner_lng {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .metric {
    padding: 40px 26px;

    &__items {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);

      .item {
        padding: 0px 25px;
        border-right: none;
        &:nth-child(1) {
          border-right: 1px solid #1e1f21;
        }

        &:nth-child(3) {
          padding: 0px;
        }
      }
    }
  }

  .btn_wrap {
    margin: 0px;
    grid-area: 3 / 1 / 4 / 3;

    .btn {
      min-width: auto;
    }
  }
}

@media screen and (max-width: 425px) {
  .metric {
    &__items {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);

      .item {
        border-right: none;
        padding: 0px;

        &:nth-child(1) {
          border-right: none;
          grid-area: 1 / 1 / 2 / 2;
        }

        &:nth-child(2) {
          grid-area: 2 / 1 / 3 / 2;
        }

        &:nth-child(3) {
          grid-area: 3 / 1 / 4 / 2;
        }

        &:nth-child(4) {
          grid-area: 4 / 1 / 5 / 2;
        }
      }
    }

    .btn_wrap {
      grid-area: 4 / 1 / 5 / 2;
      padding: 0px;
    }
  }
}
</style>
