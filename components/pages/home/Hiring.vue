<template>
  <section>
    <h2 class="title-global">
      Team + Data + AI = Velocity
    </h2>
    <div class="tabs">
      <div class="tab" v-for="(tab, index) in tabs" :key="index">
        <div class="left">
          <h3 class="indicator">
            {{ tab.titleIndicator }}
          </h3>
          <p class="title">
            {{ tab.title }}
          </p>
        </div>
        <div class="right">
          <p class="description-title">
            {{ tab.descriptionTitle }}
          </p>
          <p class="description">
            {{ tab.description }}
          </p>
        </div>
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
          title: 'reduction in time',
          titleIndicator: '4x',
          descriptionTitle: 'Idea to Launch Velocity',
          description: 'We’ve designed AI-enabled workflows within our cross functional teams to focus on shortened cycles from idea to a live product.',
        },
        {
          title: 'candidates pass out screening process',
          titleIndicator: '3%',
          descriptionTitle: 'Highly selective',
          description: 'Due to our rigorous vetting procedure we ensure that you get the best talent to boost your success.',
        },
        {
          title: 'hours',
          titleIndicator: '300K',
          descriptionTitle: 'Proprietary Engineering Velocity Data Set',
          description: 'Over the past 8 years we’ve collected over 300,000 hours of annotated time tracking data to more precisely identify inefficiency and opportunities for velocity acceleration.',
        },
        {
          title: 'higher retention than industry average',
          titleIndicator: '2X',
          descriptionTitle: 'Talent retention',
          description: 'We take care of your engineering team, making sure everyone has a professional development and growth plan, keeps on learning new skills and gets benefits and perks.',
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

section {

  h2 {
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
      text-align: center;
    }
  }
  .tabs {
    display: flex;
    flex-direction: column;
    gap: 21px;

    @include tablet-and-up {
      gap: 32px;
    }
    .tab {
      border: 1px solid $main-black;
      
      @include tablet-and-up {
        display: flex;
      }
      
      .left {
        background-color: $main-green;
        padding: 13px 20px;
        border: 1px solid $main-black;
        margin: -1px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include tablet-and-up {
          flex: 0 0 240px;
          padding: 32px 24px;
          flex-direction: column;
          align-items: start;
          justify-content: start;
        }

        @include desktop-and-up {
          flex: 0 0 274px;
          padding: 18px 20px;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        
        .title {
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 0;
          text-align: start;
          flex: 3;

          @include tablet-and-up {
            flex: 0;
            font-size: 20px;
          }

          @include desktop-and-up {
            flex: 1;
            font-size: 16px;
          }
        }

        h3 {
          font-weight: 800;
          font-size: 50px;
          text-transform: uppercase;
          margin-bottom: 0;
          text-align: left;
          flex: 1;
          margin-right: 12px;

          @include tablet-and-up {
            margin-right: 0px;
            margin-bottom: 12px;
            flex: 0;
            font-size: 30px;
          }

          @include desktop-and-up {
            flex: 1;
            font-size: 56px;
            margin-bottom: 0px;
          }
        }
      }

      .right {
        padding: 20px;
        text-align: left;

        @include tablet-and-up {
          padding: 32px;
        }

        @include desktop-and-up {
          align-self: center;
          padding: 20px 32px;
        }

        .description-title {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 8px;

          @include tablet-and-up {
            font-size: 24px;
            margin-bottom: 12px;
          }

          @include desktop-and-up {
            font-size: 30px;
          }
        }

        .description {
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 4px;

          @include tablet-and-up {
            font-size: 18px;
          }

          @include desktop-and-up {
            font-weight: 500;
            font-size: 16px;
          }
        }
      }
    }
  }
}

</style>