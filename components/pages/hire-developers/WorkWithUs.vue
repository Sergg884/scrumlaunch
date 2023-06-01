<template>
  <section>
    <h2 class="title-global">
      How can you work with us?
    </h2>
    <div class="work-with-us">
      <div class="image">
        <nuxt-img src="/pages/hire-developers/work-with-us-hero.png" alt="work-with-us-hero" />
      </div>
      <div class="tabs">
        <div v-for="(tab, index) in tabs" :key="tab.title" class="tab">
          <div class="main">
            <nuxt-img :src="tab.img" :alt="'work-with-us-' + index" />
            <h3>
              {{ tab.title }}
            </h3>
          </div>
          <div class="info" v-if="index === 0">
            <p>
              From 1 full-time developer to several experienced developers fully integrated in your team
            </p>
            <BaseButton small to="/contact-us">
              Get started
            </BaseButton>
          </div>
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
          title: 'Staff augmentation',
          img: '/services/icon-6.svg'
        },
        {
          title: 'Dedicated teams',
          img: '/services/icon-2.svg'
        },
        {
          title: 'Company-wide partnerships',
          img: '/services/icon-1.svg'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

section {
  h2 {
    margin-bottom: 16px;
    padding: 0 25px;

    @include tablet-and-up {
      padding: 0 45px;
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      text-align: center;
    }
  }
  .work-with-us {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include desktop-and-up {
      flex-direction: row;
    }

    div {
      flex-basis: 0;
      flex-grow: 1;
    }
    .tabs {
      @include desktop-and-up {
        order: 1;
      }
      .tab {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid $main-black;
        padding: 30px 0;
        align-items: flex-start;

        &:first-child {
          border-top: 1px solid $main-black;
        }

        .main {
          display: flex;
          align-items: center;

          h3 {
            font-weight: 700;
            font-size: 18px;
            text-align: left;
            margin-bottom: 0;

            @include tablet-and-up {
              font-size: 24px;
            }
          }

          img {
            width: 24px;
            height: 24px;
            margin-right: 12px;

            @include tablet-and-up {
              width: 36px;
              height: 36px;
            }

            @include desktop-and-up {
              margin-right: 20px;
              width: 56px;
              height: 56px;
            }
          }
        }

        .info {
          text-align: left;
          @include desktop-and-up {
            margin-left: 76px;
          }
          p {
            text-align: left;
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 26px;
            margin-top: 12px;

            @include tablet-and-up {
              font-size: 18px;
            }
          }
        }
      }
    }
    .image {
      @include tablet-and-up {
        padding: 0 65px;
      }

      @include desktop-and-up {
        order: 2;
        padding: 0;
      }
      img {
        width: 100%;
        @include desktop-and-up {
          height: 100%;
        }
      }
    }
  }
}

</style>