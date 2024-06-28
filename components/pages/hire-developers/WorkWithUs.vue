<template>
  <section>
    <h2 class="title-global">
      How can you work with us?
    </h2>
    <div class="work-with-us">
      <div class="image">
        <transition name="fade">
          <nuxt-img :src="getHeroImage()" :alt="'work-with-us-hero' + activeTab" />
        </transition>
      </div>
      <div class="tabs">
        <div v-for="(tab, index) in tabs" :key="tab.title" class="tab">
          <div class="main" @click="setActiveTab(index)">
            <div class="main-icon-wrapper">
              <nuxt-img class="main-icon" :src="tab.img" :alt="'work-with-us-' + index" />
              <h3>
                {{ tab.title }}
              </h3>
            </div>
            <div class="expand-icon">
              <transition name="fade">
                <nuxt-img :src="activeTab == index ? '/shared/faq/minus.svg' : '/shared/faq/plus.svg'" />
              </transition>
            </div>
          </div>
          <transition name="collapse">
            <div class="info" v-if="activeTab === index">
              <p>{{ tab.text }}</p>
              <BaseButton class="collapse-btn" small @click="handleClick()">{{ tab.btn }}</BaseButton>
            </div>
          </transition>
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
          title: 'IT Recruiting',
          img: '/services/icon-6.svg',
          text: 'From 1 full-time developer to several experienced developers fully integrated in your team',
          btn: 'Get started',
        },
        {
          title: 'Dedicated teams',
          img: '/services/icon-2.svg',
          text: 'Flexible and effective dedicated software engineering team of 5-10 developers, designers, QA and project management resources.',
          btn: 'Build your team',
        },
        {
          title: 'Company-wide partnerships',
          img: '/services/icon-1.svg',
          text: '20+ experts organized into cross-functional teams dedicated to your projects across multiple teams or internal organizations.',
          btn: 'Learn more',
        }
      ],
      activeTab: 0,
    }
  },

  methods: {
    doScrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      setTimeout(() => {
        document.getElementById('email-input').focus()
      }, 1000)
    },

    getHeroImage() {
      switch (this.activeTab) {
        case 0: {
          return '/pages/hire-developers/work-with-us-hero.png'
        }
        case 1: {
          return '/pages/hire-developers/work-with-us-hero-1.png'
        }
        case 2: {
          return '/pages/hire-developers/work-with-us-hero-2.png'
        }
      }
    },

    handleClick() {
      switch (this.activeTab) {
        case 0: {
          this.doScrollTop()
          break
        }
        case 1: {
          this.$router.push('/build-team')
          break
        }
        case 2: {
          this.doScrollTop()
          break
        }
      }
    },

    setActiveTab(index) {
      if (this.activeTab === index) {
        return
      }
      return this.activeTab = index
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
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .main-icon-wrapper {
            flex: 1;
            display: flex;
            flex-direction: row;
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

            .main-icon {
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

          

          .expand-icon {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border: 1px solid $main-black;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 30px;

            img {
              width: 12px;
              height: 12px;
            }

            @include tablet-and-up {
              width: 36px;
              height: 36px;
              flex: 0 0 36px;

              img {
                width: 14px;
                height: 14px;
              }
            }

            @include desktop-and-up {
              width: 42px;
              height: 42px;
              flex: 0 0 42px;

              img {
                width: 16px;
                height: 16px;
              }
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

          .collapse-btn {
            font-size: 12px;
            font-weight: 400;

            @include tablet-and-up {
              font-size: 14px;
              letter-spacing: 0.14px;
            }

            @include desktop-and-up {
              font-size: 18px;
              letter-spacing: -0.36px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.collapse-enter-active {
  transition: opacity .5s;
}
.collapse-enter, .collapse-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>