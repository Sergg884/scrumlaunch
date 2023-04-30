<template>
  <section>
    <div class="hero">
      <h1 class="title-global">
        {{ vacancy }}
        Scrumlaunch <br>
        {{ vacancy.name }} Dev
      </h1>
      <div class="img">
        <nuxt-img src="/pages/job-openings/hero.svg" alt="developer-job-hero" />
      </div>
    </div>
    <div class="info">
      <div class="location">
        <span v-show="vacancy.remote" class="remote">
          Remote
        </span>
        {{ vacancy.jobLocation }}
      </div>
      <div class="status">
        <div v-if="vacancy.open" class="state open">
          Open
        </div>
        <div v-else class="state closed">
          Closed
        </div>
        <div class="date">
          {{ vacancy.datePosted }}
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tab" v-for="tab in tabs">
        <div class="header">
          <h4>{{ tab.title }}</h4>
        </div>
      </div>
    </div>  
    <BaseButton>
      Apply now
    </BaseButton>
  </section>

</template>

<script>
export default {
  data() {
    return {
      vacancy: {
        name: '',
        remote: false,
        jobLocation: '',
        open: false,
        datePosted: '',
      },
      more_vacancies: [],
      tabs: [
        {
          title: '',
          icon: '',
          text: this.c
        }
      ],
    }
  },

  head() {
    const language = this.$route.path.slice(23).split('-')[0]

    return {
      title: `Remote ${
        language.charAt(0).toUpperCase() + language.slice(1)
      } Development Job | ScrumLaunch`,
      meta: [
        {
          name: 'description',
          content:
            'ScrumLaunch is seeking skilled software engineers and web developers to join its global remote workforce. We are looking for highly motivated programmers and engineers who love project-based work to join are rapidly growing team.',
        },
      ],
    }
  },

  beforeMount() {
    this.vacancy = this.$store.getters['vacancies/getVacancies']('', '').filter(
      (item) => {
        return item.slug === this.$route.path
      }
    )[0]

    this.more_vacancies = this.$store.getters['vacancies/getVacancies'](
      '',
      ''
    ).filter((item) => {
      return item.open && item.remote && item.slug !== this.$route.path
    })
  },
}
</script>

<style lang="scss" scoped>



</style>