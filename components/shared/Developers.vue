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
          <b-row class="flex">
            <nuxt-img class="developer-avatar" :src="'/' + dev.avatar_url" alt="candidate avatar" />
            <div class="">
              <p class="developer-name">{{dev.name}}</p>
              <span class="developer-exp">{{dev.exp}} years of exp.</span>
              <span class="developer-eng">Eng: {{dev.english_level}}</span>
            </div>
          </b-row>
          <b-row class="developer--hard-skills">
            <span class="developer-skill">Hard skill(s):</span>
            <div v-for="skill in dev.candidate_hard_skills" :key="skill.id">
              <nuxt-img :src="'/' + skill.stack.icon_s3_key" />
              <span class="developer--stack-name">{{skill.stack.name}}</span>
              <span>{{ skill.assessment_result }}%</span>
            </div>
          </b-row>
          <b-row class="developer--soft-skills">
            <span class="developer-skill">Soft skill(s):</span>
            <div v-for="skill in dev.candidate_soft_skills" :key="skill.id">
              <nuxt-img :src="skill.skill.s3_key || '/'" />
              <span class="developer--skill-name">{{skill.skill.name}}</span>
              <span>{{ skill.assessment_result }}%</span>
            </div>
          </b-row>
          <b-row class="developer--additional-skills">
            <span class="developer-skill">Additional:</span>
            <div v-for="skill in dev.candidate_additional_skills" :key="skill.id" class="flex no-wrap">
              <nuxt-img :src="skill.skill.s3_key || '/'" />
              <span>{{skill.skill.name}}</span>
              <span>{{ skill.assessment_result }}%</span>
            </div>
          </b-row>
        </b-col>
        <!-- <div class="text-block">
          <h3>The best talent from around the globe at your fingertips</h3>
          <p>ScrumLaunch has talent hubs with management teams on the ground in North America, Latin America, Eastern Europe and India to facilitate deep access to each local market.</p>
        </div>
        <div class="separator" />
        <b-row class="locations" no-gutters>
          <b-col v-for="(location, index) in locations" :key="index" class="location">
            <img
              :src="require('@/assets/icons/marker.svg')"
              alt="mark"
            />
            <span>{{ location }}</span>
          </b-col>
        </b-row> -->
      </b-row>
      <b-row no-gutters>
        <!-- <nuxt-img
          class="map-image"
          :src="`/shared/talent-map/map${isWhite ? '--white' : ''}.svg`"
          alt="talent-map"
        /> -->
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

  async created() {
    const {data} = await this.$axios({
      method: 'get',
      url: this.$config.scrumTeamsAPI,
      headers: { 'HTTP-API-KEY': 'adb27cb0ad4b9c3534a4f520' },
    });

    this.developers = data.candidates || [];

    console.log(56, this.developers);
  },

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
    height: 366px;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 28.854px 37.51px;
    margin-bottom: 20px;

    @include tablet-and-up {
      height: 300px;
    }
    @include desktop-and-up {
      height: 166px;
    }

    &-avatar {
      width: 115px;
      height: 115px;
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

    &-skill {
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

    &--additional-skills, &--hard-skills, &--soft-skills {
      display: flex;
      align-items: center;
      height: 45px;
    }
  }
}

</style>
