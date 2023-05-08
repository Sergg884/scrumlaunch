<template>
  <section>
    <h2 class="title-global">
      Your long term tech partner
    </h2>
    <div class="tabs">
      <div v-for="tab in tabs" :key="tab.title" class="tab">
        <p class="title">
          {{  tab.title }}
        </p>
        <h3 class="text">
          {{  tab.text }}
        </h3>
        <p class="description">
          {{  tab.description }}
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
          title: 'Time savings:',
          text: '45H',
          description: 'saved on avg for your tech team for each role'
        },
        {
          title: 'Client lifetime:',
          text: '2+',
          description: 'years average client partnership'
        },
        {
          title: 'Cost Savings:',
          text: '40-50%',
          description: 'saving on development costs'
        },
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

section {
  .title-global {
    margin-bottom: 40px;
    text-align: center;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
    }
  }
  .tabs {
    display: flex;
    flex-direction: column;

    @include tablet-and-up {
      flex-direction: row;
    }
    .tab {
      text-align: left;
      padding: 28px 20px;
      border: 1px solid $main-black;
      margin-bottom: -1px;
      flex-basis: 0;
      flex-grow: 1;

      @include tablet-and-up {
        padding: 32px 24px;
        &:not(:last-child) {
          margin-right: -1px;
        }
      }

      @include desktop-and-up {
        padding: 40px;
      }
      .title {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 24px;

        @include tablet-and-up {
          font-size: 18px;
          margin-bottom: 48px;
        }

        @include desktop-and-up {
          margin-bottom: 85px;
        }
      }

      .text {
        font-weight: 800;
        font-size: 24px;
        margin-bottom: 6px;

        @include tablet-and-up {
          margin-bottom: 8px;
        }

        @include desktop-and-up {
          font-size: 30px;
        }
      }
      .description {
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 0;

        @include tablet-and-up {
          font-size: 16px;
        }

        @include desktop-and-up {
          font-size: 20px;
        }
      }
    }
  }
}

</style>