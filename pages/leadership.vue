<template>
  <div>
    <section class="leadership">
      <AppearFromMask class="title-mask">
        <h1 class="title-big">
          OUR Leadership
        </h1>
      </AppearFromMask>
      <AppearFromMask>
        <p class="text-main">
          ScrumLaunch was built based on our founding team’s experience as both founders and leaders at startups & growth companies.
        </p>
      </AppearFromMask>
      <div class="members">
        <div class="member" v-for="member in team" :key="member.name">
          <img class="photo" :src="require(`@/assets/images/team/${member.photo}` )" :alt="member.name"/>
          <div class="info">
            <p class="name">
              {{ member.name }}
            </p>
            <div class="position">
              <p>{{ member.position }}</p>
              <p
                v-if="member.position_2"
              >
                {{ member.position_2 }}
              </p>
            </div>
            <div class="links">
              <img
                :src="require('@/assets/icons/leadership-linkedin.svg')"
                class="icon"
                @click="handleOpenInLink(member.inLink)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <ContactUs /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactUs from '~/components/shared/ContactUs.vue';

export default {
  components: {
    ContactUs
  },

  head: {
    title: 'Leadership - ScrumLaunch',
    meta: [
      { hid: 'description', name: 'description', content: 'Our Leadership.' }
    ],
  },

  computed: {
    ...mapGetters({
      team: 'team/getAllTeam'
    }),
  },

  methods: {
    handleOpenInLink(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>

.leadership {

  .title-mask {
    h1 {
      text-align: center;

      @include desktop-and-up {
        text-align: left;
      }
    }
  }

  .text-main {
    text-align: center;
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      text-align: left;
      margin-bottom: 80px;
    }
  }

  .members {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;

    @include tablet-and-up {
      grid-template-columns: repeat(2, 1fr);
      gap: 28px;
    }

    @include desktop-and-up {
      grid-template-columns: repeat(3, 1fr);
      gap: 56px;
    }

    .member {
      .photo {
        width: 220px;
        height: 220px;
        border-radius: 50%;

        @include tablet-and-up {
          width: 300px;
          height: 300px;
        }

        @include desktop-and-up {
          width: 340px;
          height: 340px;
        }
      }

      .info {
        text-align: center;
        padding: 16px 12px;

        @include tablet-and-up {
          padding: 20px 12px;
        }

        @include desktop-and-up {
          padding: 24px 12px;
        }

        .name {
          font-size: 18px;
          font-weight: 800;
          line-height: 135%;
          letter-spacing: 0.18px;
          margin-bottom: 4px;

          @include tablet-and-up {
            font-size: 24px;
            line-height: 140%;
            letter-spacing: normal;
          }

          @include desktop-and-up {
            font-size: 30px;
          }
        }

        .position {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;

          @include tablet-and-up {
            margin-bottom: 12px;
          }

          @include desktop-and-up {
            margin-bottom: 16px;
          }

          p {
            font-size: 12px;
            font-weight: 400;
            line-height: 150%;
            margin-bottom: 0;

            @include tablet-and-up {
              font-size: 16px;
              font-weight: 500;
            }

            &:nth-child(2) {
              margin-left: 4px;
              padding-left: 8px;
              position: relative;

              @include tablet-and-up {
                margin-left: 12px;
                padding-left: 20px;
              }

              &:before {
                content: '';
                width: 4px;
                height: 4px;
                position: absolute;
                background-color: $main-black;
                border-radius: 100%;
                left: 0px;
                top: 7px;

                @include tablet-and-up {
                  width: 8px;
                  height: 8px;
                  top: 8px;
                }
              }
            }
          }
        }
        .links {
          .icon {
            cursor: pointer;
            width: 24px;
            height: 24px;

            @include tablet-and-up {
              width: 28px;
              height: 28px;
            }

            @include desktop-and-up {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }
}

</style>