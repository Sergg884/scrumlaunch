<template>
  <div>
    <section>
      <div class="hero">
        <h1 class="title-big">
          Scrumlaunch <br>
          {{ vacancy.name }} Dev
        </h1>
        <div class="img">
          <nuxt-img src="/pages/job-openings/hero.svg" alt="developer-job-hero" />
        </div>
      </div>
      <div class="info">
        <div class="location">
          {{ vacancy.jobLocation }}
          <span v-show="vacancy.remote" class="mark">
            Remote
          </span>
        </div>
        <div class="status">
          <div v-if="vacancy.open" class="state open">
            Open
          </div>
          <div v-else class="state closed">
            Closed
          </div>
        </div>
        <div class="date">
          {{ vacancy.datePosted }}
        </div>
      </div>
      <div class="tabs">
        <div class="tab">
          <div class="header">
            <nuxt-img class="icon" src="/services/icon-1.svg" alt="tab-icon-1" />
            <h4>Description</h4>
          </div>
          <div class="text" v-html="vacancy.description" />
        </div>
        <div class="tab">
          <div class="header">
            <nuxt-img class="icon" src="/services/icon-2.svg" alt="tab-icon-2" />
            <h4>About the Company</h4>
          </div>
          <div class="text">
            ScrumLaunch is an award winning US-based software development company.  We work with both high growth startups and major corporations on building cutting edge software across many industries.  If you are interested in working with smart people on innovative technology, please apply!
          </div>
        </div>
        <div class="tab">
          <div class="header">
            <nuxt-img class="icon" src="/services/icon-3.svg" alt="tab-icon-3" />
            <h4>Employment Type</h4>
          </div>
          <div class="text">
            {{ vacancy.employmentType }}
          </div>
        </div>
      </div>  
      <BaseButton to="/send-cv">
        Apply now
      </BaseButton>
    </section>
    <MoreJobs />
  </div>
</template>

<script>
import MoreJobs from '~/components/pages/remote-developer-jobs/more-jobs.vue'

export default {
  components: { MoreJobs },

  data() {
    return {
      vacancy: {
        name: "",
        remote: false,
        jobLocation: "",
        open: true,
        datePosted: "",
        description: "",
        employmentType: "",
        baseSalary: ""
     },
      more_vacancies: [],
      tabs: [
        {
          title: "",
          icon: "",
        }
      ]
    };
  },
  head() {
    const language = this.$route.path.slice(23).split("-")[0];
    return {
      title: `Remote ${language.charAt(0).toUpperCase() + language.slice(1)} Development Job | ScrumLaunch`,
      meta: [
        {
          name: "description",
          content: "ScrumLaunch is seeking skilled software engineers and web developers to join its global remote workforce. We are looking for highly motivated programmers and engineers who love project-based work to join are rapidly growing team.",
        },
      ],
    };
  },
  beforeMount() {
    this.vacancy = this.$store.getters["vacancies/getVacancies"]("", "").filter((item) => {
      return item.slug === this.$route.path;
    })[0];
    this.more_vacancies = this.$store.getters["vacancies/getVacancies"]("", "").filter((item) => {
      return item.open && item.remote && item.slug !== this.$route.path;
    });
  },
    
}
</script>

<style lang="scss" scoped>

section {

  .hero {
    display: flex;

    h1 {
      width: 90%;
      text-align: left;
    }
    
    .img {
      position: relative;
      img {
        position: absolute;
        top: -85px;
        width: 130px;
        left: -80px;

        @include tablet-and-up {
          width: 265px;
          top: -150px;
          left: -190px;
        }

        @include desktop-and-up {
          width: 335px;
          top: -225px;
        }
      }
    }
  }

  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;

    @include tablet-and-up {
      display: flex;
      margin-bottom: 60px;
      align-items: center;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
    }
    
    .location {
      text-align: left;
      font-weight: 700;
      font-size: 14px;

      @include tablet-and-up {
        font-size: 18px;
        flex: 0 0 290px;
      }

      @include desktop-and-up {
        font-size: 26px;
        flex: 0 0 490px;
      }
    }

    .status {
      .state {
        text-align: right;
        font-weight: 700;
        font-size: 14px;

        @include tablet-and-up {
          font-size: 18px;
        }

        @include desktop-and-up {
          font-size: 26px;
        }
        
        &:before {
          content: '';
          position: relative;
          top: -1px;
          display: inline-block;
          margin-right: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          z-index: 1;
        }

        &.open {
          &:before {
            background-color: $main-green;
          }
        }
        &.closed {
          &:before {
            background-color: red;
          }
        }
      }
    }

    .date {
      text-align: left;
      font-weight: 700;
      font-size: 16px;
      
      @include tablet-and-up {
        margin-left: auto;
      }

      @include desktop-and-up {
        font-size: 18px;
      }
    }
  }

  .tabs {
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }
    .tab {
      padding: 30px 0;
      border-top: 1px solid $main-black;
      display: flex;
      flex-direction: column;

      @include tablet-and-up {
        flex-direction: row;
        align-items: flex-start;
      }

      @include desktop-and-up {
        padding: 60px 0;
      }
      .header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        @include tablet-and-up {
          flex: 0 0 290px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }

        @include desktop-and-up {
          flex: 0 0 490px;
        }

        img {
          width: 23px;
          height: 23px;
          margin-right: 16px;

          @include tablet-and-up {
            order: 2;
            width: 36px;
            height: 36px;
            margin-right: 40px;
          }

          @include desktop-and-up {
            width: 56px;
            height: 56px;
            margin-right: 60px;
          }
        }

        h4 {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 0;

          @include tablet-and-up {
            order: 1;
            font-size: 24px;
            text-align: left;
          }
          
          @include desktop-and-up {
            font-size: 30px;
          }
        }
      }

      .text {
        font-weight: 400;
        font-size: 14px;
        text-align: left;

        @include tablet-and-up {
          font-size: 18px;
        }

        @include desktop-and-up {
          font-size: 20px;
        }
      }

      &:last-child {
        border-bottom: 1px solid $main-black;
      }
    }
  }

  .base-button {
    margin: auto;
  }
}

</style>