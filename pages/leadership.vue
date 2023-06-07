<template>
  <div>
    <section class="leadership">
      <AppearFromMask>
        <h1 class="title-big text-left">
          OUR Leadership <br>team
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
                :src="require('@/assets/icons/linkedin.svg')"
                class="icon"
                @click="handleOpenInLink(member.inLink)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactUs />
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

  .text-main {
    text-align: left;
    margin-left: 110px;
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-left: 188px;
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-left: 488px;
      margin-bottom: 80px;
    }
  }

  .members {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    @include tablet-and-up {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }

    @include desktop-and-up {
      grid-template-columns: repeat(3, 1fr);
      gap: 23px;
    }

    .member {
      border: 1px solid $main-black;

      .photo {
        width: 100%;
        height: 342px;

        @include desktop-and-up {
          height: 394px;
        }
      }

      .info {
        text-align: left;
        padding: 20px 12px;
        .name {
          font-weight: 700;
          font-size: 18px;
        }
        .position {
          display: flex;

          p {
            font-weight: 600;
            font-size: 12px;

            &:nth-child(2) {
              margin-left: 10px;
              padding-left: 12px;
              position: relative;

              &:before {
                content: '';
                width: 8px;
                height: 8px;
                top: 8px;
                position: absolute;
                background-color: $main-black;
                border-radius: 100%;
                left: -2px;
                top: 4px;
              }
            }
          }
        }
        .links {

        }

      }
    }


  }

}

</style>