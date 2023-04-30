<template>
  <div class="vacancy">
    <div class="container">
      <div class="vacancy__section_1">
        <div class="join_team--icon">
          <img :src="require('@/assets/illustrations/join_our_team.svg')" />
        </div>
        <div class="header-1">
          Scrumlaunch<br />{{ vacancy.name }} Developer
        </div>
        <div class="vacancy__info">
          <div class="vacancy__location">
            <span v-if="vacancy.remote" class="vacancy__remote_2">Remote</span>
            {{ vacancy.jobLocation }}
          </div>
          <div v-if="vacancy.open" class="vacancy__state open">Open</div>
          <div v-if="!vacancy.open" class="vacancy__state closed">Closed</div>
          <p class="vacancy__date">{{ vacancy.datePosted }}</p>
        </div>
      </div>
      <div class="vacancy__section_2">
        <div class="how_scrumlaunch_works__items">
          <div class="how_scrumlaunch_works__item">
            <div class="how_scrumlaunch_works__item_title_wrap">
              <div class="how_scrumlaunch_works__item_title">Description</div>
              <div>
                <img
                  src="/images/home/how_scrumlaunch_works_1.svg"
                  alt="how_scrumlaunch_works_1"
                  class="how_scrumlaunch_works__item_icon"
                />
              </div>
            </div>
            <div class="how_scrumlaunch_works__item_text">
              <div class="description__container">
                <p
                  v-if="!vacancy.description"
                  class="how_scrumlaunch_works__item_text"
                >
                  {{ vacancy.name }} Developers: do you have a passion for
                  building software applications? Do you have an interest in web
                  development and design, UI, or UX? Do you enjoy working on
                  project-based teams and getting exposure to a variety of
                  companies from venture-backed startups to large corporations?
                </p>
                <p class="how_scrumlaunch_works__item_text">
                  ScrumLaunch is large, global software development and design
                  company that employs more than 200 remote developers across
                  the United States, Europe and South America. Our U.S.
                  headquarters get us access to top projects from Silicon Valley
                  to New York City, and we work from all types of clients around
                  the world.
                </p>
                <p class="how_scrumlaunch_works__item_text">
                  As a {{ vacancy.name }} developer, you will be responsible for
                  working on different software teams requiring
                  {{ vacancy.name }} expertise. With our consultant-based
                  approach to client services, you will get to work on a variety
                  of projects and gain exposure to all types of companies. You
                  will be constantly challenged and always learning.
                </p>
                <p class="how_scrumlaunch_works__item_text">
                  The role requires at least 40 hours per week.
                </p>
                <div v-if="vacancy.description" v-html="vacancy.description" />
              </div>
            </div>
          </div>

          <div class="how_scrumlaunch_works__item">
            <div class="how_scrumlaunch_works__item_title_wrap">
              <div class="how_scrumlaunch_works__item_title">
                About the Company
              </div>
              <div>
                <img
                  src="/images/home/how_scrumlaunch_works_2.svg"
                  alt="how_scrumlaunch_works_2"
                  class="how_scrumlaunch_works__item_icon"
                />
              </div>
            </div>
            <div class="how_scrumlaunch_works__item_text">
              Candidates are sourced through our internal talent pool or by our
              HR team in technical hubs around the world.
            </div>
          </div>

          <div class="how_scrumlaunch_works__item">
            <div class="how_scrumlaunch_works__item_title_wrap">
              <div class="how_scrumlaunch_works__item_title">
                Employment Type
              </div>
              <div>
                <img
                  src="/images/home/how_scrumlaunch_works_3.svg"
                  alt="how_scrumlaunch_works_3"
                  class="how_scrumlaunch_works__item_icon"
                />
              </div>
            </div>
            <div class="how_scrumlaunch_works__item_text">
              {{ vacancy.employmentType }}
            </div>
          </div>

          <div class="how_scrumlaunch_works__item">
            <div class="how_scrumlaunch_works__item_title_wrap">
              <div class="how_scrumlaunch_works__item_title">Base Salary</div>
              <div>
                <img
                  src="/images/home/how_scrumlaunch_works_4.svg"
                  alt="how_scrumlaunch_works_4"
                  class="how_scrumlaunch_works__item_icon"
                />
              </div>
            </div>
            <div class="how_scrumlaunch_works__item_text">
              {{ vacancy.baseSalary }}
            </div>
          </div>
        </div>

        <div class="projects--btn-wrapper">
          <NuxtLink class="btn" to="/send-cv">Apply now</NuxtLink>
        </div>
      </div>
    </div>
    <div class="container vacancy__section_3">
      <div class="extensive_vetting__text_block">
        <div class="header-1 white">More Remote Job</div>
        <div class="more_job">
          <div
            v-for="(item, i) in more_vacancies.filter((el) => el.open)"
            :key="i"
            class="more_job_card"
          >
            <div>
              <div class="more_job__info_container subtitle">
                <p>
                  {{ item.hiringOrganisation }}
                </p>
                <p>{{ item.datePosted }}</p>
              </div>
              <div class="more_job__info_container title">
                <p>{{ item.name }} Developer</p>
              </div>
              <div class="more_job__info_container description">
                <p class="vacancy__remote_bold">
                  <span v-if="item.remote" class="vacancy__remote_2"
                    >Remote</span
                  >
                  {{ item.jobLocation }}
                </p>
                <div class="marker default">{{ item.employmentType }}</div>
                <div class="marker default">{{ item.baseSalary }}</div>
              </div>
            </div>
            <div class="more_job__info_container footer">
              <div v-if="item.open" class="vacancy__state open">Open</div>
              <div v-if="!item.open" class="vacancy__state closed">Closed</div>
              <NuxtLink :to="item.slug"
                ><div class="scroll_top__btn">
                  <img
                    :src="
                      require('@/assets/icons/scroll-down-without-mask.svg')
                    "
                    class="scroll_top__arr"
                  /></div
              ></NuxtLink>
            </div>
          </div>
        </div>
        <div class="projects--btn-wrapper">
          <NuxtLink class="btn on_dark_bg" to="/remote-developer-jobs"
            >View all</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
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
.more_job {
  display: flex;
  align-items: center;
  gap: 21px;
  overflow-x: auto;
  padding-bottom: 30px;

  &_card {
    min-width: 400px;
    height: 250px;
    padding: 30px;
    background-color: #fff;
    color: #1e1f21;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    line-height: 140%;
  }
}

