<template>
  <div class="talent-map" :class="{'white': isWhite}" >
    <section>
      <h3>{{devLang}} developers</h3>
      <b-row class="text-container" no-gutters>
        <div 
          v-for="(dev, index) in developers"
          :key="index"
        >
          <nuxt-img :src="'/' + dev.avatar_url" alt="candidate avatar" />
          <span>{{dev.name}}</span>
          <span>{{dev.exp}}</span>
          <span>{{dev.english_level}}</span>
          <div v-for="skill in dev.candidate_hard_skills" :key="skill.id">
            <div>
              <nuxt-img :src="'/' + skill.stack.icon_s3_key" />
              <span>{{skill.stack.name}}</span>
              <span>{{ skill.assessment_result }}</span>
            </div>
          </div>
          <div v-for="skill in dev.candidate_soft_skills" :key="skill.id">
            <div>
              <nuxt-img :src="skill.skill.s3_key || '/'" />
              <span>{{skill.skill.name}}</span>
              <span>{{ skill.assessment_result }}</span>
            </div>
          </div>
          <div v-for="skill in dev.candidate_additional_skills" :key="skill.id">
            <div>
              <nuxt-img :src="skill.skill.s3_key || '/'" />
              <span>{{skill.skill.name}}</span>
              <span>{{ skill.assessment_result }}</span>
            </div>
          </div>
        </div>
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
      headers: { 'HTTP-API-KEY': 123123 },
    });

    this.developers = data.candidates || [];

    console.log(56, this.developers);
  },

}
</script>

<style lang="scss" scoped>

.talent-map {
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

  .map-image {
    width: 100%;
  }
}

</style>
