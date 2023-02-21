<template>
  <section class="container faq">
    <h3 class="section-title">
      Frequently Asked Questions
    </h3>
    <ul class="accordion-container">
      <li class="accordion" v-for="i in questions" :key="i.id">
        <div class="head" @click="activateQuestion(i.id)">
          <img class="icon" :src="i.image" :alt="i.alt">
          <span>{{ i.title }}</span>
          <div v-if="i.isActive" class="colapse">
            <img :src="'/images/hire-developers/faq/colapse-minus.svg'" :alt="'faq-icon-minus'">
          </div>
          <div v-else class="colapse">
            <img :src="'/images/hire-developers/faq/colapse-plus.svg'" :alt="'faq-icon-plus'">
          </div>
        </div>
        <Transition name="fade"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
        >
          <div v-show="i.isActive" class="body">
            <p>
              At ScrumLaunch, we hire and train every member of our team individually. All dedicated Java developers (and any developer or designer, for that matter) undergo in-depth assessment and training to test for skill level, adaptability, creativity, system architecture, and other key components of software development. Our Java experts have worked on a range of projects from video analysis and machine learning to custom marketplaces.
            </p>
          </div>
        </Transition>
      </li>
    </ul>
  </section>
</template>

<script>

export default {

  data: () => ({
    questions: [
      {
        id: 1,
        title: 'Why should I use ScrumLaunch to Hire Java Developers?',
        image: '/images/hire-developers/faq/icon-1.svg',
        alt: 'faq-icon-1',
        isActive: true,
        text: 'At ScrumLaunch, we hire and train every member of our team individually. All dedicated Java developers (and any developer or designer, for that matter) undergo in-depth assessment and training to test for skill level, adaptability, creativity, system architecture, and other key components of software development. Our Java experts have worked on a range of projects from video analysis and machine learning to custom marketplaces.'
      },
      {
        id: 2,
        title: 'How Quickly can I hire Java developers through ScrumLaunch?',
        image: '/images/hire-developers/faq/icon-2.svg',
        alt: 'faq-icon-2',
        isActive: false,
        text: 'At ScrumLaunch, we hire and train every member of our team individually. All dedicated Java developers (and any developer or designer, for that matter) undergo in-depth assessment and training to test for skill level, adaptability, creativity, system architecture, and other key components of software development. Our Java experts have worked on a range of projects from video analysis and machine learning to custom marketplaces.'
      },
      {
        id: 3,
        title: 'How Effective is Offshore or Outsourced Java?',
        image: '/images/hire-developers/faq/icon-3.svg',
        alt: 'faq-icon-3',
        isActive: false,
        text: 'At ScrumLaunch, we hire and train every member of our team individually. All dedicated Java developers (and any developer or designer, for that matter) undergo in-depth assessment and training to test for skill level, adaptability, creativity, system architecture, and other key components of software development. Our Java experts have worked on a range of projects from video analysis and machine learning to custom marketplaces.'
      },
    ]
  }),

  methods: {
    activateQuestion(questionId) {
      const activeQuestionIdx = this.questions.findIndex(obj => obj.id === questionId);
      this.questions.forEach((i, index) => {
        if (i.id === questionId) {
          this.questions[activeQuestionIdx].isActive = !this.questions[activeQuestionIdx].isActive;
        } else {
          this.questions[index].isActive = false
        }
      });
    },

    beforeEnter(el) {
      el.style.marginTop = '0';
      el.style.height = '0';
      el.style.top = '-40px';
    },
    enter(el) {
      el.style.marginTop = '40px';
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave(el) {
      el.style.marginTop = '40px';
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      el.style.marginTop = '0';
      el.style.height = '0';
      el.style.top = '-40px';
    }
  }

}

</script>

<style lang="scss" scoped>
.faq {
  .accordion-container {
    margin-top: 80px;
    .accordion {
      border-top: 1px solid $main-black;
      padding: 74px 0;

      &:last-child {
        border-bottom: 1px solid $main-black;
      }
      .head {
        display: flex;
        align-items: center;
        .icon {
          margin-right: 40px;
        }
        span {
          font-weight: 700;
          font-size: 30px;
          color: $main-black;
        }
        .colapse {
          margin-left: auto;
          width: 70px;
          height: 70px;
          border-radius: 100%;
          border: 1px solid $main-black;
          text-align: center;
          display: flex;
          justify-content: center;
          img {
            max-width: 18px;
          }
        }
      }
      .body {
        overflow: hidden;
        margin: 0 96px;
        transition: 350ms ease-out;
        
        p {
          text-align: left;
          font-weight: 400;
          font-size: 20px;
          color: $main-black;
          line-height: 150%;
        }
      }
    }
  }
}


</style>