<template>
  <div class="remote-developer">
    <div class="hero">
      <section>
        <AppearFromMask>
          <h1 class="title-big">
            Scrumlaunch <br>
            <span class="green-title">Job openings</span>
          </h1>
        </AppearFromMask> 
        <div class="img">
          <img :src="require('@/assets/icons/magnifier.svg')" alt="hero-img" />
        </div>
      </section>
    </div>
    <section class="jobs">
      <div class="inputs">
        <div class="wrap">
          <div class="label">Skill</div>
          <CustomSelect
            :model-value="skill"
            class="filter"
            label="Select skill"
            empty-value-text="Select All"
            :items="this['vacancies/getAllSkills']"
            @update:modelValue="handleFieldChange('skill', $event)"
          />
        </div>
        <div class="wrap">
          <div class="label">Location</div>
          <CustomSelect
            :model-value="location"
            class="filter"
            label="Select location"
            empty-value-text="Select All"
            :items="this['vacancies/getAllLocations']"
            @update:modelValue="handleFieldChange('location', $event)"
          />
        </div>
      </div>
      <div class="vacancies">
        <div
          v-for="(vacancy, i) in vacancies"
          :key="i"
          class="vacancy"
        >
            <div class="name">
              <NuxtLink :to="vacancy.slug">{{ vacancy.name }}</NuxtLink>
            </div>
            <div class="info">
              <div class="location">
                {{ vacancy.jobLocation }}
                <span v-show="vacancy.remote" class="remote">
                  Remote
                </span>
              </div>
              <div v-if="vacancy.open" class="state open">
                Open
              </div>
              <div v-else class="state closed">
                Closed
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vacancies from '@/seo/vacancies.json'

export default {
    data() {
      return {
        skill: "",
        location: "",
        vacancies: [],
      };
    },
    head: {
      title: "Careers at Scrumlaunch",
      meta: [
        { hid: "description", name: "description", content: "Grow your career with Scrumlaunch company! U.S Software Engineer Jobs. Work Remotely. No Visa needed. Full time jobs. High salary. Great Companies. Higher Pay. Great team culture. Work Remotely. Interesting Projects." }
      ],
      script: [
        {
          type: "application/ld+json",
          json: vacancies,
        },
      ],
    },
    computed: {
      ...mapGetters(["vacancies/getAllSkills", "vacancies/getAllLocations"]),
    },
    watch: {
      skill() {
        this.vacancies = this.getVacancies();
      },
      location() {
        this.vacancies = this.getVacancies();
      },
    },
    mounted() {
      this.vacancies = this.getVacancies();
    },
    methods: {
      handleFieldChange(name, value) {
        this[name] = value;
      },
      getVacancies() {
        return this.$store.getters["vacancies/getVacancies"](this.skill, this.location);
      },
    }
}
</script>

<style lang="scss" scoped>

.remote-developer {
  .hero {
    width: 100%;
    background-color: $main-black;

    section {
      margin: auto;
      padding-top: 125px;
      padding-bottom: 40px;

      @include tablet-and-up {
      }

      @include desktop-and-up {
        align-items: center;
        padding-top: 206px;
        padding-bottom: 145px;
        display: flex;
        justify-content: space-between;
      }

      h1 {
        color: #fff;
        text-align: center;

        @include desktop-and-up {
          text-align: left;
        }
      }
      .img {
        margin-top: -50px;
        img {
          width: 100%;

          @include tablet-and-up {
            width: 500px;
          }
        }
      }
    }
  }

  .jobs {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .inputs {
      display: flex;
      flex-direction: column;
      gap: 18px;

      @include desktop-and-up {
        flex-direction: row;
        gap: 60px;
      }

      .wrap {
        text-align: left;

        @include tablet-and-up {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        @include desktop-and-up {
          flex-basis: 0;
          flex-grow: 1;
        }

        .label {
          text-transform: uppercase;
          font-weight: 900;
          font-size: 24px;
          margin-bottom: 8px;

          @include tablet-and-up {
            font-weight: 900;
            font-size: 48px;
            margin-bottom: 0;
          }
        }
      }
    }

    .vacancies {
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      .vacancy {
        padding: 30px 0;
        border-top: 1px solid $main-black;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &:last-child {
          border-bottom: 1px solid $main-black;
        }

        @include tablet-and-up {
          flex-direction: row;
          align-items: center;
        }

        .name {
          width: 100%;
          text-align: left;

          @include tablet-and-up {
            flex: 320px 0 0;
          }

          @include desktop-and-up {
            flex: 570px 0 0;
          }
          
          a {
            text-decoration: none;
            font-weight: 700;
            font-size: 18px;
            color: $main-black;
            transition: 0.3s all;

            @include tablet-and-up {
              font-size: 24px;
            }

            @include desktop-and-up {
              font-size: 30px;
            }

            &:hover {
              color: $main-green;
            }
          }
        }

        .info {
          display: flex;
          justify-content: space-between;

          @include tablet-and-up {
            flex-basis: 0;
            flex-grow: 1;
          }
          .location {
            width: 50%;
            text-align: left;
            font-weight: 700;
            font-size: 14px;

            @include tablet-and-up {
              font-size: 18px;
            }

          }

          .state {
            width: 50%;
            text-align: right;
            font-weight: 700;
            font-size: 14px;

            @include tablet-and-up {
              font-size: 18px;
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
      }
    }
  }
}

</style>