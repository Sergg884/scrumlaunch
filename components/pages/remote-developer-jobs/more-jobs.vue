<template>
  <div class="more-jobs">
    <section>
      <h2 class="title-big">
        More Remote Job 
      </h2>
      <VueSlickCarousel v-bind="settings" class="tabs">
        <div v-for="vacancy in vacancies">
          <div class="tab">
            <div class="header">
              <div class="organisazation">
                {{ vacancy.hiringOrganisation }}
              </div>
              <div class="date">
                {{ vacancy.datePosted }}
              </div>
            </div>
            <div class="name">
              {{ vacancy.name }}
            </div>
            <div class="info">
              <div class="location">
                {{ vacancy.jobLocation }}
                <span v-show="vacancy.remote" class="mark">
                  Remote
                </span>
              </div>
              <div class="employment">
                {{ vacancy.employmentType }}
              </div>
              <div class="salary">
                {{ vacancy.baseSalary }}
              </div>
            </div>
            <div class="footer">
              <div class="status">
                <div v-if="vacancy.open" class="state open">
                  Open
                </div>
                <div v-else class="state closed">
                  Closed
                </div>
              </div>
              <NuxtLink class="navigation-btn" :to="vacancy.slug"></NuxtLink>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <BaseButton to="/remote-developer-jobs">
        View all
      </BaseButton>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {

  components: {
    VueSlickCarousel 
  },

  data() {
    return {
      settings: {
        "dots": false,
        "infinite": false,
        "speed": 500,
        "edgeFriction": 0.35,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "arrows": false,
        "responsive": [
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          },
          {
            "breakpoint": 1440,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1
            }
          },
        ]
      },
    };
  },

  computed: {
    vacancies() {
      return this.$store.getters["vacancies/getVacancies"]('', '');
    }
  },
}
</script>

<style lang="scss" scoped>

.more-jobs {
  width: 100%;
  background-color: $main-black;
  display: inline-block;

  h2 {
    text-align: left;
    color: #fff;
  }

  .tabs {
    .tab {
      background-color: #fff;
      padding: 26px;
      @include tablet-and-up {
        margin: 20px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .name {
        text-align: left;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 12px;
      }

      .info {
        display: flex;
        font-size: 14px;
        white-space: nowrap;
        gap: 23px;
        margin-bottom: 40px;
        .location {
          text-align: left;
          font-weight: 700;
        }
      }

      .footer {
        display: flex;
        justify-content: space-between;
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

        .navigation-btn { 
          background-size: contain;
          width: 50px;
          height: 24px;
          background-image: url(/shared/arrow_not_filled.svg);
          cursor: pointer;
          z-index: 100;
          transform: rotate(180deg);

          @include tablet-and-up {
            width: 75px;
            height: 37px;
            top: 80px;
          }

          &:hover {
            background-image: url(/shared/arrow_filled.svg);
            transform: rotate(0deg);
          }
        }

      }
    }
  }
}

</style>
