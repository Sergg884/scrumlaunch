<template>
  <div class="developers" :class="{'white': isWhite}" >
    <section>
      <h3>{{devLang}} developers</h3>
      <b-row no-gutters>
        <b-col
          v-for="(dev, index) in developers"
          :key="index"
          class="developer col-12"
        >
          <b-row class="developer-header mb-3">
            <nuxt-img class="developer-avatar" :src="'https://scrumlaunch-teams.s3.amazonaws.com/' + dev.avatar_url" alt="candidate avatar" />
            <div>
              <p class="developer-name">{{dev.name}}</p>
              <span class="developer-exp">{{dev.exp}} years of exp.</span>
              <span class="developer-eng">Eng: {{dev.english_level}}</span>
            </div>
          </b-row>
          <b-row class="developer--hard-skills">
            <span class="developer--skill-bar">Hard skill(s):</span>
            <div v-for="skill in dev.candidate_hard_skills" :key="skill.id" class="developer-skill">
              <nuxt-img :src="'https://scrumlaunch-teams.s3.amazonaws.com/' + skill.stack.icon_s3_key" class="developer--skill-icon"/>
              <span class="developer--stack-name">{{skill.stack.name}}</span>
              <nuxt-img src="pages/hire-developers/star.svg" alt="get-started-hero-img" class="skill-star"/>
              <span class="skill-percent">{{ skill.assessment_result }}%</span>
            </div>
          </b-row>
          <b-row class="developer--soft-skills">
            <span class="developer--skill-bar">Soft skill(s):</span>
            <div v-for="skill in dev.candidate_soft_skills" :key="skill.id" class="developer-skill">
              <nuxt-img :src="skill.skill.s3_key || '/'" />
              <span class="developer--skill-name">{{skill.skill.name}}</span>
              <nuxt-img src="pages/hire-developers/star.svg" alt="get-started-hero-img" />
              <span class="skill-percent">{{ skill.assessment_result }}%</span>
            </div>
          </b-row>
          <b-row class="developer--additional-skills">
            <span class="developer--skill-bar">Additional:</span>
            <div v-for="skill in dev.candidate_additional_skills" :key="skill.id" class="developer--additional-skill">
              <span>{{skill.skill.name}}</span>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>

export default {
  props: {
    devLang: null,
    isWhite: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      developers: []
    }
  },

  beforeCreate() {
    this.$axios({
      method: 'get',
      url: this.$config.scrumTeamsAPI,
      headers: { 'HTTP-API-KEY': 'adb27cb0ad4b9c3534a4f520' },
    }).then(({data}) => {
      this.developers = data.candidates || [];
    // eslint-disable-next-line no-console
    }).catch((err) => console.error(err))
  },

  created() {
    console.log(this.$parent)
  }

}
</script>

<style lang="scss" scoped>

.developers {
  display: flex;

  h3 {
    text-transform: uppercase;
    @include tablet-and-up {
      margin: 0 15px;
    }
    @include desktop-and-up {
      margin: 0 40px;
    }
  }

  .developer {
    height: 346px;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 28px 37px;
    margin-bottom: 20px;

    @include tablet-and-up {
      height: 346px;
    }
    @include desktop-and-up {
      height: 166px;
    }

    &-avatar {
      width: 115px;
      height: 115px;
      border-radius: 8px;
      background: lightgray 50% / cover no-repeat;
      margin-right: 24px;
    }

    &-name {
      text-align: left;
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 36.4px */
    }

    &-exp, &-eng {
      color: var(--basic-colors-dark-gray, #726C7A);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }

    &--skill-name {
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }

    &--skill-icon {
      height: 20px;
      width: 20px;
    }

    &--skill-bar {
      width: 115px;
      text-align: left;
      color: var(--basic-colors-dark-gray, #726C7A);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }

    &--stack-name, &--skill-name {
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }

    &-skill {
      display: flex;
      padding: 5px 17px;
      border-radius: 8px;
      border: 1px solid var(--secondary-colors-f-1-f-0-ee, #F1F0EE);
      background: var(--basic-colors-white, #FFF);
      align-items: center;
      gap: 5px;
    }

    &--additional-skills, &--hard-skills, &--soft-skills {
      display: flex;
      align-items: center;
      height: 45px;
      gap: 10px;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 10px;
    }

    &--additional-skill {
      padding: 5px 17px;
      border-radius: 8px;
      border: 1px solid var(--secondary-colors-f-1-f-0-ee, #F1F0EE);
      background: var(--basic-colors-white, #FFF);
      color: var(--basic-colors-dark-gray, #726C7A);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
      white-space: nowrap;
    }

    .skill-percent {
      color: var(--primary-colors-black, #121212);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 30px */
    }

    .skill-star {
      fill: red;
    }
  }
}

</style>
