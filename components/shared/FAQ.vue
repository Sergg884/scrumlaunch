<template>
  <section>
    <h2 class="title-global">
      Frequently Asked Questions
    </h2>
    <div class="questions" v-if="questions">
      <div v-for="(question, index) in questions" :key="index" class="question">
        <div class="main" @click="setActiveQuestion(index)">
          <nuxt-img class="icon" :src="getImage(index)" :alt="`faq-img-${index + 1}`" />
          <h3>
            {{ question.title }}
          </h3>
          <div class="expand-icon">
            <Transition name="fade">
              <nuxt-img :src="activeQuestion == index ? '/shared/faq/minus.svg' : '/shared/faq/plus.svg'" />
            </Transition>
          </div>
        </div>
        <Transition name="collapse">
          <div class="text" v-if="activeQuestion === index">
            <p>
              {{ question.text }}
            </p>
            <ul v-if="question.list">
              <li v-for="(item, index) in question.list" :key="index">
                {{ item }}
              </li>
            </ul>
            <p v-if="question.subText">
              {{ question.subText }}
            </p>
            <ul v-if="question.subList">
              <li v-for="(subListItem, subListItemIndex) in question.subList" :key="subListItemIndex">
                {{ subListItem }}
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    questions: {
      type: Array,
      default() {
        return []
      }
    },
  },

  data() {
    return {
      activeQuestion: null,
    }
  },
  
  methods: {
    getImage(index) {
      let indexRaw = index % 6 || 6;
      return `/services/icon-${indexRaw}.svg`
    },
    setActiveQuestion(index) {
      if (this.activeQuestion === index) {
        return this.activeQuestion = null
      }
      return this.activeQuestion = index
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  h2 {
    text-align: left;
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
    }
  }

  .questions {
    .question {
      border-bottom: 1px solid $main-black;
      padding: 30px 0;
      align-items: flex-start;

      &:first-child {
        border-top: 1px solid $main-black;
      }

      @include desktop-and-up {
        padding: 74px 0;
      }

      .main {
        display: flex;
        align-items: flex-start;
        text-align: left;
        cursor: pointer;

        @include tablet-and-up {
          align-items: center;
        }

        .icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          @include tablet-and-up {
            width: 36px;
            height: 36px;
            margin-right: 26px;
          }

          @include desktop-and-up {
            width: 56px;
            height: 56px;
            margin-right: 40px;
          }
        }

        h3 {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 0;
          flex-grow: 1;
          @include tablet-and-up {
            font-size: 24px;
          }
          @include desktop-and-up {
            font-size: 30px;
          }
        }

        .expand-icon {
          min-width: 48px;
          height: 48px;
          border-radius: 100%;
          border: 1px solid $main-black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .text {
        font-weight: 400;
        font-size: 12px;
        text-align: left;
        margin-top: 26px;
        margin-bottom: 0;

        @include tablet-and-up {
          font-size: 18px;
        }
        @include desktop-and-up {
          font-size: 20px;
          margin-left: 98px;
          margin-right: 120px;
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

.collapse-enter-active, .collapse-leave-active {
  transition: opacity .5s;
}
.collapse-enter, .collapse-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>