.join_team--icon {
  display: flex;
  justify-content: flex-end;
  margin-bottom: -100px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 0px;
    margin-right: -50px;
  }

  @media screen and (max-width: 768px) {
    & * {
      width: 200px;
      height: 200px;
    }

    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: -70px;
  }
}

.scroll_top {
  &__btn {
    cursor: pointer;
    transform: rotate(-90deg);
  }

  &__arr {
    position: relative;
    display: block;
  }
}

.subtitle {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 30px;
}

.description {
  font-weight: 400;
  font-size: 16px;
}

.footer {
  font-weight: 700;
  font-size: 20px;
}

.marker {
  &:before {
    content: '';
    position: relative;
    top: -1px;
    display: inline-block;
    margin-right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  &.default {
    &:before {
      background: #1e1f21;
    }
  }
}

.header-1 {
  margin-bottom: 40px;
  font-weight: 900;
  font-size: 75px;
  line-height: 140%;
  color: #1e1f21;

  &.white {
    color: #fff;
  }

  @media screen and (max-width: 1440px) {
    margin-bottom: 40px;
    font-size: 56px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
    font-size: 32px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 17px;
    font-size: 24px;
  }
}

.body-1 {
  max-width: 945px;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 150%;
  color: #fff;

  @media screen and (max-width: 1440px) {
    max-width: 728px;
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 20px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
}

.vacancy__section_3 {
  padding-top: 240px;
  padding-bottom: 240px;
  background: #1e1f21;
  text-align: left;
  margin-bottom: 240px;

  @media screen and (max-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
    margin-bottom: 140px;
  }

  @media screen and (max-width: 425px) {
    padding-top: 80px;
    padding-bottom: 80px;
    margin-bottom: 80px;
  }
}

.projects--btn-wrapper {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  .btn {
    padding: 16px 40px;
    height: 82px;
    width: 360px;
    border-radius: 54px;
    font-size: 18px;
    line-height: 150%;

    @media screen and (max-width: 425px) {
      min-width: 100%;
    }
  }
}

.description__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.how_scrumlaunch_works {
  padding-top: 300px;
  padding-bottom: 300px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;

  @media screen and (max-width: 1440px) {
    padding-top: 240px;
    padding-bottom: 240px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (max-width: 425px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  & * {
    box-sizing: border-box;
  }

  &__title {
    margin-bottom: 120px;
    font-size: 75px;
    text-align: right;

    @media screen and (max-width: 1440px) {
      margin-bottom: 80px;
      font-size: 56px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 60px;
      max-width: 530px;
      font-size: 48px;
      text-align: left;
    }

    @media screen and (max-width: 425px) {
      margin-bottom: 40px;
      font-size: 24px;
    }
  }

  &__items {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  &__item {
    display: flex;
    align-items: flex-start;
    padding: 60px 0;
    min-height: 56px;
    border-top: 1px solid #1e1f21;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 30px 0px;
    }

    &:last-child {
      border-bottom: 1px solid #1e1f21;
    }

    &:not(:first-child) {
      align-items: center;
    }
  }

  &__item_title_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-right: 80px;
    max-width: 570px;

    @media screen and (max-width: 1440px) {
      margin-right: 63px;
      max-width: 425px;
    }

    @media screen and (max-width: 768px) {
      flex: 0 0 auto;
      flex-direction: row-reverse;
      margin-bottom: 20px;
      align-items: flex-start;
      margin-right: auto;
    }
  }

  &__item_title {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;

    @media screen and (max-width: 1440px) {
      font-size: 30px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }

    @media screen and (max-width: 425px) {
      font-size: 18px;
    }
  }

  &__item_icon {
    max-width: 55px;

    @media screen and (max-width: 768px) {
      max-width: 35px;
      margin-right: 20px;
    }

    @media screen and (max-width: 425px) {
      max-width: 25px;
      margin-right: 18px;
    }
  }

  &__item_text {
    flex: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;

    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      flex: 0 0 auto;
      font-size: 14px;
    }

    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }
}

.header-big {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 90px;
}

.container {
  padding-left: 8.34%;
  padding-right: 8.34%;
}

.vacancy {
  text-align: left;

  &__date {
    text-align: right;

    @media screen and (max-width: 768px) {
      text-align: left;
      flex: auto;
      width: 100%;
    }
  }

  &__skill {
    margin-bottom: 40px;
  }

  &__info {
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 150%;

    @media screen and (max-width: 1440px) {
      font-size: 18px;
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  &__location {
    flex: 1;
    max-width: 488px;

    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }

  &__remote {
    margin-left: 10px;
    padding: 0 3px;
    background: #12e2b0;

    &_bold {
      font-weight: 700;
    }
  }

  &__remote_2 {
    padding: 0 3px;
    background: #12e2b0;
  }

  &__state {
    flex: 1;

    @media screen and (max-width: 768px) {
      width: 30%;
      text-align: end;
      flex: inherit;
    }

    &:before {
      content: '';
      position: relative;
      top: -4px;
      display: inline-block;
      margin-right: 10px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    &.open {
      &:before {
        background: #12e2b0;
      }
    }

    &.closed {
      &:before {
        background: #ff0000;
      }
    }
  }

  &__section_2 {
    margin-bottom: 240px;
  }

  &__section_1 {
    padding-bottom: 80px;
    padding-top: 150px;

    @media screen and (max-width: 1440px) {
      padding-top: 100px;
    }

    @media screen and (max-width: 768px) {
      padding-bottom: 40px;
      padding-top: 50px;
    }
  }
}
</style>
