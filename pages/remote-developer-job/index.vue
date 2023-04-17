<template>
  <div class="remote-developer">
    <div class="hero">
      <section>
        <AppearFromMask class="title-mask">
          <h1 class="title-big">
            Scrumlaunch
            <span class="green-title">Job openings</span>
          </h1>
        </AppearFromMask> 
        <div>
          <img :src="require('@/assets/icons/magnifier.svg')" alt="hero-img" />
        </div>
      </section>
    </div>
    <section class="vacancies">
      
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vacancies from '@/seo/vacancies.json'
import CustomSelect from '@/components/ui/CustomSelect.vue'

export default {
  components: {
    CustomSelect,
  },

  data() {
    return {
      skill: '',
      location: '',
      vacancies: [],
    }
  },

  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: vacancies,
        },
      ],
    }
  },

  computed: {
    ...mapGetters(['vacancies/getAllSkills', 'vacancies/getAllLocations']),
  },

  watch: {
    skill() {
      this.vacancies = this.getVacancies()
    },
    location() {
      this.vacancies = this.getVacancies()
    },
  },

  mounted() {
    this.vacancies = this.getVacancies()
  },

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },

    getVacancies() {
      return this.$store.getters['vacancies/getVacancies'](
        this.skill,
        this.location
      )
    },
  },
}
</script>

<style lang="scss" scoped>

.remote-developer {
  .hero {
    width: 100%;
    background-color: $main-black;
    margin-top: -106px;

    section {
      margin: auto;
      padding-top: 125px;
      padding-bottom: 80px;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      gap: 29px;

      @include tablet-and-up {
        gap: 36px;
      }

      @include desktop-and-up {
        align-items: center;
        gap: 146px;
        padding-top: 206px;
        padding-bottom: 145px;
      }

      .title-mask {
        margin-bottom: 10px !important;
        @include desktop-and-up {
          min-width: 580px;
        }
        
        h1 {
          color: #fff;
        }
      }
      

      p {
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        padding-top: 50px;

        @include tablet-and-up {
          padding-top: 120px;
          font-size: 24px;
        }

        @include desktop-and-up {
          padding-top: 0;
          font-size: 30px;
        }
      }
    }
  }
}

</style>